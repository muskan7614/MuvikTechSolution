'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FiExternalLink, FiGithub, FiArrowRight, FiX } from 'react-icons/fi';

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

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Websites', 'Apps', 'Design', 'Marketing'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform for Retailer X',
      category: 'Websites',
      description: 'Custom storefront with payment gateway & admin panel',
      longDescription: 'A comprehensive e-commerce solution built for a growing retail business. Features include product catalog, shopping cart, secure payment processing, order management, and a powerful admin dashboard.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      alt: 'E-commerce website interface with product listings',
      technologies: ['Next.js', 'Spring Boot', 'MySQL', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['+40% conversions', '3s avg page load', '99.9% uptime'],
      timeline: '8 weeks',
      problem: 'Client needed a modern e-commerce platform to replace their outdated system and improve customer experience.',
      solution: 'Built a responsive, fast-loading e-commerce platform with modern payment processing and inventory management.',
      screenshots: [
        'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 2,
      title: 'Delivery Mobile App',
      category: 'Apps',
      description: 'Driver & User apps with real-time tracking',
      longDescription: 'A comprehensive delivery management system with separate apps for customers and drivers, featuring real-time GPS tracking, push notifications, and payment integration.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mobile delivery app interface showing tracking map',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['25% faster delivery', '4.8★ app rating', '50k+ downloads'],
      timeline: '12 weeks',
      problem: 'Local delivery service needed a mobile solution to compete with major delivery platforms.',
      solution: 'Developed native mobile apps with real-time tracking, optimized routes, and seamless user experience.',
      screenshots: [
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      category: 'Websites',
      description: 'Complete POS system with inventory management',
      longDescription: 'A full-featured restaurant management system including POS, inventory tracking, staff management, and customer analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant management dashboard interface',
      technologies: ['React', 'Java', 'PostgreSQL', 'Spring Boot', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['30% cost reduction', '2x faster orders', '95% accuracy'],
      timeline: '10 weeks',
      problem: 'Restaurant chain needed to modernize their operations and reduce manual processes.',
      solution: 'Created an integrated management system that streamlined operations from ordering to inventory.',
      screenshots: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      category: 'Websites',
      description: 'Patient management with telemedicine features',
      longDescription: 'A comprehensive healthcare platform enabling doctors to manage patients, schedule appointments, and conduct virtual consultations.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Healthcare platform interface with patient dashboard',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['200+ doctors', '5000+ patients', '99% satisfaction'],
      timeline: '16 weeks',
      problem: 'Healthcare providers needed a digital solution for remote patient care during the pandemic.',
      solution: 'Built a secure telemedicine platform with video consultations and patient management tools.',
      screenshots: [
        'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 5,
      title: 'Brand Identity for Tech Startup',
      category: 'Design',
      description: 'Complete branding package with logo & guidelines',
      longDescription: 'A comprehensive brand identity project including logo design, color palette, typography, and brand guidelines for a growing tech startup.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Brand identity design with logo variations and color palette',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['3x brand recognition', '50% more leads', 'Award winning design'],
      timeline: '6 weeks',
      problem: 'Startup needed a professional brand identity to establish credibility and attract investors.',
      solution: 'Created a modern, memorable brand identity that reflects their innovative technology solutions.',
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Multi-platform campaign with 300% engagement boost',
      longDescription: 'A comprehensive social media marketing campaign across multiple platforms, featuring content creation, community management, and paid advertising.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Social media marketing dashboard with analytics',
      technologies: ['Facebook Ads', 'Instagram', 'Google Ads', 'Canva', 'Buffer'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['300% engagement', '150% followers', '5x ROI'],
      timeline: '12 weeks',
      problem: 'Fashion brand struggled with low social media engagement and brand awareness.',
      solution: 'Developed a comprehensive social media strategy with engaging content and targeted advertising.',
      screenshots: [
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 7,
      title: 'Fitness Tracking App',
      category: 'Apps',
      description: 'Cross-platform fitness app with AI coaching',
      longDescription: 'A comprehensive fitness tracking application with AI-powered workout recommendations, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fitness app interface showing workout tracking',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['100k+ users', '4.9★ rating', '80% retention'],
      timeline: '14 weeks',
      problem: 'Fitness enthusiasts needed a personalized workout companion with AI-driven recommendations.',
      solution: 'Built an intelligent fitness app that adapts to user preferences and provides personalized coaching.',
      screenshots: [
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 8,
      title: 'Corporate Website Redesign',
      category: 'Design',
      description: 'Modern website redesign with improved UX',
      longDescription: 'Complete website redesign for a corporate client, focusing on improved user experience, modern design, and better conversion rates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern corporate website design with clean layout',
      technologies: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      results: ['60% more leads', '40% lower bounce', '2x page views'],
      timeline: '8 weeks',
      problem: 'Corporate client had an outdated website that was not converting visitors into leads.',
      solution: 'Redesigned the website with modern UX principles and conversion optimization techniques.',
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const seo = {
    title: "Muvik Portfolio — Our Work",
    description: "See Muvik's recent work: websites, mobile apps, designs, and marketing case studies."
  };

  return (
    <Layout seo={seo}>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Selected projects across web, mobile & branding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
            key={selectedCategory}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                variants={fadeUp}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="text-blue-600 hover:text-purple-600 font-medium inline-flex items-center transition-colors">
                    View Details <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case Study Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into our most successful projects
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Problem */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem</h3>
                    <p className="text-gray-600 mb-4">{project.problem}</p>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution</h3>
                    <p className="text-gray-600 mb-4">{project.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                    <div className="space-y-3">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <span className="text-sm text-gray-500">Timeline: {project.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    View Full Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss your project and create a solution that drives results
            </p>
            <Link
              href="/contact#quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                    <div className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact#quote"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
                    onClick={() => setSelectedProject(null)}
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}