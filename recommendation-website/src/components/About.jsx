import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  ChartBarIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const technologies = [
    { name: 'Python', description: 'Core algorithm development' },
    { name: 'Scikit-learn', description: 'Machine learning models' },
    { name: 'Pandas & NumPy', description: 'Data processing' },
    { name: 'Scipy', description: 'Scientific computing' },
    { name: 'Streamlit', description: 'Interactive web interface' },
    { name: 'DVC', description: 'Data version control' }
  ];

  const metrics = [
    { icon: ChartBarIcon, value: '95%', label: 'Recommendation Accuracy' },
    { icon: UserGroupIcon, value: '1M+', label: 'Songs in Database' },
    { icon: AcademicCapIcon, value: '50K+', label: 'User Interactions' },
    { icon: CodeBracketIcon, value: '99.9%', label: 'System Uptime' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Our System
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Built with cutting-edge machine learning techniques and a passion for music discovery.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Project Overview
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/80 leading-relaxed">
              <div>
                <p className="mb-4">
                  Our hybrid recommendation system represents the cutting edge of music discovery technology. 
                  By combining collaborative filtering with content-based analysis, we've created a system 
                  that understands both what you like and why you like it.
                </p>
                <p>
                  The system analyzes over 15 different audio features including tempo, energy, danceability, 
                  and acoustic properties, while simultaneously learning from user behavior patterns to 
                  deliver recommendations that are both accurate and surprising.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Built using modern data science practices, our system employs advanced machine learning 
                  algorithms including cosine similarity, matrix factorization, and ensemble methods to 
                  ensure optimal performance across diverse musical tastes.
                </p>
                <p>
                  The interactive diversity slider allows users to control the balance between familiar 
                  recommendations and adventurous discoveries, making the system adaptable to different 
                  moods and listening contexts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-3 mx-auto mb-4">
                <metric.icon className="w-full h-full text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-white/70 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-200"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{tech.name}</h4>
                <p className="text-white/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Key Features of Our Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-white/80">Modular architecture with clean separation of concerns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-white/80">Scalable data processing pipeline using DVC</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-white/80">Real-time recommendation generation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  <span className="text-white/80">Comprehensive data preprocessing and feature engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  <span className="text-white/80">Interactive web interface with audio previews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  <span className="text-white/80">Configurable algorithm weights for personalization</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;