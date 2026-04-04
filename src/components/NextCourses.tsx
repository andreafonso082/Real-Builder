import { Calendar, MapPin, Bell, Maximize2, X } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#1a1d21] rounded-2xl border border-white/5 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {/* Course Card 1 */}
          <div className="p-6 relative flex flex-col h-full">
            <div className="absolute -top-3 right-6 bg-[#2a2d31] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full border border-gray-400"></span>
              Registration Closed
            </div>
            
            <div className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2 mt-2">TILES & TILING</div>
            <h3 className="text-xl font-bold text-white mb-6">Professional Tile Installation</h3>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Calendar size={16} />
                <span className="blur-[4px] select-none">February 1, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span className="blur-[4px] select-none">Porto, Portugal</span>
              </div>
            </div>

            <button 
              onClick={() => scrollTo('contact')}
              className="w-full bg-[#FFB800] text-black py-3 rounded-lg font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-[#FFB800]/90 transition-colors mt-auto"
            >
              <Bell size={16} />
              NOTIFY ME !
            </button>
          </div>

          {/* Course Card 2 */}
          <div className="p-6 relative flex flex-col h-full">
            <div className="absolute -top-3 right-6 bg-[#2a2d31] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full border border-gray-400"></span>
              Registration Closed
            </div>
            
            <div className="text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-2 mt-2">FLOOR HEATING</div>
            <h3 className="text-xl font-bold text-white mb-6">Underfloor Heating Installation</h3>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Calendar size={16} />
                <span className="blur-[4px] select-none">February 15, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span className="blur-[4px] select-none">Lisbon, Portugal</span>
              </div>
            </div>

            <button 
              onClick={() => scrollTo('contact')}
              className="w-full bg-[#FFB800] text-black py-3 rounded-lg font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-[#FFB800]/90 transition-colors mt-auto"
            >
              <Bell size={16} />
              NOTIFY ME !
            </button>
          </div>

          {/* Calendar Widget */}
          <div className="p-6 relative flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-white font-bold">
                <Calendar size={20} className="text-[#FFB800]" />
                Course Calendar
              </div>
              <button className="text-gray-400 hover:text-white flex items-center gap-1 text-xs">
                <Maximize2 size={14} /> Expand
              </button>
            </div>

            {/* Compact Upcoming Dates List */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#FFB800]/10 text-[#FFB800] rounded-lg p-2 text-center min-w-[50px]">
                  <div className="text-[10px] font-bold uppercase">Feb</div>
                  <div className="text-lg font-black leading-none mt-1">01</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Professional Tile Installation</div>
                  <div className="text-gray-400 text-xs mt-1">Porto, Portugal</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-500/10 text-red-500 rounded-lg p-2 text-center min-w-[50px]">
                  <div className="text-[10px] font-bold uppercase">Feb</div>
                  <div className="text-lg font-black leading-none mt-1">15</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Underfloor Heating</div>
                  <div className="text-gray-400 text-xs mt-1">Lisbon, Portugal</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="w-full border border-white/20 text-white py-3 rounded-lg font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors mt-auto"
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
          <div className="bg-[#1a1d21] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Full Course Calendar</h3>
                  <p className="text-gray-400 text-sm">Upcoming dates for all Real Builder certifications</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCalendarOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-8">
                {/* February */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    February 2026
                    <span className="h-[1px] flex-1 bg-white/10 ml-4"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#222529] border border-white/5 rounded-xl p-4 flex gap-4 hover:border-[#FFB800]/30 transition-colors">
                      <div className="bg-[#FFB800]/10 text-[#FFB800] rounded-lg p-3 text-center min-w-[60px] flex flex-col justify-center">
                        <div className="text-xs font-bold uppercase">Feb</div>
                        <div className="text-2xl font-black leading-none mt-1">01</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#FFB800] font-bold tracking-widest uppercase mb-1">Tiles & Tiling</div>
                        <div className="text-white font-bold mb-1">Professional Tile Installation</div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin size={12} /> Porto, Portugal
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#222529] border border-white/5 rounded-xl p-4 flex gap-4 hover:border-red-500/30 transition-colors">
                      <div className="bg-red-500/10 text-red-500 rounded-lg p-3 text-center min-w-[60px] flex flex-col justify-center">
                        <div className="text-xs font-bold uppercase">Feb</div>
                        <div className="text-2xl font-black leading-none mt-1">15</div>
                      </div>
                      <div>
                        <div className="text-xs text-red-500 font-bold tracking-widest uppercase mb-1">Floor Heating</div>
                        <div className="text-white font-bold mb-1">Underfloor Heating</div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin size={12} /> Lisbon, Portugal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* March */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    March 2026
                    <span className="h-[1px] flex-1 bg-white/10 ml-4"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#222529] border border-white/5 rounded-xl p-4 flex gap-4 hover:border-blue-500/30 transition-colors">
                      <div className="bg-blue-500/10 text-blue-500 rounded-lg p-3 text-center min-w-[60px] flex flex-col justify-center">
                        <div className="text-xs font-bold uppercase">Mar</div>
                        <div className="text-2xl font-black leading-none mt-1">10</div>
                      </div>
                      <div>
                        <div className="text-xs text-blue-500 font-bold tracking-widest uppercase mb-1">Plumbing</div>
                        <div className="text-white font-bold mb-1">Advanced Pipe Systems</div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin size={12} /> Faro, Portugal
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#222529] border border-white/5 rounded-xl p-4 flex gap-4 hover:border-green-500/30 transition-colors">
                      <div className="bg-green-500/10 text-green-500 rounded-lg p-3 text-center min-w-[60px] flex flex-col justify-center">
                        <div className="text-xs font-bold uppercase">Mar</div>
                        <div className="text-2xl font-black leading-none mt-1">22</div>
                      </div>
                      <div>
                        <div className="text-xs text-green-500 font-bold tracking-widest uppercase mb-1">Carpentry</div>
                        <div className="text-white font-bold mb-1">Structural Woodwork</div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin size={12} /> Braga, Portugal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* April */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    April 2026
                    <span className="h-[1px] flex-1 bg-white/10 ml-4"></span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#222529] border border-white/5 rounded-xl p-4 flex gap-4 hover:border-purple-500/30 transition-colors">
                      <div className="bg-purple-500/10 text-purple-500 rounded-lg p-3 text-center min-w-[60px] flex flex-col justify-center">
                        <div className="text-xs font-bold uppercase">Apr</div>
                        <div className="text-2xl font-black leading-none mt-1">05</div>
                      </div>
                      <div>
                        <div className="text-xs text-purple-500 font-bold tracking-widest uppercase mb-1">Electrical</div>
                        <div className="text-white font-bold mb-1">Smart Home Wiring</div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin size={12} /> Lisbon, Portugal
                        </div>
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
