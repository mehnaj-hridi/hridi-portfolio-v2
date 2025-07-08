
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';


const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative bg-dusty-pink-200">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-serif">
            About Me
          </h2>
        </div>

        {/* Main Row: Image Left, Text + Cards Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Photo Box */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-dusty-pink-300">
              <img
                src="/images/your-photo.jpg" // Replace with actual path
                alt="Your Name"
                className="rounded-2xl w-72 h-72 object-cover"
              />
            </div>
          </div>

          {/* Right Section: Text + Cards */}
          <div className="w-full lg:w-2/3">
            {/* Intro Text */}
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-dusty-pink-700 font-serif">Mehnaj Hridi</h1>
              <p className="text-lg text-dusty-pink-600 mt-1">Final Year CSE Student</p>
              <p className="text-dusty-pink-700 text-base mt-4 max-w-xl">
                So this is me — Hridi and this is the part where you get to know me.  
                I'm currently studying Computer Science and Engineering at the Military Institute of Science and Technology (MIST) 
                and I live in Dhaka, Bangladesh. I study code, chase ideas and build things that (hopefully) make life a little smoother.
              </p>
              
{/* Contact Information */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="mailto:hridimehnaj@gmail.com"
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-dusty-pink-200"
                >
                  <Mail className="w-5 h-5 text-dusty-pink-600" />
                  <span className="text-dusty-pink-700 font-medium">hridimehnaj@gmail.com</span>
                </a>
                
                <a
                  href="tel:+8801748149315"
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-dusty-pink-200"
                >
                  <Phone className="w-5 h-5 text-dusty-pink-600" />
                  <span className="text-dusty-pink-700 font-medium">01748149315</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/mehnaj-hridi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-dusty-pink-200"
                >
                  <Linkedin className="w-5 h-5 text-dusty-pink-600" />
                  <span className="text-dusty-pink-700 font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/mehnaj-hridi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-dusty-pink-200"
                >
                  <Github className="w-5 h-5 text-dusty-pink-600" />
                  <span className="text-dusty-pink-700 font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-effect border-dusty-pink-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 animate-bounce-soft">👑</div>
                  <h3 className="text-xl font-bold text-dusty-pink-600 mb-2 font-serif">Girlboss</h3>
                  <p className="text-dusty-pink-700 text-sm leading-relaxed">
                    Building my empire one project at a time. Leadership and determination 
                    drive everything I do. I believe in lifting others as I climb.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-dusty-pink-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 animate-float">💻</div>
                  <h3 className="text-xl font-bold text-dusty-pink-600 mb-2 font-serif">Developer</h3>
                  <p className="text-dusty-pink-700 text-sm leading-relaxed">
                    I turn concepts into clean, efficient solutions. Whether it’s frontend flow or backend logic, 
                    I love building things that just make sense and work beautifully.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-dusty-pink-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 animate-float">✨</div>
                  <h3 className="text-xl font-bold text-dusty-pink-600 mb-2 font-serif">Visionary</h3>
                  <p className="text-dusty-pink-700 text-sm leading-relaxed">
                    I love noticing the small problems around us and turning them into real, working ideas. 
                    Most of the projects I’ve built started with a simple question and a determination to find the answer myself.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <div className="inline-block glass-effect rounded-2xl p-8 max-w-4xl">
            <p className="text-lg text-dusty-pink-700 leading-relaxed italic">
              "I'm not just writing code; I'm creating experiences. I'm not just building applications; 
              I'm building the future. And I'm doing it all while looking fabulous and empowering others 
              to do the same. Because why choose between being successful and stylish when you can be both?"
            </p>
            <div className="mt-4 text-dusty-pink-500 font-semibold">- Your Favorite Girlboss Problem-Solver 💕</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
