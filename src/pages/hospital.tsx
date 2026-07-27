import { motion } from 'framer-motion';
import {
  Brain,
  Calendar,
  Eye,
  FileText,
  Award,
  Heart,
  HeartPulse,
  Microscope,
  Phone,
  Stethoscope,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';


import hospitalData from '@/content/hospital.json';

const { equipment, doctors, insuranceProviders } = hospitalData;

const facilities = [
  {
    title: 'Operation Theaters',
    description: 'State-of-the-art operation theaters equipped with the latest technology.',
    image: '/newsletters/operation.jpeg',
  },
  {
    title: 'Patient ward',
    description: 'Room for patient to rest and recover',
    image: '/newsletters/patient.jpeg',
  },
  {
    title: 'Optical lens',
    description: 'Best optical lens for your eyes',
    image: '/newsletters/optical.jpeg',
  },
];

export default function Hospital() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Dr. Salins Eye Hospital</h1>
          <p className="text-xl text-primary/80 italic mb-4">
            Restoring Sight, Transforming Lives
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Providing comprehensive eye care services with state-of-the-art
            facilities and experienced professionals since 1970.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/appointment">
                Book Appointment <Calendar className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:08482230567">
                Call Us <Phone className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Image Section Below */}
      <section className="relative w-full h-80 rounded-lg overflow-hidden">
  <img
    src="https://intellectuallyunavailable.github.io/velemegna/images/image22.jpg?auto=format&fit=crop&q=80&w=600&h=400"
    alt="Hospital Image"
    className="w-full h-full object-cover"
  />
</section>

<section className="container py-16">
  <h2 className="text-3xl font-bold text-center mb-12">Our Equipment & Facilities</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {equipment.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/png?text=' + item.title.replace(/\s+/g, '+');
                }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>

      {/* <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="bg-white py-16">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
    <Tabs defaultValue="operation-theaters" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="operation-theaters">Operation Theaters</TabsTrigger>
        <TabsTrigger value="patient-ward">Patient ward</TabsTrigger>
        <TabsTrigger value="optical-lens">Optical lens</TabsTrigger>
      </TabsList>
      {facilities.map((facility) => (
        <TabsContent
          key={facility.title}
          value={facility.title.toLowerCase().replace(/\s+/g, '-')}
        >
          <Card>
            <CardHeader>
              <CardTitle>{facility.title}</CardTitle>
              <CardDescription>{facility.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/png?text=' + facility.title.replace(/\s+/g, '+');
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</section>

{/* Additional Facilities Section */}
<section className="bg-white py-16">
  <div className="container">
    <Tabs defaultValue="Outpatient Department" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Outpatient Department">Outpatient Department</TabsTrigger>
        <TabsTrigger value="Laboratory">Laboratory</TabsTrigger>
        <TabsTrigger value="pharmacy">In-house Pharmacy</TabsTrigger>
      </TabsList>
      <TabsContent value="Outpatient Department">
        <Card>
          <CardHeader>
            <CardTitle>Outpatient Department</CardTitle>
            <CardDescription>
              Equipped with cutting-edge diagnostic tools for precise results.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/newsletters/opd.jpeg"
                alt="Outpatient Department"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Laboratory">
        <Card>
          <CardHeader>
            <CardTitle>Laboratory</CardTitle>
            <CardDescription>
              Comfortable Laboratory designed for optimal patient care and rest.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/newsletters/lab.jpeg"
                alt="Laboratory"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pharmacy">
        <Card>
          <CardHeader>
            <CardTitle>In-house Pharmacy</CardTitle>
            <CardDescription>
              Providing quick access to prescribed medicines for patient convenience.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/newsletters/pharmacy.jpeg"
                alt="In-house Pharmacy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</section>


<section className="container py-16">
  <h2 className="text-3xl font-bold text-center mb-12">Our Doctors</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
    {doctors.map((doctor, index) => (
      <motion.div
        key={doctor.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-6">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{doctor.name}</h3>
          <p className="text-primary font-medium">{doctor.specialization}</p>
          {/* <p className="text-muted-foreground max-w-md mx-auto">{doctor.description}</p> */}
          
        </div>
      </motion.div>
    ))}
  </div>
</section>

<section className="container py-16 bg-gray-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Insurance Partners</h2>
          <p className="text-center text-muted-foreground mb-12">
            We accept cashless claims from the following insurance providers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {insuranceProviders.map((provider) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div className="h-20 w-full mb-4 relative">
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `/insurance-logos/placeholder.png`;
                    }}
                  />
                </div>
                <h3 className="font-medium text-sm text-foreground">{provider.name}</h3>
                <span className="text-xs text-muted-foreground mt-1">{provider.category}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                {/* <h3 className="text-xl font-semibold mb-2">Need Help with Insurance?</h3>
                <p className="text-muted-foreground">
                  Our insurance desk will assist you with claims and coverage details
                </p> */}
              </div>
              <div className="flex gap-4">
                {/* <Button variant="outline" asChild>
                  <a href="tel:08482230567">Call Insurance Desk</a>
                </Button>
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our team of experienced doctors and staff provide the highest
                    quality care.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <Microscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Latest Technology</h3>
                  <p className="text-muted-foreground">
                    We use the most advanced equipment and techniques available.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    We prioritize patient comfort and satisfaction in everything we
                    do.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://intellectuallyunavailable.github.io/velemegna/images/image26.jpg?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Medical consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}