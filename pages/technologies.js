'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FiCode, FiServer, FiDatabase, FiCloud, FiPenTool, FiCpu } from 'react-icons/fi';
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

export default function Technologies() {
  const techCategories = [
    {
      icon: <FiCode size={32} />,
      title: 'Frontend',
      description: 'Modern frameworks for building responsive user interfaces',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        {
          name: 'React',
          description: 'Component-based library for building user interfaces',
          useCase: 'Interactive UIs, SPAs',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Next.js',
          description: 'Full-stack React framework with SSR and SSG',
          useCase: 'SEO-friendly websites',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
          name: 'WeWeb',
          description: 'No-code frontend builder for modern web apps',
          useCase: 'Rapid prototyping',
          logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          name: 'WordPress',
          description: 'Popular CMS for websites and blogs',
          useCase: 'Content management',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
        },
        {
          name: 'Angular',
          description: 'TypeScript-based framework for enterprise applications',
          useCase: 'Large-scale applications',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
        },
        {
          name: 'TypeScript',
          description: 'Typed superset of JavaScript for better development',
          useCase: 'Type-safe applications',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        }
      ]
    },
    {
      icon: <FiCpu size={32} />,
      title: 'AI & Automation',
      description: 'Intelligent solutions with AI chatbots and workflow automation',
      color: 'from-violet-500 to-purple-500',
      technologies: [
        {
          name: 'Dify',
          description: 'No-code platform for building AI applications',
          useCase: 'AI chatbots, Agents',
          logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          name: 'OpenAI GPT',
          description: 'Advanced language models for natural conversations',
          useCase: 'Conversational AI',
          logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          name: 'n8n',
          description: 'Workflow automation platform for connecting apps',
          useCase: 'Process automation',
          logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          name: 'Claude AI',
          description: 'Anthropic\'s AI assistant for complex reasoning',
          useCase: 'Advanced AI tasks',
          logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          name: 'Langchain',
          description: 'Framework for developing LLM applications',
          useCase: 'AI app development',
          logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    {
      icon: <FiServer size={32} />,
      title: 'Backend',
      description: 'Robust server-side technologies for scalable applications',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        {
          name: 'Java',
          description: 'Enterprise-grade programming language',
          useCase: 'Microservices, APIs',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        {
          name: 'Spring Boot',
          description: 'Java framework for building production-ready applications',
          useCase: 'REST APIs, Microservices',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        },
        {
          name: 'Node.js',
          description: 'JavaScript runtime for server-side development',
          useCase: 'Real-time applications',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          name: 'Python',
          description: 'Versatile language for web development and AI',
          useCase: 'APIs, Data processing',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
          name: 'Express.js',
          description: 'Fast, unopinionated web framework for Node.js',
          useCase: 'RESTful APIs',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        }
      ]
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Databases',
      description: 'Reliable data storage solutions for any scale',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        {
          name: 'MySQL',
          description: 'Popular open-source relational database',
          useCase: 'Structured data, ACID compliance',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database',
          useCase: 'Complex queries, JSON data',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL document database for flexible schemas',
          useCase: 'Unstructured data, rapid development',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store for caching',
          useCase: 'Caching, Session storage',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        },
        {
          name: 'Firebase',
          description: 'Google\'s mobile and web application platform',
          useCase: 'Real-time apps, Authentication',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        }
      ]
    },
    {
      icon: <FiCloud size={32} />,
      title: 'DevOps & Cloud',
      description: 'Modern deployment and infrastructure management',
      color: 'from-orange-500 to-red-500',
      technologies: [
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployments',
          useCase: 'Microservices, CI/CD',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration for scalable applications',
          useCase: 'Auto-scaling, Load balancing',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
        },
        {
          name: 'AWS',
          description: 'Comprehensive cloud computing platform',
          useCase: 'Hosting, Storage, Computing',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
        },
        {
          name: 'GitHub Actions',
          description: 'CI/CD platform for automated workflows',
          useCase: 'Automated testing, Deployment',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
          name: 'Nginx',
          description: 'High-performance web server and reverse proxy',
          useCase: 'Load balancing, Static files',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
        }
      ]
    },
    {
      icon: <FiPenTool size={32} />,
      title: 'Design Tools',
      description: 'Creative tools for stunning visual experiences',
      color: 'from-pink-500 to-rose-500',
      technologies: [
        {
          name: 'Figma',
          description: 'Collaborative interface design tool',
          useCase: 'UI/UX design, Prototyping',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Adobe Photoshop',
          description: 'Industry-standard image editing software',
          useCase: 'Photo editing, Graphics',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
        },
        {
          name: 'Adobe Illustrator',
          description: 'Vector graphics design software',
          useCase: 'Logos, Icons, Illustrations',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg'
        },
        {
          name: 'Canva Pro',
          description: 'Online design platform for quick graphics',
          useCase: 'Social media, Marketing materials',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
        },
        {
          name: 'Adobe XD',
          description: 'User experience design software',
          useCase: 'Wireframes, User flows',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
        }
      ]
    },
    {
      icon: <FaBullhorn size={32} />,
      title: 'Marketing Tools',
      description: 'Digital marketing platforms for growth and analytics',
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        {
          name: 'Google Ads',
          description: 'Pay-per-click advertising platform',
          useCase: 'Paid search, Display ads',
          logo: 'https://developers.google.com/static/ads/images/ads-icon.svg'
        },
        {
          name: 'Meta Ads',
          description: 'Facebook and Instagram advertising platform',
          useCase: 'Social media advertising',
          logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/faq_tyUQRtC.png'
        },
        {
          name: 'Google Analytics',
          description: 'Web analytics service for tracking website traffic',
          useCase: 'Traffic analysis, User behavior',
          logo: 'https://www.google.com/analytics/static/img/analytics-logo.svg'
        },
        {
          name: 'Buffer',
          description: 'Social media management platform',
          useCase: 'Content scheduling, Analytics',
          logo: 'https://buffer.com/static/icons/buffer-logo.svg'
        },
        {
          name: 'SEMrush',
          description: 'SEO and digital marketing toolkit',
          useCase: 'Keyword research, Competitor analysis',
          logo: 'https://www.semrush.com/static/img/semrush-logo.svg'
        }
      ]
    }
  ];

  const whyTheseTools = [
    {
      title: 'Scalability',
      description: 'Our chosen technologies can grow with your business, from startup to enterprise scale.',
      icon: '📈'
    },
    {
      title: 'Reliability',
      description: 'Battle-tested tools with strong community support and proven track records.',
      icon: '🛡️'
    },
    {
      title: 'Speed of Development',
      description: 'Modern frameworks and tools that accelerate development without compromising quality.',
      icon: '⚡'
    }
  ];

  const seo = {
    title: "Muvik Tech Stack — Technologies We Use",
    description: "Frontend, backend, databases, DevOps, and design tools we use at Muvik to build exceptional digital solutions."
  };

  return (
    <Layout seo={seo}>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Tech Stack
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cutting-edge technologies we use to build exceptional digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Technologies Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                  variants={stagger}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      variants={fadeUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-colors">
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs flex items-center justify-center font-bold hidden">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {tech.description}
                      </p>
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {tech.useCase}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why These Tools?
            </h2>
            <p className="text-xl text-gray-600">
              Our technology choices are driven by proven results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyTheseTools.map((reason, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Technologies Mastered</div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">6</div>
              <div className="text-lg opacity-90">Tech Categories</div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Modern Stack</div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Learning & Updating</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build with Modern Tech?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss which technologies are perfect for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/918252911976?text=Hi%20Muvik!%20I'd%20like%20to%20discuss%20technologies%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
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