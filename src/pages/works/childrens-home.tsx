import { motion } from 'framer-motion';
import { Book, Heart, Home, Users } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import chData from '@/content/childrens-home.json';

const iconMap: Record<string, React.ElementType> = { Book, Heart, Home, Users };
const programIcons = ['Book', 'Heart', 'Users', 'Home'];

const { galleryImages, title, subtitle, impactTitle, impactDescription1, impactDescription2, impactDescription3, heroImage } = chData;
const programs = chData.programs.map((p, i) => ({ ...p, icon: iconMap[programIcons[i]] }));

export default function ChildrensHome() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
        </motion.div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">{impactTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{impactDescription1}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px]"
          >
            <img
              src={heroImage}
              alt="Children playing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">{impactDescription2}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">{impactDescription3}</p>
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <program.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Image Gallery Section */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Children's Home Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Large Images Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://intellectuallyunavailable.github.io/velemegna/images/image28.jpg"
              alt="Children and Caregivers"
              className="w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://intellectuallyunavailable.github.io/velemegna/images/image55.jpg"
              alt="Children playing games"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
  