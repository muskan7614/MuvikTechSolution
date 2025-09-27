'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiClock } from 'react-icons/fi';

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

export default function About() {
  const teamMembers = [
    {
      name: 'Vinay Chaudhary',
      role: 'Founder & Full Stack Ai Developer',
      bio: 'Passionate full-stack developer with expertise in modern web technologies and a vision to transform businesses digitally.',
      image: '/team/vinaylinkedin profile.png', // Your LinkedIn profile photo
    },
    {
      name: 'Muskan Choudhary',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and creating beautiful, intuitive digital experiences.',
      image: '/team/LL.png', // Team member photo
    },
    {
      name: 'Raunik Singh',
      role: 'Backend Developer',
      bio: 'Expert in server-side technologies, database optimization, and building scalable backend systems.',
      image: '/team/raunik.png', // Replace with your actual image
    },
    {
      name: 'Anjali Patel',
      role: 'Digital Marketing Specialist',
      bio: 'Strategic digital marketer specializing in SEO, social media, and performance marketing campaigns.',
      image: '/team/anjali-patel.jpg', // Replace with your actual image
    },
    {
      name: 'Arjun Singh',
      role: 'DevOps Engineer',
      bio: 'Cloud infrastructure expert ensuring seamless deployment, monitoring, and scaling of applications.',
      image: '/team/arjun-singh.jpg', // Replace with your actual image
    },
    {
      name: 'Sneha Gupta',
      role: 'Mobile App Developer',
      bio: 'Specialized in React Native and Flutter development, creating cross-platform mobile solutions.',
      image: '/team/sneha-gupta.jpg', // Replace with your actual image
    }
  ];

  const values = [
    {
      icon: <FiTarget size={32} />,
      title: 'Mission',
      description: 'Deliver measurable digital growth through modern technology and creative design solutions.'
    },
    {
      icon: <FiEye size={32} />,
      title: 'Vision',
      description: 'Empower SMBs with enterprise-level digital solutions that drive real business results.'
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Values',
      description: 'Quality, Transparency, Speed, and Innovation in everything we create and deliver.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const gallery = [
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Muvik team collaborating on project planning'
    },
    {
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Creative brainstorming session with whiteboard'
    },
    {
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Developer coding on multiple monitors'
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Design review and UI/UX discussion'
    }
  ];

  const seo = {
    title: "About Muvik — Our Story & Team",
    description: "Meet Muvik — a team of full-stack developers, designers, and marketers transforming ideas into digital products."
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
              About Muvik
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Crafting digital experiences since our freelancer roots
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder working at laptop, coding and planning"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Freelancer to Full-Service Digital Agency
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Muvik started as a one-person freelancing studio and evolved into a dedicated agency. We specialize in building fast, secure, and beautiful web and mobile applications, backed by strong DevOps and marketing strategies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our journey began with a simple mission: to help businesses transform their ideas into powerful digital solutions. Today, we're a team of passionate developers, designers, and marketers committed to delivering exceptional results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Transparent Pricing (no hidden costs)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">AI-assisted development for faster delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">End-to-end delivery with ongoing support</span>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every day
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented people behind Muvik
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our creative process
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're always looking for talented individuals who share our passion for innovation
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}