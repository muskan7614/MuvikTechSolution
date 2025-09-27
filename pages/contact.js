'use client';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  const seo = {
    title: "Contact Muvik — Let's Build Something Amazing Together",
    description: "Contact Muvik for web development, app building, UI/UX, DevOps and digital marketing. Get your free quote today!"
  };

  return (
    <Layout seo={seo}>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your ideas into digital reality? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl h-fit">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FiMail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:vinaychaudhary9899@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        vinaychaudhary9899@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FiPhone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a 
                        href="tel:+918252911976"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        +91-8252911976
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FiMapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.linkedin.com/company/muvik.com/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                  >
                    <FaWhatsapp className="mr-3" size={20} />
                    Chat on WhatsApp
                  </a>
                  
                  <a
                    href="tel:+918252911976"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-200"
                  >
                    <FiPhone className="mr-3" size={20} />
                    Call Now
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/vinay-chaudhary2608/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Visit our LinkedIn profile"
                    >
                      <FiLinkedin size={20} />
                    </a>
                    <a
                      href="mailto:vinaychaudhary9899@gmail.com"
                      className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Send us an email"
                    >
                      <FiMail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <motion.div
                className="bg-blue-50 rounded-2xl p-6 mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response Time</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond within 2-4 hours during business hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            {...fadeUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                q: "How long does it take to build a website?",
                a: "Typically 2-6 weeks depending on complexity and requirements. We'll provide a detailed timeline after discussing your project."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! We offer maintenance packages and ongoing support to keep your digital solutions running smoothly."
              },
              {
                q: "What technologies do you work with?",
                a: "We specialize in React, Next.js, Node.js, Java, Spring Boot, and modern cloud technologies. Check our Technologies page for the full list."
              },
              {
                q: "Do you work with startups?",
                a: "Absolutely! We love working with startups and can adapt to your budget and timeline requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}