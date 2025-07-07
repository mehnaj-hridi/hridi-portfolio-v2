
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👋' },
    { name: 'Skills', id: 'skills', icon: '🚀' },
    { name: 'Projects', id: 'projects', icon: '💻' },
    { name: 'Experience', id: 'experiences', icon: '💼' },
    { name: 'Voluntary', id: 'voluntary', icon: '🤝' },
    { name: 'Achievements', id: 'achievements', icon: '🏆' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Menu Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 bg-gradient-to-r from-dusty-pink-500 to-dusty-pink-600 hover:from-dusty-pink-600 hover:to-dusty-pink-700 text-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 sm:w-96 glass-sidebar z-50 shadow-2xl"
          >
            <div className="p-6 sm:p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text font-serif">
                  Navigation
                </h2>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  size="sm"
                  className="rounded-full p-2 border-dusty-pink-300 hover:bg-dusty-pink-50"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1">
                <ul className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-dusty-pink-100 transition-all duration-300 group text-left"
                      >
                        <span className="text-2xl sm:text-3xl group-hover:animate-bounce">
                          {item.icon}
                        </span>
                        <span className="text-base sm:text-lg font-semibold text-dusty-pink-700 group-hover:gradient-text transition-all duration-300">
                          {item.name}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-dusty-pink-600 italic">
                  Made with 💖 by Girlboss Coder
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSidebar;
