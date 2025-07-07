
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Palette, Star } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import Lottie from 'lottie-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Developer', 'Girlboss', 'Visionary'];
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/Working chart.json')
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{ y, opacity }}
    >
      <FloatingShapes />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <motion.div 
          className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto lg:mx-0 mb-4 sm:mb-6 relative">
              <div className="w-full h-full rounded-full gradient-pink shadow-2xl animate-pulse-soft"></div>
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-2xl sm:text-4xl animate-bounce-soft">👩‍💻</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif">
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="text-dusty-pink-600">Your</span>{' '}
            <span className="inline-block min-w-[200px] sm:min-w-[300px] text-left">
              <span
                key={currentRole}
                className="gradient-text animate-fade-in"
              >
                {roles[currentRole]}
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-dusty-pink-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
            Turning ideas into impactful solutions with math and code—that's my kind of magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 lg:px-0">
            <Button
              size="lg"
              className="bg-gradient-to-r from-dusty-pink-500 to-accent hover:from-dusty-pink-600 hover:to-dusty-pink-400 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              View My Work ✨
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-dusty-pink-400 text-dusty-pink-600 hover:bg-dusty-pink-50 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Let's Connect 💌
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-8 px-4 lg:px-0">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 transform hover:scale-110 transition-all duration-300 cursor-pointer group">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-dusty-pink-600 mx-auto mb-1 sm:mb-2 group-hover:animate-wiggle" />
              <p className="text-xs sm:text-sm font-semibold text-dusty-pink-700">Code</p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 transform hover:scale-110 transition-all duration-300 cursor-pointer group">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-dusty-pink-600 mx-auto mb-1 sm:mb-2 group-hover:animate-wiggle" />
              <p className="text-xs sm:text-sm font-semibold text-dusty-pink-700">Logic</p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 transform hover:scale-110 transition-all duration-300 cursor-pointer group">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-dusty-pink-600 mx-auto mb-1 sm:mb-2 group-hover:animate-wiggle" />
              <p className="text-xs sm:text-sm font-semibold text-dusty-pink-700">Excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Animation */}
        <motion.div 
          className="hidden md:block lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Lottie animationData={animationData} loop={true} className="w-full max-w-md mx-auto" />
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </motion.section>
  );
};

export default HeroSection;
