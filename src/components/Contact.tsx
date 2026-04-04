import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
              Ready to start your <span className="text-[#FFB800]">journey?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have questions about our courses, membership, or vehicle solutions? Our team is here to help you become a Real Builder.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB800]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Email Us</div>
                  <div className="text-white font-semibold">contact@realbuilder.academy</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB800]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Call Us</div>
                  <div className="text-white font-semibold">+351 912 345 678</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB800]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Visit Us</div>
                  <div className="text-white font-semibold">Lisbon, Portugal</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111315] rounded-3xl p-8 md:p-12 border border-white/10">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB800] transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#FFB800] text-black py-4 rounded-xl font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#FFB800]/90 transition-colors"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
