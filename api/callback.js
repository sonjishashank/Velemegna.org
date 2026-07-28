export default async function handler(req, res) {
  const { code, provider } = req.query;

  // Step 1: No code yet — redirect to GitHub to start OAuth
  if (!code) {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: 'repo,user',
      redirect_uri: 'https://www.velemegna.org/api/callback',
    });
    return res.redirect(`https://github.com/login/oauth/authorize?${params}`);
  }

  // Step 2: Got code back from GitHub — exchange for access token
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: 'https://www.velemegna.org/api/callback',
    }),
  });

  const data = await response.json();

  if (data.error) {
    const html = `<!DOCTYPE html><html><body><script>
      window.opener.postMessage('authorization:github:error:${data.error_description}', '*');
      window.close();
    <\/script></body></html>`;
    return res.setHeader('Content-Type', 'text/html').status(401).send(html);
  }

  const token = data.access_token;
  const content = JSON.stringify({ token, provider: 'github' });

  const html = `<!DOCTYPE html><html><body><script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:${content}',
          e.origin
        );
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  <\/script></body></html>`;

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
