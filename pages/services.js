'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FiCode, FiSmartphone, FiDatabase, FiServer, FiPenTool, FiCpu, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FiCloud } from 'react-icons/fi';
import { FaBullhorn, FaPalette } from 'react-icons/fa';

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

export default function Services() {
  const services = [
    {
      icon: <FiCode size={32} />,
      title: 'Web Development',
      subtitle: 'Custom websites using React, Next.js, Spring Boot',
      description: 'We build modern, responsive websites that drive results. From simple landing pages to complex web applications, our team delivers scalable solutions using cutting-edge technologies.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Web development with modern coding interface and responsive design',
      features: [
        'Responsive & SEO-friendly design',
        'API integrations & payment gateways',
        'CMS & e-commerce solutions',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      technologies: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'MongoDB', 'WordPress']
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'App Development',
      subtitle: 'Native & Cross-platform mobile apps',
      description: 'Transform your ideas into powerful mobile applications. We develop both native and cross-platform apps that provide seamless user experiences across all devices.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mobile app development mockup with UI/UX design elements',
      features: [
        'Android/iOS native development',
        'Flutter/React Native cross-platform',
        'App store release support',
        'Push notifications & analytics',
        'Offline functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Java', 'Swift', 'Firebase']
    },
    {
      icon: <FiCpu size={32} />,
      title: 'AI Chatbots & Agents',
      subtitle: 'Intelligent conversational AI using Dify & LLMs',
      description: 'Build smart AI chatbots and agents that understand and respond naturally to your customers. We create custom AI solutions using advanced language models and no-code platforms.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'AI chatbot interface with conversation bubbles and smart responses',
      features: [
        'Custom AI chatbots with Dify platform',
        'LLM integration (GPT, Claude, Gemini)',
        'Workflow automation with n8n',
        'Multi-channel deployment',
        'Analytics & conversation insights'
      ],
      technologies: ['Dify', 'OpenAI GPT', 'Claude', 'n8n', 'Langchain']
    },
    {
      icon: <FiServer size={32} />,
      title: 'No-Code Development',
      subtitle: 'Rapid development with WeWeb & modern no-code tools',
      description: 'Build powerful applications without traditional coding. We leverage no-code platforms to deliver solutions faster while maintaining professional quality and functionality.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'No-code development platform interface with drag-and-drop components',
      features: [
        'WeWeb frontend development',
        'Database integrations',
        'API connections & workflows',
        'Responsive design systems',
        'Rapid prototyping & deployment'
      ],
      technologies: ['WeWeb', 'Airtable', 'Zapier', 'Bubble', 'Webflow']
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Database Development',
      subtitle: 'SQL / NoSQL design & optimization',
      description: 'Design and optimize robust database solutions that scale with your business. From schema design to performance tuning, we ensure your data is secure and accessible.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Database server infrastructure with data visualization',
      features: [
        'Schema modeling & design',
        'Database replication & backups',
        'Performance tuning & optimization',
        'Data migration services',
        'Security implementation'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS RDS']
    },
    {
      icon: <FiCloud size={32} />,
      title: 'DevOps & Deployment',
      subtitle: 'CI/CD, Docker, Kubernetes, AWS',
      description: 'Streamline your development workflow with modern DevOps practices. We implement automated deployment pipelines and cloud infrastructure that scales.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'DevOps CI/CD pipeline visualization with cloud infrastructure',
      features: [
        'Infrastructure as Code (IaC)',
        'Automated CI/CD pipelines',
        'Container orchestration',
        'Monitoring & logging setup',
        'Auto-scaling configurations'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform']
    },
    {
      icon: <FiPenTool size={32} />,
      title: 'UI/UX Design',
      subtitle: 'Figma prototypes, user flows & branding',
      description: 'Create intuitive and beautiful user experiences that convert. Our design process focuses on user research, wireframing, prototyping, and testing.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'UI/UX design wireframes and prototypes on design workspace',
      features: [
        'User research & persona development',
        'Wireframes & interactive prototypes',
        'Design system creation',
        'Usability testing & optimization',
        'Responsive design principles'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
    },
    {
      icon: <FaPalette size={32} />,
      title: 'Logo & Branding',
      subtitle: 'Logo design, brand kits, collaterals',
      description: 'Build a strong brand identity that resonates with your audience. From logo design to complete brand guidelines, we create cohesive visual identities.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Logo design and branding materials with color palettes',
      features: [
        'Custom logo design & variations',
        'Brand color palette & typography',
        'Brand guidelines & style guide',
        'Business card & stationery design',
        'Social media brand assets'
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva Pro']
    },
    {
      icon: <FaBullhorn size={32} />,
      title: 'Social Media Management',
      subtitle: 'Content creation, scheduling, growth',
      description: 'Grow your social media presence with strategic content and community management. We create engaging content and manage your social media channels.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Social media management dashboard with content calendar',
      features: [
        'Monthly content calendars',
        'Graphic design & video content',
        'Community management',
        'Hashtag research & strategy',
        'Performance analytics & reporting'
      ],
      technologies: ['Buffer', 'Hootsuite', 'Canva', 'Adobe Creative Suite']
    },
    {
      icon: <FiCpu size={32} />,
      title: 'Digital Marketing',
      subtitle: 'SEO, Google Ads, Meta Ads',
      description: 'Drive targeted traffic and conversions with data-driven digital marketing strategies. From SEO to paid advertising, we help you reach your audience.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital marketing dashboard with analytics and campaign data',
      features: [
        'SEO optimization & keyword research',
        'Google Ads & Meta Ads campaigns',
        'Conversion tracking & analytics',
        'Email marketing automation',
        'Content marketing strategy'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your requirements, goals, and target audience to create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the final product before development.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our developers build your solution using best practices, with continuous testing throughout the process.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure optimal performance and growth.'
    }
  ];

  const seo = {
    title: "Muvik Services — Web Dev, App Dev, DevOps, Design & Marketing",
    description: "Explore Muvik's services: web & app development, database, DevOps, UI/UX, branding, social media, and digital marketing."
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-300" />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-blue-600 font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <FiCheck className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Let's Discuss <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeUp}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#quote"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/918252911976?text=Hi%20Muvik!%20I'm%20interested%20in%20your%20services."
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
    </Layout>
  );
}