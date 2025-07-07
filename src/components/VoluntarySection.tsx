
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VoluntarySection = () => {
  const experiences = [
    {
    title: "Problem Setter – Talent Hunt Programming Contest",
    organization: "MIST Computer Club (MCC)",
    period: "2025",
    icon: "🧠",
    color: "from-fuchsia-400 to-pink-500"
    },
    {
      title: "Academic Coordinator",
      organization: "Bangladesh Girls' Mathematics Foundation (BGMF)",
      period: "2023 - Present",
      icon: "📚",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "President",
      organization: "MIST Math Olympiad Club (MMOC)",
      period: "2024 - Present",
      icon: "🏆",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Vice President of Committee of Skill Development",
      organization: "MIST Computer Club (MCC)",
      period: "2024 - Present",
      icon: "💻",
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Founding President",
      organization: "Viqarunnisa Noon Math Club (VNMC)",
      period: "2019 - 2022",
      icon: "👑",
      color: "from-orange-400 to-red-400"
    },
    {
    title: "Private Tutor – Physics, Math & Science",
    organization: "High School Level",
    period: "2022 - Present",
    icon: "📝",
    color: "from-yellow-400 to-orange-400"
   }
   
  ];

  return (
    <section className="py-20 px-6 relative bg-dusty-pink-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6 animate-pulse-soft">
            <span className="text-4xl">🤝</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-serif">
            Voluntary Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to communities and making a difference through leadership and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 glass-effect border-0 relative overflow-hidden"
              style={{ 
                transformStyle: 'preserve-3d',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
              
              {/* 3D floating icon */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">{exp.icon}</span>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3D depth effect bars */}
                <div className="mt-6 flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 bg-gradient-to-r ${exp.color} rounded-full transition-all duration-300 group-hover:h-2`}
                      style={{ 
                        width: `${20 + i * 15}%`,
                        transform: `translateZ(${i * 2}px)`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoluntarySection;
