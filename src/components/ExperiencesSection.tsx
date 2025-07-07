import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Code, Wrench } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const ExperiencesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const experiences = [
    {
      id: 1,
      title: "Industrial Attachment",
      company: "Grameenphone Ltd",
      role: "Trainee",
      period: "May 2025",
      location: "Dhaka, Bangladesh",
      type: "internship",
      description: "Completed 3-week industrial attachment in core telecom operations.",
      highlights: [
        "Gained exposure to GP's Infrastructure, Enterprise Security Management and Network Services departments",
        "Learned about network deployment, security management and mobile app development",
        "Applied technical knowledge in real-world corporate settings while observing cross-department collaboration and large-scale operational workflows"
      ],
      bgImage: "/images/gp.jpg"
    },
    {
      id: 2,
      title: "PROMYS India, Summer 2024",
      company: "Bangalore",
      role: "Residence Counselor",
      period: "2024",
      location: "Bangalore, India",
      type: "leadership",
      description: "PROMYS India is a mathematics program for high school students of Bangladesh and India.",
      highlights: [
        "Ensured timely attendance of students in classes",
        "Assisted students with academic and personal issues",
        "Coordinated with head counselors and faculty for smooth program operations",
        "Provided information on local health services and emergency contacts",
        "Monitored and managed student well-being and safety",
        "Helped to foster a kind, respectful, and nondiscriminatory culture"
      ],
      bgImage: "/images/promys.jpg"
    },
    {
      id: 3,
      title: "MIST Mars Rover Society",
      company: "Mongol Barota",
      role: "Member of Software Team",
      period: "2023-2024",
      location: "MIST",
      type: "project",
      description: "Worked on developing software solutions for Mars rover operations and scientific experiments.",
      highlights: [
        "Worked on the Mars rover's dashboard to show information of scientific experiments",
        "Used React.js for the front-end development",
        "Worked with various sensors for the scientific experiments"
      ],
      bgImage: "/images/urc.jpg"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return <Wrench className="w-6 h-6" />;
      case 'leadership':
        return <Users className="w-6 h-6" />;
      case 'project':
        return <Code className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-500';
      case 'leadership':
        return 'bg-green-500';
      case 'project':
        return 'bg-purple-500';
      default:
        return 'bg-dusty-pink-500';
    }
  };

  return (
    <motion.section 
      className="py-20 px-6 relative bg-gradient-to-br from-dusty-pink-50 to-white overflow-hidden"
      style={{ y }}
      id="experiences"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-dusty-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-dusty-pink-300/40 rounded-full blur-2xl animate-bounce-soft"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-dusty-pink-400/20 rounded-full blur-xl animate-pulse-soft"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-serif">
            Professional Experience
          </h2>
          <p className="text-dusty-pink-600 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on experience in technology, leadership, and innovation
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-dusty-pink-300 via-dusty-pink-400 to-dusty-pink-500 rounded-full hidden lg:block"></div>

          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-dusty-pink-400 shadow-lg z-10 items-center justify-center">
                  <div className={`w-8 h-8 ${getTypeColor(exp.type)} rounded-full flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-300`}>
                    {getTypeIcon(exp.type)}
                  </div>
                </div>

                <Card 
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} border-2 border-dusty-pink-200 hover:border-dusty-pink-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group relative overflow-hidden cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredCard === exp.id ? 'opacity-90' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${exp.bgImage})` }}
                  />
                  <div className={`absolute inset-0 backdrop-blur-sm bg-white/20 transition-opacity duration-500 ${hoveredCard === exp.id ? 'opacity-100' : 'opacity-0'}`} />
                  <div className={`absolute inset-0 bg-gradient-to-r from-dusty-pink-100/10 to-dusty-pink-200/10 transition-opacity duration-500 ${hoveredCard === exp.id ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100`}></div>

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-dusty-pink-700 mb-1 font-serif group-hover:text-dusty-pink-800 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-dusty-pink-700 mb-2">
                          {exp.company}
                        </p>
                        <p className="text-dusty-pink-800 font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className={`w-12 h-12 ${getTypeColor(exp.type)} rounded-xl flex items-center justify-center text-white shadow-lg lg:hidden transform group-hover:scale-110 transition-transform duration-300`}>
                        {getTypeIcon(exp.type)}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-dusty-pink-600">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dusty-pink-600">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-dusty-pink-900 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-dusty-pink-700 text-sm uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-dusty-pink-900 text-sm leading-relaxed">
                            <div className="w-2 h-2 bg-dusty-pink-900 rounded-full mt-2 flex-shrink-0 animate-pulse-soft"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-dusty-pink-300/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                </Card>

                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-dusty-pink-400 to-dusty-pink-500 rounded-full shadow-lg animate-bounce-soft">
            <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperiencesSection;
