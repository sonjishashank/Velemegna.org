import { motion } from 'framer-motion';
import { Phone, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import apptData from '@/content/appointment.json';

const { title, subtitle, phones, workingDays, timings } = apptData;

export default function Appointment() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              {phones.map((p) => (
                <p key={p} className="text-lg font-medium text-primary">{p}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Working Days</h3>
              <p className="text-muted-foreground">{workingDays}</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Timings</h3>
              <p className="text-muted-foreground">{timings}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="tel:9611643512">
              <Phone className="mr-2 h-5 w-5" />
              Call Now to Book Appointment
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Our staff will assist you in scheduling your appointment and answer any questions you may have.
          </p>
        </div>
      </motion.div>
    </div>
  );
}