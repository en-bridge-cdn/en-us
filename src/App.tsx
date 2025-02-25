import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, Github, Twitter, Download, Laptop, Lock, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const tableAnimation = {
    initial: { opacity: 0, rotateX: -15 },
    animate: { opacity: 1, rotateX: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const listItemAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Header */}
      <header className="fixed w-full z-50 glass-effect">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Trézor Bridge
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all neon-border"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to the Future of
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience unparalleled protection for your digital assets with our revolutionary new app.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold neon-border"
              >
                Download Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full border-2 border-blue-400 font-semibold hover:bg-blue-400/10"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              Trézor Bridge: Secure Cryptocurrency Transactions
            </motion.h1>
            
            <motion.div 
              className="mb-16 glass-effect p-8 rounded-2xl neon-border"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Understanding Trézor Bridge</h2>
              <p className="text-gray-300 leading-relaxed">
                Trézor Bridge is a software utility developed to facilitate secure communication between Trézor hardware wallets and web applications. Operating in the background, it ensures seamless interaction without requiring user intervention, thereby enhancing the overall user experience.
              </p>
            </motion.div>

            <motion.div 
              className="mb-16"
              variants={tableAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features of Trézor Bridge</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-400/30">
                      <th className="py-4 px-6 text-left text-blue-300">Feature</th>
                      <th className="py-4 px-6 text-left text-blue-300">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Enhanced Security",
                        description: "Encrypts communications between the Trézor wallet and web applications to prevent unauthorized access."
                      },
                      {
                        feature: "Seamless Integration",
                        description: "Enables easy connection of the hardware wallet with various cryptocurrency services and platforms."
                      },
                      {
                        feature: "Real-Time Transactions",
                        description: "Allows prompt execution of transactions and balance checks, providing up-to-date information."
                      },
                      {
                        feature: "User-Friendly Operation",
                        description: "Runs silently in the background, eliminating the need for constant user interaction."
                      }
                    ].map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-blue-400/10 hover:bg-blue-400/5 transition-colors"
                      >
                        <td className="py-4 px-6 font-semibold text-blue-400">{item.feature}</td>
                        <td className="py-4 px-6 text-gray-300">{item.description}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div 
              className="mb-16 glass-effect p-8 rounded-2xl neon-border"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Setting Up Trézor Bridge</h2>
              <motion.ul className="space-y-4">
                {[
                  {
                    icon: <Download className="w-6 h-6" />,
                    title: "Download and Install",
                    description: "Obtain the Trézor Bridge software from the official Trézor website and follow the installation instructions."
                  },
                  {
                    icon: <Laptop className="w-6 h-6" />,
                    title: "Connect Your Trézor Device",
                    description: "Use a USB cable to connect your Trézor hardware wallet to your computer; the Bridge will detect the device automatically."
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Access the Trézor Web Interface",
                    description: "Navigate to the Trézor web interface in your browser to manage your cryptocurrencies securely."
                  },
                  {
                    icon: <ChevronRight className="w-6 h-6" />,
                    title: "Follow On-Screen Instructions",
                    description: "Complete any additional setup as prompted by the interface."
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-4"
                    variants={listItemAnimation}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-400/10 rounded-lg text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl neon-border"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Benefits of Using Trézor Bridge</h2>
              <motion.ul className="space-y-4">
                {[
                  {
                    icon: <Lock className="w-6 h-6" />,
                    title: "Improved Security",
                    description: "Ensures encrypted communication, safeguarding your transactions."
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Compatibility",
                    description: "Supports multiple browsers and platforms, enhancing accessibility."
                  },
                  {
                    icon: <ChevronRight className="w-6 h-6" />,
                    title: "Efficiency",
                    description: "Provides a smooth and seamless user experience with real-time data access."
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-4"
                    variants={listItemAnimation}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-400/10 rounded-lg text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Advanced Security",
                description: "Military-grade encryption protecting your assets 24/7 with multi-layer security protocols and biometric authentication.",
                icon: "🔒"
              },
              {
                title: "Seamless Integration",
                description: "Connect and manage all your digital assets in one place with our intuitive and user-friendly interface.",
                icon: "🔄"
              },
              {
                title: "Real-time Monitoring",
                description: "Stay informed with instant notifications and comprehensive activity logs for all your transactions.",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl glass-effect neon-border"
                variants={fadeIn}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Trézor Bridge</h4>
              <p className="text-gray-300">Securing your digital future</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 Trézor Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;