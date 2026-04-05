import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/10 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link 
              to="/"
              onClick={scrollToTop}
              className="text-white font-bold text-xl tracking-tighter flex flex-col items-start leading-none mb-4 cursor-pointer"
            >
              <span className="text-2xl">RB</span>
              <span className="text-[0.4rem] tracking-widest">REAL BUILDER</span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-xs">
              Empowering the next generation of builders with practical skills, vehicles, and global opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Contact Us</h4>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#FFB800]" />
              <span className="text-gray-300">contact@realbuilder.academy</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#FFB800]" />
              <span className="text-gray-300">+351 912 345 678</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#FFB800]" />
              <span className="text-gray-300">Lisbon, Portugal</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Legal</h4>
            <Link to="/faq" onClick={scrollToTop} className="hover:text-white transition-colors w-fit">FAQ</Link>
            <a href="#" className="hover:text-white transition-colors w-fit">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Privacy Policy</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} Real Builder Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
