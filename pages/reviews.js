'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FiStar, FiArrowLeft, FiArrowRight, FiPlay, FiMessageCircle } from 'react-icons/fi';

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

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredReviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Tech Retailer',
      role: 'CEO',
      rating: 5,
      text: 'Muvik delivered my e-commerce website in record time. The team was professional, responsive, and delivered exactly what we needed. Our online sales have increased by 40% since launch!',
      avatar: '/clients/rajesh-kumar.jpg', // Add client photo here
      project: 'E-Commerce Platform',
      date: 'December 2023'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Digital Marketing Agency',
      role: 'Founder',
      rating: 5,
      text: 'Their UI/UX design transformed our brand completely. The attention to detail and user experience is outstanding. Our client satisfaction has improved dramatically.',
      avatar: '/clients/priya-sharma.jpg', // Add client photo here
      project: 'Brand Identity & Website',
      date: 'November 2023'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'HealthTech Startup',
      role: 'CTO',
      rating: 5,
      text: 'From concept to deployment, Muvik handled everything perfectly. Their technical expertise and project management skills are top-notch. Highly recommended!',
      avatar: '/clients/amit-patel.jpg', // Add client photo here
      project: 'Healthcare Platform',
      date: 'October 2023'
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      company: 'Fashion Brand',
      role: 'Marketing Director',
      rating: 5,
      text: 'The social media campaign they created for us was phenomenal. Our engagement increased by 300% and we gained thousands of new followers. Amazing work!',
      avatar: '/clients/sneha-gupta.jpg', // Add client photo here
      project: 'Social Media Campaign',
      date: 'September 2023'
    },
    {
      id: 5,
      name: 'Arjun Singh',
      company: 'Food Delivery Service',
      role: 'Operations Manager',
      rating: 5,
      text: 'The mobile app they developed for our delivery service is fantastic. Real-time tracking, smooth UI, and excellent performance. Our customers love it!',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      project: 'Mobile App Development',
      date: 'August 2023'
    }
  ];

  const additionalReviews = [
    {
      name: 'Kavya Reddy',
      company: 'EdTech Startup',
      rating: 5,
      text: 'Excellent work on our learning platform. The team understood our requirements perfectly and delivered a scalable solution.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rohit Mehta',
      company: 'Real Estate Agency',
      rating: 5,
      text: 'Professional service and great communication throughout the project. Our new website looks amazing and works perfectly.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anita Joshi',
      company: 'Consulting Firm',
      rating: 5,
      text: 'The branding package they created for us is outstanding. Professional, modern, and perfectly represents our company values.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Vikram Agarwal',
      company: 'Manufacturing Company',
      rating: 5,
      text: 'Great experience working with Muvik. They delivered our inventory management system on time and within budget.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Deepika Nair',
      company: 'Travel Agency',
      rating: 5,
      text: 'The booking platform they built for us is user-friendly and efficient. Our customers find it easy to use and book trips.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Suresh Kumar',
      company: 'Fitness Center',
      rating: 5,
      text: 'Amazing mobile app for our gym members. The features are exactly what we needed and the design is beautiful.',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Tech Retailer',
      thumbnail: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:30'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Digital Agency',
      thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:45'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'HealthTech Startup',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3:15'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Project Success Rate' },
    { number: '24h', label: 'Average Response Time' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  const seo = {
    title: "Muvik — Client Reviews & Testimonials",
    description: "What clients say about Muvik — testimonials, ratings, and success stories from our satisfied customers."
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
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real feedback from real clients who trusted us with their projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeUp}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Reviews Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Client Stories
            </h2>
            <p className="text-xl text-gray-600">
              Detailed testimonials from our most successful projects
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <img
                    src={featuredReviews[currentSlide].avatar}
                    alt={`${featuredReviews[currentSlide].name} profile`}
                    className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {featuredReviews[currentSlide].name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {featuredReviews[currentSlide].role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {featuredReviews[currentSlide].company}
                  </p>
                  <div className="flex justify-center lg:justify-start items-center mb-2">
                    {[...Array(featuredReviews[currentSlide].rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-500 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {featuredReviews[currentSlide].date}
                  </p>
                </div>

                {/* Testimonial */}
                <div className="lg:col-span-2">
                  <FiMessageCircle className="text-4xl text-blue-600 mb-4" />
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 italic">
                    "{featuredReviews[currentSlide].text}"
                  </blockquote>
                  <div className="bg-white px-4 py-2 rounded-full inline-block">
                    <span className="text-sm font-medium text-blue-600">
                      Project: {featuredReviews[currentSlide].project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-blue-600"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {featuredReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-blue-600"
                aria-label="Next testimonial"
              >
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Reviews Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Client Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Consistent 5-star ratings across all our projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {additionalReviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={`${review.name} profile`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200';
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our clients about their experience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative group cursor-pointer"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={video.thumbnail}
                    alt={`Video testimonial from ${video.name}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FiPlay className="text-blue-600 ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">{video.name}</h4>
                    <p className="text-sm opacity-90">{video.company}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our growing list of satisfied clients and transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#quote"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/918252911976?text=Hi%20Muvik!%20I%20saw%20your%20client%20reviews%20and%20I'm%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Be Featured?
            </h3>
            <p className="text-gray-600 mb-6">
              If you're a current or past client, we'd love to hear about your experience
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Send Us Your Feedback
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}