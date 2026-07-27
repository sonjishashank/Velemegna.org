import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, Home, Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import donateData from '@/content/donate.json';

const causeIcons = [Eye, Home, Heart];
const causes = donateData.causes.map((c, i) => ({ ...c, icon: causeIcons[i] }));
const { title, subtitle, donationUrl } = donateData;

export default function Donate() {
  const handleDonate = () => {
    window.location.href = donationUrl;
  };

  const causeColors = ['text-blue-500', 'text-green-500', 'text-red-500'];

  return (
    <div className="container py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        
        {/* Donation Progress Tracker */}
        {/* <div className="mb-12 bg-card p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Our Fundraising Progress</h2>
          <Progress value={donationProgress} className="h-6 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Getting Started</span>
            <span>{percentComplete}% Toward Our Goal</span>
            <span>Target Goal</span>
          </div>
        </div> */}
        
        {/* Cause Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className={`${causeColors[index]} mb-2`}>
                    <cause.icon size={28} />
                  </div>
                  <CardTitle>{cause.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{cause.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium text-primary">{cause.impact}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <Button
            onClick={handleDonate}
            size="lg"
            className="bg-primary text-white text-lg px-10 py-6 hover:bg-primary/90 transition-colors"
          >
            Donate Now
          </Button>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Every contribution makes a difference, regardless of size. Your generosity enables us to continue 
            providing essential services to the communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
}
