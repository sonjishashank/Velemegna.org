import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import ScrollToTop from './ScrollToTop';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Hospital', href: '/hospital' },
  { 
    name: 'Institutions', 
    href: '/institutions',
    dropdown: [
      { name: 'College of Optometry', href: '/college' }
    ]
  },
  { 
    name: 'Other Works', 
    href: '/works',
    dropdown: [
      { name: 'Farms', href: '/works/farms' },
      { name: 'Leprosy Care Centre', href: '/works/leprosy-care' },
      { name: 'Vision Centers', href: '/works/vision-centers' },
      { name: "Children's Home", href: '/works/childrens-home' }
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  // { name: 'Newsletter', href: '/newsletter' },
  { name: 'Appointment', href: '/appointment' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <div className="relative min-h-screen bg-background">
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-primary/5 backdrop-blur supports-[backdrop-filter]:bg-primary/10",
          isScrolled && "shadow-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with Image */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/newsletters/logo hospital.png"
                alt="Velemegna Logo"
                className="h-20 w-20 object-contain"
              />
              <span className="font-bold whitespace-nowrap">Velemegna Good News Society</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`text-sm font-medium whitespace-nowrap inline-flex items-center ${
                        location.pathname.startsWith(item.href)
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      } transition-colors`}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Donate Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/donate">Donate Now</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] pr-0 bg-background">
                <div className="px-4 py-6">
                  {/* Logo */}
                  <Link to="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
                    <span className="font-bold text-lg">Velemegna Society</span>
                  </Link>

                  {/* Navigation Menu */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/about"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/hospital"
                          className="block text-sm hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Eye Hospital
                        </Link>
                      </li>
                      <li>
                        {/* <Link
                          to="/services"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Services
                        </Link> */}
                      </li>
                      {/* Other Works Dropdown */}
                      <li>
                        <details>
                          <summary className="cursor-pointer text-base hover:text-primary">
                            Other Works
                          </summary>
                          <ul className="mt-2 space-y-2 pl-4">
                            <li>
                              <Link
                                to="/works/farms"
                                className="block text-sm hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                Farms
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/works/leprosy-care"
                                className="block text-sm hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                Leprosy Care Centre
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/works/vision-centers"
                                className="block text-sm hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                Vision Centers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/works/childrens-home"
                                className="block text-sm hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                Children's Home
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      {/* Institutions Dropdown */}
                      <li>
                        <details>
                          <summary className="cursor-pointer text-base hover:text-primary">
                            Institutions
                          </summary>
                          <ul className="mt-2 space-y-2 pl-4">
                            <li>
                              <Link
                                to="/college"
                                className="block text-sm hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                College of Optometry
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appointment"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Appointment
                        </Link>
                      </li>
                      <li>
                        {/* <Link
                          to="/newsletter"
                          className="block text-base hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          Newsletter
                        </Link> */}
                      </li>
                    </ul>
                  </nav>

                  {/* Donate Button */}
                  <div className="mt-6">
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/donate" onClick={() => setIsOpen(false)}>
                        Donate Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
      <main className="min-h-[calc(100vh-4rem)] flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-xl">{children}</div>
      </main>
      <footer className="bg-background border-t">
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ml-auto">
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <address className="mt-2 not-italic">
                Golekhana, Bidar, Karnataka.<br />
                Phone: 9611643512, 08482230467, 230460<br />
                Email: velemegnabidar@gmail.com
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Works</h3>
              <ul className="mt-2 space-y-2">
                <li><Link to="/hospital">Eye Hospital</Link></li>
                <li><Link to="/college">College of Optometry</Link></li>
                <li><Link to="/works/vision-centers">Vision Centers</Link></li>
                <li><Link to="/works/childrens-home">Children's Home</Link></li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 mr-4">
            <a 
              href="https://www.facebook.com/velemegna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.youtube.com/@velemegnabidar1968" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/velemegnasociety?igshid=NGVhN2U2NjQ0Yg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
  <p>&copy; {new Date().getFullYear()} Velemegna Society. All rights reserved.</p>
  <p className="mt-2 text-sm">
    Created with ❤️ by{" "}
    <a
      href="https://wa.me/919110886128?text=We%20need%20a%20software%20solution%20for%20our%20business"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Starset-Solutions
    </a>
  </p>
</div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
