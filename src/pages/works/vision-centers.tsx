import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { motion } from "framer-motion";
import { Eye, Shield, Users, MapPin, Phone, Map } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import L from "leaflet"; // For marker customization
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { Fade } from 'react-awesome-reveal'; // Use Fade or other animations from react-awesome-reveal

import centersData from '@/content/vision-centers.json';

const centers = centersData.centers.map((c) => ({
  name: c.name,
  coordinates: c.coordinates as [number, number],
  contact: { phone: c.phone, address: c.address },
  image: c.image,
}));

const bidarCoordinates = [17.9127, 77.5199]; // Coordinates of Bidar

// Define the images constant for the new image containers
const images = [
  "https://intellectuallyunavailable.github.io/velemegna/images/image9.jpg", // Image 1
  "https://intellectuallyunavailable.github.io/velemegna/images/image10.jpg", // Image 2
  "https://intellectuallyunavailable.github.io/velemegna/images/image11.jpg", // Image 3
  "https://intellectuallyunavailable.github.io/velemegna/images/image14.jpg", // Image 4
  "https://intellectuallyunavailable.github.io/velemegna/images/image13.jpg", // Image 5
  "https://intellectuallyunavailable.github.io/velemegna/images/image15.jpg", // Image 6
];

export default function VisionCenters() {
  const [mapZoom, setMapZoom] = useState(10); // State for controlling map zoom

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMapZoom(11); // Smoothly zoom into the map after load for a dynamic effect
    }, 2000);

    return () => clearTimeout(timeout); // Clear timeout if the component unmounts
  }, []);

  // Function to handle opening the location in Google Maps
  const openInGoogleMaps = (coordinates) => {
    const [lat, lng] = coordinates;
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Vision Centers</h2>
          <p className="text-xl text-primary/80 italic text-center mb-8">
            Restoring Sight, Transforming Lives
          </p>
          {/* <h1 className="text-4xl font-bold mb-6 text-gradient">Vision Centers</h1> */}
          <p className="text-lg text-muted-foreground mb-8">
            Connecting communities in and around Bidar through quality eye care.
          </p>
        </motion.div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Centers Map</h2>
        <MapContainer
          center={bidarCoordinates}
          zoom={mapZoom} // Controlled zoom level with state
          style={{ width: "100%", height: "500px", transition: "all 0.5s ease-in-out" }} // Smooth transition on zoom change
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={bidarCoordinates}
            icon={new L.Icon.Default()}
            bounceOnAdd={true} // Bounce animation for Bidar marker
            eventHandlers={{
              click: () => openInGoogleMaps(bidarCoordinates), // Open Bidar in Google Maps on click
            }}
          >
            <Popup>Bidar</Popup>
          </Marker>

          {/* Markers for all centers with animation on hover */}
          {centers.map((center, index) => (
            <Marker
              key={index}
              position={center.coordinates}
              icon={new L.Icon.Default()}
              riseOnHover={true} // Raise marker on hover
              eventHandlers={{
                click: () => openInGoogleMaps(center.coordinates), // Open center location in Google Maps on click
              }}
            >
              <Popup>{center.name}</Popup>
            </Marker>
          ))}

          {/* Stylish animated lines with hover effect */}
          {centers.map((center, index) => (
            <Polyline
              key={index}
              positions={[bidarCoordinates, center.coordinates]}
              color="blue"
              weight={3}
              opacity={0.7}
              dashArray="5,5"
              lineCap="round"
              lineJoin="round"
              eventHandlers={{
                mouseover: (e) => {
                  e.target.setStyle({ color: "red", weight: 5 }); // Change color on hover
                },
                mouseout: (e) => {
                  e.target.setStyle({ color: "blue", weight: 3 }); // Revert back on mouseout
                },
              }}
            />
          ))}
        </MapContainer>
      </section>

      {/* New section for image containers */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Centers Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Fade key={index} duration={1000} delay={index * 200}>
              <div className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* New Services Section */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Fade cascade damping={0.1}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Early Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early detection of eye problems through comprehensive screening
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Vision Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vision testing and refraction services
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Spectacles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dispensing spectacles to those in need
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Cataract Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cataract screening and referral to base hospital
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  School Screening
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive eye screening programs in schools
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eye awareness program and IEC distribution
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Networking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Networking with NGO's and Self Help Groups
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Community screening and referral to vision centers
                </p>
              </CardContent>
            </Card>
          </Fade>
        </div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Center Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <Fade key={index} duration={1000} delay={index * 200}>
              <Card className="transition-transform transform hover:scale-105 duration-300">
                <div className="relative h-48 bg-gray-300 rounded-t-lg">
                  <img
                    src={center.image}
                    alt={`${center.name} Vision Center`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
  <CardTitle>{center.name}</CardTitle>
  <CardDescription className="flex flex-col items-start gap-2"> {/* Use flex-col for vertical stacking */}
    <div className="flex items-center gap-2">
      <MapPin className="h-4 w-4" />
      {center.contact.address}
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4" />
      {center.contact.phone}
    </div>
  </CardDescription>
</CardHeader>
              </Card>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
