import { Info, Globe, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [lang, setLang] = useState('EN');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'EN' ? 'PT' : 'EN');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 cursor-pointer">
          <div className="text-white font-bold text-2xl tracking-tighter flex flex-col items-center leading-none">
            <span className="text-3xl">RB</span>
            <span className="text-[0.5rem] tracking-widest">REAL BUILDER</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300">
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">ABOUT</button>
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">HOW IT WORKS</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">PRICING</button>
          <button onClick={() => scrollTo('courses')} className="hover:text-white transition-colors">COURSES</button>
          <button onClick={() => scrollTo('professionals')} className="hover:text-white transition-colors">PROFESSIONALS</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-white transition-colors">PARTNERS</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">CONTACT</button>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-gray-300 transition-colors text-xs font-semibold">
            <Globe size={16} />
            <span className="hidden sm:inline">EN</span>
          </div>
          
          {!isLoggedIn ? (
            <button 
              onClick={handleLogin}
              className="bg-[#FFB800] text-black px-4 md:px-6 py-2 rounded-md text-xs font-bold tracking-wider hover:bg-[#FFB800]/90 transition-colors"
            >
              LOGIN
            </button>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full border border-white/10"
              >
                <div className="w-6 h-6 rounded-full bg-[#FFB800] flex items-center justify-center text-black font-bold text-xs">
                  JD
                </div>
                <span className="text-white text-xs font-semibold hidden sm:block">John Doe</span>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1a1d21] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-sm text-white font-semibold">John Doe</p>
                    <p className="text-xs text-gray-400">john.doe@example.com</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
