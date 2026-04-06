import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQPage from './pages/FAQPage';
import NotifyMeModal from './components/NotifyMeModal';

export default function App() {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenNotify = () => setIsNotifyModalOpen(true);
    window.addEventListener('openNotifyMe', handleOpenNotify);
    return () => window.removeEventListener('openNotifyMe', handleOpenNotify);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFB800] selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
        <NotifyMeModal isOpen={isNotifyModalOpen} onClose={() => setIsNotifyModalOpen(false)} />
      </div>
    </Router>
  );
}
