import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 flex justify-center z-[1000] px-6">
        <nav className={`bg-zellyo-green rounded-[92px] px-8 flex items-center justify-between w-full max-w-[80%] h-[70px] shadow-[0_8px_32px_rgba(15,76,56,0.2)] transition-all duration-300 ${isScrolled ? 'bg-zellyo-green/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,76,56,0.3)]' : ''
          }`}>
          <div>
            <img src="/Logo White.png" alt="Zellyo" className="h-[38px] w-auto object-contain" />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-white text-[15px] font-normal opacity-90 hover:opacity-100 transition-opacity">Home</a>
            <a href="#about" className="text-white text-[15px] font-normal opacity-90 hover:opacity-100 transition-opacity">About</a>
            <a href="#services" className="text-white text-[15px] font-normal opacity-90 hover:opacity-100 transition-opacity">Services</a>
            <a href="#pricing" className="text-white text-[15px] font-normal opacity-90 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#testimonials" className="text-white text-[15px] font-normal opacity-90 hover:opacity-100 transition-opacity">Testimonial</a>
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <button
              onClick={onSignupClick}
              className="bg-[#E3E7C5] text-zellyo-green rounded-[65px] px-6 py-2.5 font-bold text-[15px] border-none hover:scale-105 hover:bg-[#f1f4d8] transition-all"
            >
              Get Started
            </button>
            <button
              onClick={onLoginClick}
              className="bg-transparent text-white border-2 border-white rounded-[65px] px-6 py-2 font-semibold text-[15px] hover:bg-white/10 hover:scale-105 transition-all"
            >
              Login
            </button>
          </div>

          <button
            className="md:hidden block text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 bg-zellyo-green w-[calc(100%-48px)] max-w-[900px] rounded-3xl p-6 flex flex-col gap-4"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white text-base py-2 border-b border-white/10">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-white text-base py-2 border-b border-white/10">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-white text-base py-2 border-b border-white/10">Services</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-white text-base py-2 border-b border-white/10">Pricing</a>
            <button
              onClick={() => { onSignupClick(); setIsOpen(false); }}
              className="w-full bg-[#E3E7C5] text-zellyo-green rounded-[65px] px-6 py-2.5 font-bold text-[15px] border-none hover:scale-105 hover:bg-[#f1f4d8] transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => { onLoginClick(); setIsOpen(false); }}
              className="w-full bg-transparent text-white border-2 border-white rounded-[65px] px-6 py-2 font-semibold text-[15px] hover:bg-white/10 hover:scale-105 transition-all"
            >
              Login
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
