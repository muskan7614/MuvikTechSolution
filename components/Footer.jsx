'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'DevOps',
    'Digital Marketing'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div 
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 lg:col-span-2"
            >
              <Link href="/" className="flex items-center mb-6">
                <img
                  src="/muviklogo.png"
                  alt="Muvik Solutions"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-xl font-semibold text-gray-300 mb-4">
                Muvik — Code. Design. Innovate.
              </p>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted partner for Web Development, App Development, UI/UX, DevOps and Digital Marketing.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="mailto:vinaychaudhary9899@gmail.com"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiMail className="mr-3" />
                  vinaychaudhary9899@gmail.com
                </a>
                <a 
                  href="tel:+918252911976"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiPhone className="mr-3" />
                  +91-8252911976
                </a>
                <div className="flex items-center text-gray-300">
                  <FiMapPin className="mr-3" />
                  India
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-400">
                    {service}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/muvik.com/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Visit our LinkedIn profile"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="mailto:vinaychaudhary9899@gmail.com"
                    className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                    aria-label="Send us an email"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Muvik Solutions. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}