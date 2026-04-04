import { Key, Zap, Car, Truck } from 'lucide-react';

export default function MobilitySolutions() {
  return (
    <section id="mobility" className="py-24 bg-[#111315] relative border-t border-white/5">
      {/* Yellow border accents */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Choose Your <span className="text-[#FFB800]">Mobility Solution</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Mobile Toolbox */}
          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-48 bg-white relative">
              <img 
                src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Mobile Toolbox" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Key size={12} />
                </div>
                Mobile Toolbox
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                RB STARTER
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€249</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </div>

          {/* Card 2: Electric 3-Wheeler */}
          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-48 bg-gray-300 relative">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
                alt="Electric 3-Wheeler" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Zap size={12} />
                </div>
                Electric 3-Wheeler
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-2 MAN BUSINESS IN TOWN
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€389</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </div>

          {/* Card 3: Tool Buggy / Quad */}
          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-[#FFB800]/30 flex flex-col relative transform lg:-translate-y-2 shadow-[0_0_30px_rgba(255,184,0,0.1)]">
            <div className="absolute top-0 left-0 right-0 bg-[#FFB800] text-black text-[10px] font-bold text-center py-1 z-10 tracking-widest uppercase">
              MOST POPULAR
            </div>
            <div className="h-48 bg-gray-400 relative mt-6">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2157&auto=format&fit=crop" 
                alt="Tool Buggy / Quad" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Car size={12} />
                </div>
                Tool Buggy / Quad
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-4 MAN BUSINESS IN TOWN
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€489</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </div>

          {/* Card 4: Tool Van */}
          <div className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-48 bg-gray-500 relative">
              <img 
                src="https://images.unsplash.com/photo-1583423230902-b653afbc61aa?q=80&w=1974&auto=format&fit=crop" 
                alt="Tool Van" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Truck size={12} />
                </div>
                Tool Van
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-4 MAN BUSINESS MULTI...
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€589</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
