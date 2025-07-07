
import { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = shapesRef.current?.children;
    if (!shapes) return;

    Array.from(shapes).forEach((shape, index) => {
      const element = shape as HTMLElement;
      const delay = index * 0.5;
      const duration = 4 + Math.random() * 2;
      
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div 
      ref={shapesRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Heart shape */}
      <div className="absolute top-20 left-10 w-8 h-8 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-dusty-pink-400 to-dusty-pink-600 transform rotate-45 rounded-lg shadow-lg">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-dusty-pink-400 to-dusty-pink-600 rounded-full"></div>
          <div className="absolute left-0 -top-2 w-4 h-4 bg-gradient-to-br from-dusty-pink-400 to-dusty-pink-600 rounded-full"></div>
        </div>
      </div>

      {/* Diamond */}
      <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-accent to-dusty-pink-500 transform rotate-45 animate-bounce-soft rounded-sm shadow-lg"></div>

      {/* Circle */}
      <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-gradient-to-br from-dusty-pink-300 to-dusty-pink-500 rounded-full animate-pulse-soft shadow-lg"></div>

      {/* Star */}
      <div className="absolute top-1/3 right-1/3 w-6 h-6 animate-float">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-dusty-pink-400 to-accent transform rotate-12">
            <div className="w-full h-1 bg-current absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="w-1 h-full bg-current absolute left-1/2 top-0 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>

      {/* Triangle */}
      <div className="absolute bottom-20 right-10 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-dusty-pink-400 animate-wiggle"></div>

      {/* Code brackets */}
      <div className="absolute top-1/2 left-16 text-2xl font-mono text-dusty-pink-500 animate-bounce-soft opacity-60">{'< />'}</div>
      
      {/* Fashion elements */}
      <div className="absolute bottom-1/3 right-1/4 text-xl animate-float opacity-60">👗</div>
      <div className="absolute top-1/4 left-1/3 text-lg animate-bounce-soft opacity-60">💄</div>
    </div>
  );
};

export default FloatingShapes;
