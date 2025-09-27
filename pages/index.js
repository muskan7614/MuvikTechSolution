'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import HeroSlider from '../components/HeroSlider';
import { FiCode, FiSmartphone, FiDatabase, FiServer, FiPenTool, FiCpu, FiUsers, FiClock, FiArrowRight, FiStar } from 'react-icons/fi';
import { FaBullhorn } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Home() {
  const services = [
    {
      icon: <FiCode size={24} />,
      title: 'Web Development',
      description: 'Modern, responsive websites with cutting-edge technology',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Web development code and interface design'
    },
    {
      icon: <FiSmartphone size={24} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mobile app development mockup'
    },
    {
      icon: <FiCpu size={24} />,
      title: 'AI Chatbots & Agents',
      description: 'Intelligent conversational AI using Dify & LLMs',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'AI chatbot interface with smart responses'
    },
    {
      icon: <FiServer size={24} />,
      title: 'No-Code Development',
      description: 'Rapid development with WeWeb & modern no-code tools',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'No-code development platform interface'
    },
    {
      icon: <FiDatabase size={24} />,
      title: 'Database Development',
      description: 'Scalable database solutions and optimization',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Database server infrastructure'
    },
    {
      icon: <FaBullhorn size={24} />,
      title: 'Marketing & Branding',
      description: 'Digital marketing strategies and brand identity',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital marketing and social media strategy'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FiCpu size={32} />,
      title: 'AI-powered Development',
      description: 'Leveraging cutting-edge AI tools to accelerate development and enhance quality'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Experienced Team',
      description: 'Skilled professionals with years of experience in modern technologies'
    },
    {
      icon: <FiClock size={32} />,
      title: 'Fast Delivery & Support',
      description: 'Rapid development cycles with ongoing support and maintenance'
    }
  ];

  const portfolioHighlights = [
    {
      title: 'E-Commerce Platform',
      description: 'Custom storefront with payment gateway & admin panel',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      alt: 'E-commerce website interface'
    },
    {
      title: 'Delivery Mobile App',
      description: 'Real-time tracking with driver & user interfaces',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mobile delivery app interface'
    },
    {
      title: 'Restaurant Management',
      description: 'Complete POS system with inventory management',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant management dashboard'
    },
    {
      title: 'Healthcare Platform',
      description: 'Patient management with telemedicine features',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Healthcare platform interface'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Retailer',
      rating: 5,
      text: 'Muvik delivered my e-commerce website in record time. Professional team and great support!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Priya Sharma',
      company: 'Digital Agency',
      rating: 5,
      text: 'Their UI/UX design transformed our brand completely. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Amit Patel',
      company: 'Startup Founder',
      rating: 5,
      text: 'From concept to deployment, Muvik handled everything perfectly. Amazing results!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const seo = {
    title: "Muvik — We Build Websites, Apps & Digital Solutions",
    description: "Muvik builds modern websites, mobile apps, and digital marketing solutions. Full-stack dev, UI/UX, DevOps & social media — contact us to start your project."
  };

  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <HeroSlider />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <motion.div
                className="text-white z-20 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Trusted Digital Agency
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  We Build Websites, Apps & Digital Solutions That{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Grow Your Business
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-200 mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Muvik is your trusted partner for Web Development, App Development, UI/UX, DevOps and Digital Marketing.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact#quote"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-center"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-200 text-center"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white inline-flex items-center text-sm font-medium transition-colors"
                  >
                    See Our Services <FiArrowRight className="ml-2" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Floating Portfolio Cards - Desktop Only */}
              <motion.div
                className="hidden lg:block relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="relative">
                  {portfolioHighlights.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl"
                      style={{
                        top: `${index * 60}px`,
                        left: `${index * 40}px`,
                        zIndex: 3 - index
                      }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-48 h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive digital solutions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-purple-600 font-medium inline-flex items-center transition-colors"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Muvik?
            </h2>
            <p className="text-xl text-gray-600">
              We combine expertise with innovation to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
                variants={fadeUp}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600">
                See what we've built for our amazing clients
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="mt-6 lg:mt-0"
            >
              <Link
                href="/portfolio"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View All Projects
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioHighlights.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <Link
                    href="/portfolio"
                    className="text-blue-600 hover:text-purple-600 text-sm font-medium inline-flex items-center transition-colors"
                  >
                    View Details <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
                variants={fadeUp}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            {...fadeUp}
          >
            <Link
              href="/reviews"
              className="text-blue-600 hover:text-purple-600 font-medium inline-flex items-center text-lg transition-colors"
            >
              Read More Reviews <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-24 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Share your idea — we'll provide a fast plan and a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918252911976?text=Hi%20Muvik!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Message Us on WhatsApp
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}