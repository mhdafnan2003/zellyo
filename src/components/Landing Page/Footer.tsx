import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import footerBg from '../../assets/image/footer-bg.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-bg-image"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="container">
        {/* Row 1: Logo and Socials */}
        <motion.div
          className="footer-row-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <img src="/Logo White.png" alt="Zellyo" className="footer-logo" />
          </div>
          <div className="divider-v" />
          <div className="social-links">
            <motion.a whileHover={{ scale: 1.2, color: "#E3E7C5" }} href="#" className="social-icon"><Instagram size={20} /></motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#E3E7C5" }}
              href="#"
              className="social-icon"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#E3E7C5" }} href="#" className="social-icon"><Mail size={20} /></motion.a>
          </div>
        </motion.div>

        {/* Row 2: Navigation Links */}
        <motion.div
          className="footer-nav"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link, i) => (
            <span key={link}>
              <motion.a whileHover={{ color: "#E3E7C5" }} href="#">{link}</motion.a>
              {i < 4 && <span className="divider-s">|</span>}
            </span>
          ))}
        </motion.div>

        {/* Row 3: Description */}
        <motion.div
          className="footer-description"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Built to help small businesses grow, <strong>Zellyo</strong> simplifies workflows and online presence. Usage is subject to our <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong>.
          </p>
        </motion.div>

        {/* Row 4: Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Zellyo | Powered by Zenorix</p>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          padding: -1px 0 40px;
          background-color: #144534;
          color: white;
          overflow: hidden;
          text-align: center;
        }

        .footer-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.03;
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-row-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 20px;
          padding-top: 20px;
        }

        .footer-logo {
          height: 45px;
        }

        .divider-v {
          width: 1px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon {
          color: white;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .social-icon:hover {
          opacity: 1;
        }

        .footer-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-nav a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }

        .footer-nav a:hover {
          opacity: 0.7;
        }

        .divider-s {
          opacity: 0.3;
          font-weight: 300;
        }

        .footer-description {
          max-width: 800px;
          margin: 0 auto 40px;
          font-size: 14px;
          line-height: 1.6;
          opacity: 0.8;
        }

        .footer-description strong {
          color: white;
          font-weight: 600;
        }

        .footer-bottom {
          padding-top: 30px;
          padding-bottom: 20px;
          font-size: 14px;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 80px 0 30px;
          }
          
          .footer-row-top {
            flex-direction: column;
            gap: 16px;
          }

          .divider-v {
            display: none;
          }

          .footer-nav {
            gap: 15px;
          }

          .footer-nav a {
            font-size: 16px;
          }

          .divider-s {
            display: none;
          }

          .footer-bg-image {
            background-size: cover;
            opacity: 0.05;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
