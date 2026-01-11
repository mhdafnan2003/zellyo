import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="logo">
            <img src="/Logo White.png" alt="Zellyo" className="logo-img" />
          </div>

          <div className="nav-links desktop-only">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonial</a>
          </div>

          <div className="nav-actions desktop-only">
            <button className="btn btn-cta">Get Started</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </nav>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu"
          >
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <button className="btn btn-cta w-full">Get Started</button>
          </motion.div>
        )}
      </div>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 24px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 1000;
          padding: 0 24px;
        }

        .navbar {
          background-color: var(--nav-bg, #0F4C38);
          border-radius: 92px;
          padding: 8px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 900px;
          height: 64px;
          box-shadow: 0 8px 32px rgba(15, 76, 56, 0.2);
        }

        .logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          color: white;
          font-size: 15px;
          font-weight: 400;
          opacity: 0.9;
        }

        .nav-links a:hover {
          opacity: 1;
        }

        .btn-cta {
          background-color: var(--nav-btn-bg, #E3E7C5);
          color: var(--nav-btn-text, #0F4C38);
          border-radius: 65px;
          padding: 10px 24px;
          font-weight: 700;
          font-size: 15px;
          transition: transform 0.2s ease;
        }

        .btn-cta:hover {
          transform: scale(1.05);
          background-color: #f1f4d8;
        }

        .mobile-menu-btn {
          display: none;
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          background: var(--nav-bg, #0F4C38);
          width: calc(100% - 48px);
          max-width: 900px;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-menu a {
          color: white;
          font-size: 16px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .navbar {
            padding: 8px 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
