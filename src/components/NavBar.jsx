import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFA500]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#FFA500] shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path
                d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21V15H15V21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="16" y="3" width="3" height="5" fill="white" rx="0.5" />
            </svg>
          </div>
          <span className="text-white font-bold text-2xl tracking-wide">RUCK</span>
        </motion.div>

        {/* Center - Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {['Suppliers', 'Pros', 'Drivers'].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-white/90 font-medium hover:text-white cursor-pointer transition-all duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </motion.span>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-white text-[#FFA500] px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md">
              Intelligence
            </button>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-[#10B981] rounded-full border-2 border-[#FFA500]"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <User className="w-4 h-4 text-white" />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#FF9500]"
      >
        <div className="px-6 py-4 space-y-4">
          {['Suppliers', 'Pros', 'Drivers'].map((item) => (
            <motion.div
              key={item}
              whileTap={{ scale: 0.98 }}
              className="text-white font-medium py-2 border-b border-white/20"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
