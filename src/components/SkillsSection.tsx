
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const techSkills = [
    { name: 'C', icon: '💻' },
    { name: 'C++', icon: '🧠' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '✨' },
    { name: 'SQL', icon: '📊' },
    { name: 'Shell Script', icon: '🖥️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'Figma', icon: '🎨' },
  ];

  const softSkills = [
    { name: 'Time Management', icon: '⏰' },
    { name: 'Hardworking', icon: '💪' },
    { name: 'Determined', icon: '🎯' },
    { name: 'Growth Mindset', icon: '🌱' },
    { name: 'Team Player', icon: '🤝' },
    { name: 'Innovation', icon: '💡' },
  ];

  const SkillSlider = ({ skills, direction }: { skills: any[], direction: 'left' | 'right' }) => {
    return (
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-3 sm:gap-6 py-2 sm:py-4"
          animate={{
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 glass-effect px-3 sm:px-6 py-2 sm:py-4 rounded-full flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group min-w-fit"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-lg sm:text-2xl group-hover:animate-bounce">{skill.icon}</span>
              <span className="font-semibold text-dusty-pink-700 whitespace-nowrap text-sm sm:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <motion.section 
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-dusty-pink-50 to-accent/10 overflow-hidden"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6 font-serif">
            My Superpowers
          </h2>
          <p className="text-lg sm:text-xl text-dusty-pink-700">
            A mix of logic, code and soft skills that get things done
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {/* Technical Skills - Sliding Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 sm:mb-6 flex items-center justify-center">
              <div className="glass-effect px-6 sm:px-8 py-2 sm:py-3 rounded-full">
                <h3 className="text-xl sm:text-2xl font-bold text-dusty-pink-600 font-serif flex items-center">
                  <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">👩‍💻</span>
                  <span className="text-base sm:text-2xl">Technical Skills</span>
                </h3>
              </div>
            </div>
            <SkillSlider skills={techSkills} direction="left" />
          </motion.div>

          {/* Soft Skills - Sliding Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 sm:mb-6 flex items-center justify-center">
              <div className="glass-effect px-6 sm:px-8 py-2 sm:py-3 rounded-full">
                <h3 className="text-xl sm:text-2xl font-bold text-dusty-pink-600 font-serif flex items-center">
                  <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">💪</span>
                  <span className="text-base sm:text-2xl">Soft Skills</span>
                </h3>
              </div>
            </div>
            <SkillSlider skills={softSkills} direction="right" />
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-4 sm:p-6 rounded-2xl inline-block">
            <p className="text-dusty-pink-700 italic text-base sm:text-lg font-medium">
              "Skills get you started, discipline keeps you going." ✨
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
