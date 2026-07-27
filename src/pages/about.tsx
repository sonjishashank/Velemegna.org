import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Calendar, Heart, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BoardMemberSlider } from '../components/BoardMemberSlider';

import aboutData from '@/content/about.json';

const timeline = aboutData.timeline;
const achievements = aboutData.achievements;
const boardMembers1 = aboutData.boardMembers.slice(0, 3);
const boardMembers = aboutData.boardMembers.slice(3);

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-2xl text-primary/80 italic mb-4">
            Restoring Sight, Transforming Lives
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Since 1970, the Velemegna Society has been at the forefront of eye care
            and community service. What started as a small clinic has grown into a
            comprehensive healthcare and social welfare organization.
          </p>
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
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
              Velemegna, a registered charitable society, is dedicated to providing comprehensive and affordable quality eye care services for everyone. Our mission is achieved through education, training, research, and a commitment to excellence in service delivery. Guided by the compassionate vision of our Founder, we remain steadfast in our care and support for individuals affected by leprosy.
              </p>
              <p className="text-lg text-muted-foreground">
              Velemegna Society is committed to delivering excellence in healthcare and community services with compassion and integrity.
              </p>
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
              src="/newsletters/About1.jpg"
              alt="Medical team at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <achievement.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey & Vision</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Our Journey Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Our Journey</h3>
          <div className="max-w-xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l last:pb-0"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-2">
                    {event.year}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section with Read More functionality */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Our Vision</h3>
          
          {/* Director Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 mb-8 text-center shadow-sm"
          >
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
              <img
                src={boardMembers1[1].image}
                alt={boardMembers1[1].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">{boardMembers1[1].name}</h4>
            <p className="text-lg text-primary/80 font-medium mb-4">{boardMembers1[1].position}</p>
            <p className="text-muted-foreground">{boardMembers1[1].description}</p>
          </motion.div>

          <div className="space-y-4 text-muted-foreground text-lg">
            <p className="text-muted-foreground">
              Velemegna: A Legacy of Compassion and Excellence in Eye Care

              Established over 56 years ago, Velemegna has grown into a trusted name in quality eye care in Bidar district, Karnataka, and beyond. As a not-for-profit institution, we are committed to providing comprehensive and affordable eye care, with a special focus on serving underprivileged communities.

              The vision of our founders, Dr. and Dr. Mrs. Salins, has been the cornerstone of our success, inspiring excellence and compassion. Their contributions, recognized across Karnataka, Maharashtra, and Telangana, have elevated Velemegna to new heights. Since 2002, Dr. Sybil Salins has continued their legacy, steering the hospital toward its mission of quality care, education, and training.

              Today, Velemegna serves over 40,000 patients annually with a dedicated team of 100+ members, including 5 full-time and 2 part-time doctors. Accredited by NABH for healthcare and patient safety, the hospital is embracing technology for a paperless and transparent environment. A state-of-the-art 36,000 sq. ft. hospital building, including a 6,000 sq. ft. operation theater complex, is under construction to meet global standards.

              Our impact extends through 10 Vision Centers in Bidar, Gulbarga, and Zaheerabad, Telangana, and a training program for doctors, surgeons, and technicians to build capacity in ophthalmology across Karnataka. Additionally, the Velemegna Children's Home provides education and care for 47 underprivileged children.

              Even during the challenges of the 2019/20 pandemic, our team demonstrated unwavering dedication to patient care. As we move forward, we remain committed to serving the poor and underserved, guided by the values and philosophy of our founders.

              We welcome feedback and suggestions to further strengthen our mission of providing compassionate, high-quality care to all.
            </p>
          </div>

          {/* PDF Viewer */}
          {/* <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">
              TRIALS AND TRIUMPH IN THE LORD'S VINEYARD - The Story of VELEMEGNA
            </h4>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://docs.google.com/viewer?url=https://velemegna.netlify.app/newsletters/Velemegna%20Story.pdf&embedded=true"
                className="w-full h-[800px]"
                title="PDF Viewer"
                frameBorder="0"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
<section className="container">
  <h2 className="text-3xl font-bold text-center mb-12">
    Governing Board Members
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {boardMembers1.map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center"
      >
<div className="w-full aspect-square mb-4 overflow-hidden rounded-lg relative">
  <img
    src={member.image}
    alt={member.name}
    className="absolute top-0 left-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
  />
</div>

        <h3 className="text-xl font-bold text-primary">{member.name}</h3>
        <p className="text-sm text-primary/80 font-medium">{member.position}</p>
        <p className="mt-2 text-muted-foreground text-sm">{member.description}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="container">
        {/* <h2 className="text-3xl font-bold text-center mb-12">General Board Members</h2> */}
        <BoardMemberSlider members={boardMembers} />
      </section>
    </div>
  );
}