import { 
  MusicalNoteIcon,
  HeartIcon,
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                <MusicalNoteIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MusicRec</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Discover your perfect playlist with our AI-powered hybrid recommendation system. 
              Combining the best of collaborative filtering and content-based analysis.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-red-400" />
              <span>and</span>
              <CodeBracketIcon className="h-4 w-4 text-primary-400" />
              <span>for music lovers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'How It Works', 'Demo', 'About'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              {['Python', 'Scikit-learn', 'Streamlit', 'React', 'Machine Learning'].map((item) => (
                <li key={item}>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 MusicRec. Built as a demonstration of hybrid recommendation systems.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-white/60 text-sm">
              Powered by advanced machine learning
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;