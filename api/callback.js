export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing code');
  }

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
    }),
  });

  const data = await response.json();

  if (data.error) {
    const html = `<!DOCTYPE html><html><body><script>
      window.opener.postMessage('authorization:github:error:${data.error_description}', '*');
      window.close();
    </script></body></html>`;
    return res.setHeader('Content-Type', 'text/html').status(401).send(html);
  }

  const token = data.access_token;
  const content = JSON.stringify({ token, provider: 'github' });

  const html = `<!DOCTYPE html><html><body><script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:' + ${JSON.stringify(content)},
          e.origin
        );
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`;

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
