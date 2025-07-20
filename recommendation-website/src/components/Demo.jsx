import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  PauseIcon, 
  MusicalNoteIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const Demo = () => {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [diversity, setDiversity] = useState(5);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  // Mock recommendations for demo
  const mockRecommendations = [
    {
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      preview_url: 'https://p.scdn.co/mp3-preview/sample1.mp3',
      similarity: 0.95
    },
    {
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      preview_url: 'https://p.scdn.co/mp3-preview/sample2.mp3',
      similarity: 0.89
    },
    {
      name: 'Levitating',
      artist: 'Dua Lipa',
      preview_url: 'https://p.scdn.co/mp3-preview/sample3.mp3',
      similarity: 0.87
    },
    {
      name: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      preview_url: 'https://p.scdn.co/mp3-preview/sample4.mp3',
      similarity: 0.84
    },
    {
      name: 'Stay',
      artist: 'The Kid LAROI & Justin Bieber',
      preview_url: 'https://p.scdn.co/mp3-preview/sample5.mp3',
      similarity: 0.82
    }
  ];

  const handleGetRecommendations = async () => {
    if (!songName.trim() || !artistName.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    }, 2000);
  };

  const togglePlay = (index) => {
    if (currentlyPlaying === index) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(index);
    }
  };

  const contentBasedWeight = (10 - diversity) / 10;
  const collaborativeWeight = diversity / 10;

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try Our Demo
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the power of our hybrid recommendation system. Enter a song you love and discover your next favorite tracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <MusicalNoteIcon className="h-6 w-6" />
              <span>Input Your Favorite Song</span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Song Name
                </label>
                <input
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="e.g., Shape of You"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Artist Name
                </label>
                <input
                  type="text"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  placeholder="e.g., Ed Sheeran"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-4 flex items-center space-x-2">
                  <AdjustmentsHorizontalIcon className="h-4 w-4" />
                  <span>Diversity Level: {diversity}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="9"
                  value={diversity}
                  onChange={(e) => setDiversity(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-white/60 mt-2">
                  <span>More Familiar</span>
                  <span>More Diverse</span>
                </div>
              </div>

              {/* Algorithm Weight Display */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-medium mb-3">Algorithm Balance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Content-Based</span>
                    <span className="text-primary-300 font-medium">{Math.round(contentBasedWeight * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${contentBasedWeight * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Collaborative</span>
                    <span className="text-accent-300 font-medium">{Math.round(collaborativeWeight * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-accent-500 to-accent-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${collaborativeWeight * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleGetRecommendations}
                disabled={!songName.trim() || !artistName.trim() || isLoading}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5" />
                    <span>Get Recommendations</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Recommendations
            </h3>
            
            {recommendations.length === 0 ? (
              <div className="text-center py-12">
                <MusicalNoteIcon className="h-16 w-16 text-white/30 mx-auto mb-4" />
                <p className="text-white/60">
                  Enter a song and artist to get personalized recommendations
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recommendations.map((song, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{song.name}</h4>
                        <p className="text-white/70 text-sm">{song.artist}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-white/50">Similarity:</span>
                          <div className="flex-1 bg-white/10 rounded-full h-1 max-w-20">
                            <div 
                              className="bg-gradient-to-r from-primary-400 to-accent-400 h-1 rounded-full"
                              style={{ width: `${song.similarity * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-white/70">{Math.round(song.similarity * 100)}%</span>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePlay(index)}
                        className="ml-4 p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full hover:shadow-lg transition-all duration-200"
                      >
                        {currentlyPlaying === index ? (
                          <PauseIcon className="h-5 w-5 text-white" />
                        ) : (
                          <PlayIcon className="h-5 w-5 text-white" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;