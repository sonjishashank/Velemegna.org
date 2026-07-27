import { motion } from 'framer-motion';
import data from '@/content/gallery.json';

const images = data.images.map((img) => ({
  ...img,
  url: img.url.includes('?') ? img.url : `${img.url}?auto=format&fit=crop&q=80&w=1200&h=600`,
}));

const [mainVideo, ...videoUrls] = data.videos;

export default function Gallery() {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Gallery Header */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-primary/80 italic mb-4">
            Restoring Sight, Transforming Lives
          </p>
          <p className="text-lg text-muted-foreground">
            Journey through our moments of care, compassion, and community service.
          </p>
        </motion.div>
      </section>

      {/* Large Video Container */}
      {mainVideo && (
        <section className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <iframe
                src={mainVideo}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </section>
      )}

      {/* Small Video Containers */}
      {videoUrls.length > 0 && (
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoUrls.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <iframe
                  src={url}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Image Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
