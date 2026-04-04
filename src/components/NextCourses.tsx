import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function NextCourses() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (isCalendarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCalendarOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-20 bg-[#15181b] relative">
      {/* Yellow border accents */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
            NEXT COURSES
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="p-8 relative flex flex-col h-full bg-[#1a1d21] rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              Registration Closed
            </div>
            <div className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2">TILES & TILING</div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Tile Installation</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">Date</span>
                <span className="text-white text-sm font-medium">February 1, 2026</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">Location</span>
                <span className="text-white text-sm font-medium">Porto, Portugal</span>
              </div>
            </div>

            <button 
              onClick={() => scrollTo('contact')}
              className="w-full bg-white text-black hover:bg-[#FFB800] py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors mt-auto"
            >
              NOTIFY ME
            </button>
          </div>

          {/* Course Card 2 */}
          <div className="p-8 relative flex flex-col h-full bg-[#1a1d21] rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              Registration Closed
            </div>
            <div className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2">FLOOR HEATING</div>
            <h3 className="text-2xl font-bold text-white mb-8">Underfloor Heating Installation</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">Date</span>
                <span className="text-white text-sm font-medium">February 15, 2026</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-gray-500 text-sm">Location</span>
                <span className="text-white text-sm font-medium">Lisbon, Portugal</span>
              </div>
            </div>

            <button 
              onClick={() => scrollTo('contact')}
              className="w-full bg-white text-black hover:bg-[#FFB800] py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors mt-auto"
            >
              NOTIFY ME
            </button>
          </div>

          {/* Calendar Widget */}
          <div className="p-8 relative flex flex-col h-full bg-[#1a1d21] rounded-2xl border border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white">Course Calendar</h3>
              <button className="text-[#FFB800] hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
                EXPAND
              </button>
            </div>

            {/* Compact Upcoming Dates List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-center min-w-[48px]">
                  <div className="text-[#FFB800] text-[10px] font-bold uppercase">Feb</div>
                  <div className="text-white text-xl font-black">01</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-white font-bold text-sm">Tile Installation</div>
                  <div className="text-gray-400 text-xs mt-0.5">Porto, Portugal</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-center min-w-[48px]">
                  <div className="text-[#FFB800] text-[10px] font-bold uppercase">Feb</div>
                  <div className="text-white text-xl font-black">15</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-white font-bold text-sm">Underfloor Heating</div>
                  <div className="text-gray-400 text-xs mt-0.5">Lisbon, Portugal</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="w-full border border-white/10 text-white hover:bg-white/5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors mt-auto"
            >
              VIEW ALL DATES
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Yellow border accent */}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-[#FFB800]/30"></div>

      {/* Full Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111315] border border-white/10 rounded-none w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Full Course Calendar</h3>
                  <p className="text-gray-500 text-sm mt-1">Upcoming dates for all Real Builder certifications</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCalendarOpen(false)}
                className="text-gray-500 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-8 overflow-y-auto flex-1">
              <div className="space-y-12">
                {/* February */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6 flex items-center gap-4">
                    February 2026
                    <span className="h-[1px] flex-1 bg-white/10"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-white/10 p-6 flex gap-6 hover:border-white/30 transition-colors">
                      <div className="text-center min-w-[60px] flex flex-col justify-center border-r border-white/10 pr-6">
                        <div className="text-xs font-bold text-gray-500 uppercase">FEB</div>
                        <div className="text-2xl font-black text-white leading-none mt-2">01</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Tiles & Tiling</div>
                        <div className="text-white font-semibold mb-2">Professional Tile Installation</div>
                        <div className="text-gray-400 text-xs">Porto, Portugal</div>
                      </div>
                    </div>

                    <div className="border border-white/10 p-6 flex gap-6 hover:border-white/30 transition-colors">
                      <div className="text-center min-w-[60px] flex flex-col justify-center border-r border-white/10 pr-6">
                        <div className="text-xs font-bold text-gray-500 uppercase">FEB</div>
                        <div className="text-2xl font-black text-white leading-none mt-2">15</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Floor Heating</div>
                        <div className="text-white font-semibold mb-2">Underfloor Heating</div>
                        <div className="text-gray-400 text-xs">Lisbon, Portugal</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* March */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6 flex items-center gap-4">
                    March 2026
                    <span className="h-[1px] flex-1 bg-white/10"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-white/10 p-6 flex gap-6 hover:border-white/30 transition-colors">
                      <div className="text-center min-w-[60px] flex flex-col justify-center border-r border-white/10 pr-6">
                        <div className="text-xs font-bold text-gray-500 uppercase">MAR</div>
                        <div className="text-2xl font-black text-white leading-none mt-2">10</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Plumbing</div>
                        <div className="text-white font-semibold mb-2">Advanced Pipe Systems</div>
                        <div className="text-gray-400 text-xs">Faro, Portugal</div>
                      </div>
                    </div>

                    <div className="border border-white/10 p-6 flex gap-6 hover:border-white/30 transition-colors">
                      <div className="text-center min-w-[60px] flex flex-col justify-center border-r border-white/10 pr-6">
                        <div className="text-xs font-bold text-gray-500 uppercase">MAR</div>
                        <div className="text-2xl font-black text-white leading-none mt-2">22</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Carpentry</div>
                        <div className="text-white font-semibold mb-2">Structural Woodwork</div>
                        <div className="text-gray-400 text-xs">Braga, Portugal</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* April */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6 flex items-center gap-4">
                    April 2026
                    <span className="h-[1px] flex-1 bg-white/10"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-white/10 p-6 flex gap-6 hover:border-white/30 transition-colors">
                      <div className="text-center min-w-[60px] flex flex-col justify-center border-r border-white/10 pr-6">
                        <div className="text-xs font-bold text-gray-500 uppercase">APR</div>
                        <div className="text-2xl font-black text-white leading-none mt-2">05</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Electrical</div>
                        <div className="text-white font-semibold mb-2">Smart Home Wiring</div>
                        <div className="text-gray-400 text-xs">Lisbon, Portugal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
