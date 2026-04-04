import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/10 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <Link 
          to="/"
          onClick={scrollToTop}
          className="text-white font-bold text-xl tracking-tighter flex flex-col items-start leading-none mb-4 md:mb-0 cursor-pointer"
        >
          <span className="text-2xl">RB</span>
          <span className="text-[0.4rem] tracking-widest">REAL BUILDER</span>
        </Link>
        <p>© {new Date().getFullYear()} Real Builder. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/faq" onClick={scrollToTop} className="hover:text-white transition-colors">FAQ</Link>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
