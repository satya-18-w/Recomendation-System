import { 
  CpuChipIcon, 
  UserGroupIcon, 
  MusicalNoteIcon, 
  ChartBarIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'Hybrid AI Algorithm',
      description: 'Combines collaborative filtering and content-based analysis for superior recommendations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Filtering',
      description: 'Learns from user behavior patterns to suggest music based on similar listening preferences.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Content-Based Analysis',
      description: 'Analyzes audio features like tempo, energy, and mood to find musically similar tracks.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Personalized Tuning',
      description: 'Adjust the balance between discovery and familiarity with our diversity slider.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Track your music taste evolution and discover new genres based on your listening patterns.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: SparklesIcon,
      title: 'Smart Discovery',
      description: 'Discover hidden gems and emerging artists that match your unique musical DNA.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our advanced recommendation system leverages cutting-edge AI to understand your music preferences 
            and deliver personalized suggestions that evolve with your taste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-effect rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Hybrid Approach?
            </h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Traditional recommendation systems rely on either user behavior or content analysis alone. 
              Our hybrid system combines both approaches, resulting in more accurate, diverse, and 
              personalized recommendations that adapt to your evolving musical taste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Content-Based Benefits:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>No cold start problem</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Works for new songs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Transparent recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Collaborative Benefits:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Discovers unexpected gems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Leverages community wisdom</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Improves with more data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;