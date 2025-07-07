
import React from 'react';
import HeroSection from '@/components/HeroSection';
import LazySection from '@/components/LazySection';
import NavigationSidebar from '@/components/NavigationSidebar';
import { motion } from 'framer-motion';

// Lazy load the sections
const AboutSection = React.lazy(() => import('@/components/AboutSection'));
const ExperiencesSection = React.lazy(() => import('@/components/ExperiencesSection'));
const VoluntarySection = React.lazy(() => import('@/components/VoluntarySection'));
const AchievementsSection = React.lazy(() => import('@/components/AchievementsSection'));
const SkillsSection = React.lazy(() => import('@/components/SkillsSection'));
const ProjectsSection = React.lazy(() => import('@/components/ProjectsSection'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationSidebar />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LazySection>
          <AboutSection />
        </LazySection>
      </motion.div>

      <LazySection>
        <SkillsSection />
      </LazySection>
      
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProjectsSection />
      </motion.div>
      
      <LazySection>
        <ExperiencesSection />
      </LazySection>
      
      <motion.div
        id="voluntary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LazySection>
          <VoluntarySection />
        </LazySection>
      </motion.div>
      
      <motion.div
        id="achievements"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LazySection>
          <AchievementsSection />
        </LazySection>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        className="py-8 sm:py-12 px-4 sm:px-6 gradient-pink"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">✨ 👩‍💻 ✨</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">Let's Create Something Amazing Together</h3>
            <p className="text-dusty-pink-100 text-sm sm:text-base">Ready to turn your vision into reality?</p>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:animate-bounce-soft">
              <span className="text-lg sm:text-xl">📧</span>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:animate-bounce-soft">
              <span className="text-lg sm:text-xl">💼</span>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:animate-bounce-soft">
              <span className="text-lg sm:text-xl">📷</span>
            </div>
          </div>
          
          <p className="text-dusty-pink-100 text-xs sm:text-sm">
            © 2024 Portfolio of Hridi. Made with 💖 and cheesecakes 🍰
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
