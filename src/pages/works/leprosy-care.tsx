import { motion } from 'framer-motion';
import { ChevronFirst as FirstAid, Heart, Home, Users } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import leprosyData from '@/content/leprosy-care.json';

const iconMap: Record<string, React.ElementType> = { FirstAid, Home, Users, Heart };
const serviceIcons = ['FirstAid', 'Home', 'Users', 'Heart'];
const services = leprosyData.services.map((s, i) => ({ ...s, icon: iconMap[serviceIcons[i]] }));
const { title, description, missionTitle, missionDescription, patientsTreated, yearsOfService, heroImage } = leprosyData;

export default function LeprosyCare() {
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
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
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
            <h2 className="text-3xl font-bold mb-4">{missionTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{missionDescription}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">{patientsTreated}</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">{yearsOfService}</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={heroImage}
              alt="Medical care"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}