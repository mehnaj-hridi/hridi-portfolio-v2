
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Autism Compass",
    description: "A comprehensive platform designed to support parents of children with autism.",
    details: [
      "Facilitates booking doctor and therapy sessions with no double bookings",
      "Mini marketplace for autism-specific toys and medicines",
      "Teacher course management with student enrollment and assignments",
      "Powered by Oracle database for robust data management"
    ],
    github: "https://github.com/fantasist-24/Autism-Compass",
    gradient: "from-dusty-pink-400 to-dusty-pink-600",
    emoji: "🧩"
  },
  {
    title: "PCOS Journey",
    description: "A Java-based desktop application for PCOS management and doctor consultation.",
    details: [
      "Self-diagnosis quizzes for PCOS assessment",
      "Medicine reminders for effective condition management",
      "JavaFX frontend with Java backend",
      "Seamless doctor-patient interaction platform"
    ],
    github: "https://github.com/fantasist-24/PCOSJourney",
    gradient: "from-dusty-pink-500 to-accent",
    emoji: "🏥"
  },
  {
    title: "OncoConnect",
    description: "A comprehensive web platform designed to assist cancer patients throughout their journey.",
    details: [
      "AI-powered medical report analysis",
      "Cancer risk assessment quiz and appointment booking",
      "Real-time healthcare provider communication",
      "Mental health counseling, community forum, and survivor stories",
      "Built with React, Node.js, Express.js, and MongoDB Atlas"
    ],
    github: "https://github.com/mehnaj-hridi/OncoConnect_Final",
    gradient: "from-accent to-dusty-pink-700",
    emoji: "🎗️"
  }

];

const ProjectsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative bg-dusty-pink-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-2xl sm:text-4xl mb-4">💻 ✨ 💻</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 font-serif">
            My Projects
          </h2>
          <p className="text-dusty-pink-600 text-base sm:text-lg max-w-2xl mx-auto">
            Tech with purpose — built to solve, built to support
          </p>
        </div>

        {/* Mobile/Tablet View - Stacked Cards */}
        <div className="block lg:hidden space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border-dusty-pink-200 overflow-hidden shadow-xl">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-dusty-pink-800 font-serif">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-dusty-pink-600 text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl sm:text-6xl mb-4 text-center">
                  {project.emoji}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-dusty-pink-600 flex items-start">
                      <span className="text-dusty-pink-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-dusty-pink-500 to-dusty-pink-600 hover:from-dusty-pink-600 hover:to-dusty-pink-700 text-white border-0"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-dusty-pink-300 text-dusty-pink-600 hover:bg-dusty-pink-50"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop View - 3D Carousel */}
        <div className="hidden lg:flex justify-center items-center min-h-[600px]">
          <div className="relative w-96 h-96 mx-auto">
            <div className="carousel-container">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`carousel-card card-${index}`}
                  style={{
                    '--card-index': index,
                    animationDelay: `${index * 3}s`
                  } as React.CSSProperties}
                >
                  <Card className="w-80 h-96 bg-white border-dusty-pink-200 overflow-hidden shadow-xl">
                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-dusty-pink-800 font-serif">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-dusty-pink-600 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        <div className="text-6xl mb-4 text-center">
                          {project.emoji}
                        </div>
                        <ul className="space-y-1 text-xs">
                          {project.details.slice(0, 3).map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-dusty-pink-600 flex items-start">
                              <span className="text-dusty-pink-400 mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-dusty-pink-500 to-dusty-pink-600 hover:from-dusty-pink-600 hover:to-dusty-pink-700 text-white border-0"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-dusty-pink-300 text-dusty-pink-600 hover:bg-dusty-pink-50"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-dusty-pink-500 italic text-sm sm:text-base">
            "Code with purpose, design with patience" 
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
