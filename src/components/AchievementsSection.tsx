
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "National Winner and Camper",
      organization: "Bangladesh Mathematics Olympiad (BdMO)",
      icon: "🥇",
      color: "from-yellow-400 to-orange-500",
      rank: "Champion",
      shadow: "shadow-yellow-200"
    },
    {
      title: "Promising Team Award",
      organization: "Independence Day Programming Contest, MIST",
      year: "2023",
      icon: "🏅",
      color: "from-green-400 to-blue-500",
      rank: "Team Award",
      shadow: "shadow-green-200"
    },
    {
      title: "5th Position",
      organization: "Inter Department Math Olympiad, MIST",
      year: "2024",
      icon: "🏆",
      color: "from-purple-400 to-pink-500",
      rank: "Top 5",
      shadow: "shadow-purple-200"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-10 w-20 h-20 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full animate-bounce-soft blur-sm"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-green-300/30 to-blue-300/30 rounded-full animate-pulse-soft blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 animate-wiggle">
            <span className="text-4xl">🌟</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-serif">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards earned through dedication and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:-rotate-2 glass-effect border-0 relative overflow-hidden ${achievement.shadow} shadow-lg hover:shadow-2xl`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* 3D Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-lg blur-sm`}></div>
              
              {/* Trophy/Medal floating animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:animate-bounce-soft transition-all duration-500 group-hover:scale-125">
                <span className="text-3xl filter drop-shadow-md">{achievement.icon}</span>
              </div>

              <CardContent className="p-8 pt-12 relative z-10 text-center">
                <div className="space-y-4">
                  {/* Rank Badge */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white text-sm font-bold transform group-hover:scale-105 transition-all duration-300 shadow-md`}>
                    {achievement.rank}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-primary font-semibold">
                    {achievement.organization}
                  </p>
                  
                  {achievement.year && (
                    <p className="text-sm text-muted-foreground font-medium">
                      {achievement.year}
                    </p>
                  )}
                </div>

                {/* 3D Progress Bars */}
                <div className="mt-6 space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="relative h-2 bg-muted rounded-full overflow-hidden"
                    >
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${achievement.color} rounded-full transition-all duration-1000 group-hover:animate-pulse-soft`}
                        style={{ 
                          width: `${80 + i * 10}%`,
                          transform: `translateZ(${i * 3}px)`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" style={{ animationDelay: '0.5s' }}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
