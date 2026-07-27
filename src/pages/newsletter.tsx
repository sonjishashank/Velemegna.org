import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import data from '@/content/newsletters.json';

const { newsletters } = data;

const years = ['2024', '2023', '2022'];

export default function Newsletter() {
  return (
    <div
      className="flex flex-col gap-16 py-16"
      style={{
        backgroundImage: 'url(/path/to/your/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Newsletters</h1>
          <p className="text-xl text-primary/80 italic mb-4">
            Restoring Sight, Transforming Lives
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated with our latest news and developments.
          </p>

          {/* Director Profile Section */}
          {/* <div className="mb-12">
            <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/newsletters/Sybil.png"
                alt="Dr. Sybil Meshramkar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Dr. Sybil Meshramkar</h2>
            <p className="text-lg text-primary/80 font-medium mb-4">Director</p>
            <p className="text-muted-foreground">
              MBBS.M.Sc.CEH (London), DOMS(Vellore), ophthalmology Surgeon (Eye Specialist), 
              Senior Eye Surgeon in Velemegna Eye Hospital, Golekhana Bidar Karnataka.
            </p>
          </div> */}
        </motion.div>
      </section>

      <section className="container max-w-4xl">
        <div className="grid gap-6">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={newsletter.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${newsletter.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="text-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">{newsletter.title}</CardTitle>
                      <CardDescription className="text-gray-200">{newsletter.month}</CardDescription>
                    </div>
                    <Button variant="secondary" asChild className="hover:bg-white/90">
                      <a href={newsletter.url} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-gray-200">{newsletter.description}</p> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
