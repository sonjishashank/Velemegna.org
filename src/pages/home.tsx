import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import InteractiveCard from '@/components/InteractiveCard';

const features = [
  {
    icon: Eye,
    title: 'Eye Care Excellence',
    description:
      'State-of-the-art facilities and expert care for all your vision needs.',
  },
  {
    icon: Users,
    title: 'Community Service',
    description:
      'Dedicated to serving our community through various outreach programs.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'Providing care with empathy and understanding for every patient.',
  },
];

const carouselImages = [
  {
    url: '/newsletters/IMG_5908-768x681.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    alt: 'Modern hospital facility',
  },
];

export default function Home() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="relative h-[600px] overflow-hidden bg-primary-light">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center text-white">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                      >
                        VELEMEGNA EYE HOSPITAL
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl text-white/90 italic mb-4"
                      >
                        Restoring Sight, Transforming Lives
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl mb-8"
                      >
                        We strive for excellence and dedicate ourselves to serving others with compassion and care.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Button size="lg" asChild>
                          <a href="/appointment">
                            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Velemegna, a registered charitable society, is dedicated to providing comprehensive and affordable quality eye care services for everyone. Our mission is achieved through education, training, research, and a commitment to excellence in service delivery. Guided by the compassionate vision of our Founder, we remain steadfast in our care and support for individuals affected by leprosy.
              </p>
              <p className="text-lg text-muted-foreground">
              Velemegna Society is committed to delivering excellence in healthcare and community services with compassion and integrity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <InteractiveCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />          
            ))}
          </div>
        </div>
      </section>

      <section className="container bg-off-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Acronym Section */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">
        Our Motive
      </h2>
      <div className="space-y-2">
        {[
          { letter: "Velemegna", meaning: "Velemegna Society provides high-quality eye care through its charitable eye hospital, ensuring treatment is accessible to all, regardless of financial means. It extends care to individuals affected by leprosy through community outreach and support programs, working to restore dignity and improve quality of life. For vulnerable children, Velemegna offers a safe and nurturing environment through its children’s home, along with access to education and holistic development. In addition, the Society invests in the future of eye care by training and mentoring the next generation of optometrists through its optometry college." },
          // { letter: "E", meaning: "Evangelical" },
          // { letter: "L", meaning: "Leprosy" },
          // { letter: "E", meaning: "Eradication" },
          // { letter: "M", meaning: "Medical" },
          // { letter: "E", meaning: "Educational" },
          // { letter: "G", meaning: "Good" },
          // { letter: "N", meaning: "News" },
          // { letter: "A", meaning: "Association" },
        ].map((item, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-lg font-medium"
          >
            <span className="font-bold text-primary">{item.letter}</span> – {item.meaning}
          </motion.p>
        ))}
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden w-full h-auto"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DZmIPvCPa0m/?igsh=dWtsNDRjNDhxYm5t"
              data-instgrm-version="14"
              style={{
                maxWidth: "540px",
                margin: "0 auto",
              }}
            ></blockquote>
          </motion.div>

  </div>
</section>

    </div>
  );
}
