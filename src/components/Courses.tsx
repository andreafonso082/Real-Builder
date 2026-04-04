import { Layers, Wrench, Home, Square, Paintbrush, Thermometer, Shield, Sparkles, BrickWall, Box, Trash2, ShieldCheck, Mountain, Hammer, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

const courses = [
  { name: 'Pladur / Drywall', icon: Layers, color: 'bg-orange-500' },
  { name: 'Conferagem', icon: Wrench, color: 'bg-blue-500' },
  { name: 'Carpentry', icon: Home, color: 'bg-yellow-600' },
  { name: 'Roofing', icon: Square, color: 'bg-gray-500' },
  { name: 'Tiles & Tiling', icon: Paintbrush, color: 'bg-green-500' },
  { name: 'Floor Heating', icon: Thermometer, color: 'bg-red-500' },
  { name: 'Isolation Systems', icon: Shield, color: 'bg-purple-500' },
  { name: 'Plaster / Micro Cement', icon: Sparkles, color: 'bg-blue-400' },
  { name: 'Brickers', icon: BrickWall, color: 'bg-orange-600' },
  { name: 'Stock Management', icon: Box, color: 'bg-green-600' },
  { name: 'Cleaning', icon: Trash2, color: 'bg-blue-300' },
  { name: 'Security', icon: ShieldCheck, color: 'bg-red-600' },
  { name: 'Outdoor Stone Wall Builder', icon: Mountain, color: 'bg-gray-600' },
  { name: 'Steel Work', icon: Hammer, color: 'bg-gray-400' },
  { name: 'Servente', icon: Box, color: 'bg-orange-400' },
  { name: 'Team Leader', icon: UserCheck, color: 'bg-blue-600' },
  { name: 'Wood Painter', icon: Paintbrush, color: 'bg-orange-500' },
];

export default function Courses() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triplicate courses for seamless infinite scrolling
  const infiniteCourses = [...courses, ...courses, ...courses];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initialize scroll position to the middle set to allow scrolling left immediately
    const initScroll = () => {
      container.scrollLeft = container.scrollWidth / 3;
    };
    
    // Small delay to ensure rendering is complete
    setTimeout(initScroll, 100);

    const handleScroll = () => {
      const singleSetWidth = container.scrollWidth / 3;
      
      // If we scroll too far left (into the first set), jump forward
      if (container.scrollLeft < singleSetWidth / 2) {
        container.style.scrollSnapType = 'none';
        container.scrollLeft += singleSetWidth;
        container.style.scrollSnapType = 'x mandatory';
      }
      // If we scroll too far right (into the third set), jump backward
      else if (container.scrollLeft > singleSetWidth * 2) {
        container.style.scrollSnapType = 'none';
        container.scrollLeft -= singleSetWidth;
        container.style.scrollSnapType = 'x mandatory';
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="courses" className="pt-32 pb-8 bg-[#15181b] relative border-t border-white/5 overflow-hidden">
      {/* Yellow border accents */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30 hidden md:block"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30 hidden md:block"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            COURSES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Master specialized skills in high-demand construction trades. All courses include theory, practice, and certification.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#1a1d21] border border-white/10 text-white p-3 rounded-full hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] transition-colors shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#1a1d21] border border-white/10 text-white p-3 rounded-full hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] transition-colors shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 no-scrollbar"
          >
            {infiniteCourses.map((course, index) => (
              <div 
                key={index} 
                className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group min-w-[250px] sm:min-w-[280px] snap-start flex-shrink-0"
              >
                <div className={`w-10 h-10 rounded-lg ${course.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon size={20} />
                </div>
                <h3 className="text-white font-bold text-sm">{course.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
