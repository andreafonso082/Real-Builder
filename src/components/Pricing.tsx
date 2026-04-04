import { Check, X, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 bg-[#111315] relative border-t border-white/5">
      {/* Yellow border accents */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            THE REAL BUILDER SYSTEM
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get access to our fully equipped vehicles, affordable rental prices, and exclusive discounts on equipment & materials.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white">Choose Your <span className="text-[#FFB800]">Path</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#15181b] rounded-2xl p-8 border border-white/10 relative flex flex-col"
          >
            <div className="absolute -top-3 left-6 bg-[#FFB800] text-black text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
              <span className="w-3 h-3 rounded-full border border-black flex items-center justify-center text-[8px]">M</span>
              Best Value
            </div>
            
            <h4 className="text-xl font-bold text-white mb-6">Course + Vehicle & Membership</h4>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-gray-400 text-sm">from</span>
              <span className="text-[#FFB800] text-4xl font-bold">€249</span>
              <span className="text-gray-400">-</span>
              <span className="text-[#FFB800] text-4xl font-bold">€589</span>
              <span className="text-gray-400 text-sm">/ month</span>
            </div>
            <p className="text-gray-500 text-xs mb-8">Price depends on mobility solution choice</p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> FULL COURSE
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> CERTIFICATION
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> VEHICLE
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> RB MEMBERSHIP
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> WORKWEAR
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> PM SOFTWARE
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> MOBILE WORKSHOP ACCESS
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> JOB PLACEMENT SUPPORT
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Globe size={16} className="text-[#FFB800]" /> GLOBAL MARKETING SUPPORT
              </li>
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#FFB800] text-black py-4 rounded-xl font-bold tracking-widest hover:bg-[#FFB800]/90 transition-colors"
            >
              SELECT PLAN
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#15181b] rounded-2xl p-8 border border-white/10 relative flex flex-col"
          >
            <div className="absolute -top-3 left-6 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
               <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">I</span>
              Independent
            </div>
            
            <h4 className="text-xl font-bold text-white mb-6">Course Only</h4>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[#FFB800] text-4xl font-bold">€899</span>
              <span className="text-gray-400 text-sm">one-time</span>
            </div>
            <p className="text-gray-400 text-xs mb-8">Full certification without membership</p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> FULL COURSE
              </li>
              <li className="flex items-center gap-3 text-white text-sm font-semibold">
                <Check size={16} className="text-[#22c55e]" /> CERTIFICATION
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <X size={16} /> No vehicle included
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">M</span> No membership benefits
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <X size={16} /> No mobile workshop access
              </li>
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold tracking-widest hover:bg-white/10 transition-colors"
            >
              SELECT PLAN
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Please select a path above to continue
        </motion.div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
