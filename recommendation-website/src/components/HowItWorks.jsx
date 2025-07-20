import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  CpuChipIcon, 
  AdjustmentsHorizontalIcon, 
  MusicalNoteIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Input Your Favorite Song',
      description: 'Enter a song name and artist that you love. Our system will use this as the foundation for your recommendations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Analysis',
      description: 'Our hybrid algorithm analyzes the song\'s audio features and finds users with similar listening patterns.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Customize Diversity',
      description: 'Use our diversity slider to balance between familiar recommendations and adventurous discoveries.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Enjoy Your Playlist',
      description: 'Get a curated list of songs with preview links, perfectly tailored to your musical taste.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our recommendation process is designed to be simple for you and sophisticated under the hood.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="glass-effect rounded-2xl p-8 text-center h-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 mx-auto`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              The Science Behind the Magic
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-4">Content-Based Filtering</h4>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Our system analyzes audio features including:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Tempo and rhythm patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Energy and danceability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Acoustic properties and mood</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Genre and artist similarity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold text-white mb-4">Collaborative Filtering</h4>
                <p className="text-white/80 mb-4 leading-relaxed">
                  We leverage user interaction data to find patterns:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>User listening history analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Similar user preference mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Popularity and trending factors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                    <span>Community-driven discoveries</span>
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

export default HowItWorks;