import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';
import footerBg from '../../assets/image/footer-bg.png';

const Footer = () => {
  return (
    <footer className="relative py-[30px] max-md:py-[80px_0_30px] bg-[#144534] color-white overflow-hidden text-center text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center opacity-3 max-md:opacity-5 pointer-events-none z-0 max-md:bg-cover"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-5">
        {/* Row 1: Logo and Socials */}
        <motion.div
          className="flex items-center justify-center gap-6 max-md:flex-col max-md:gap-4 mb-5 pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <img src="/Logo White.png" alt="Zellyo" className="h-[45px]" />
          </div>
          <div className="w-px h-[30px] bg-white/30 max-md:hidden" />
          <div className="flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.2, color: "#E3E7C5" }} href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"><Instagram size={20} /></motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#E3E7C5" }}
              href="#"
              className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Phone size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#E3E7C5" }} href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"><Mail size={20} /></motion.a>
          </div>
        </motion.div>

        {/* Row 2: Navigation Links */}
        <motion.div
          className="flex items-center justify-center gap-5 max-md:gap-[15px] mb-10 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link, i) => (
            <span key={link} className="flex items-center">
              <motion.a className="text-white no-underline text-lg max-md:text-base font-semibold hover:text-[#E3E7C5] transition-all duration-300" whileHover={{ scale: 1.05 }} href="#">{link}</motion.a>
              {i < 4 && <span className="ml-5 text-white/30 font-light max-md:hidden">|</span>}
            </span>
          ))}
        </motion.div>

        {/* Row 3: Description */}
        <motion.div
          className="max-w-[800px] mx-auto mb-10 text-sm leading-[1.6] opacity-80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Built to help small businesses grow, <strong className="text-white font-semibold">Zellyo</strong> simplifies workflows and online presence. Usage is subject to our <strong className="text-white font-semibold">Terms & Conditions</strong> and <strong className="text-white font-semibold">Privacy Policy</strong>.
          </p>
        </motion.div>

        {/* Row 4: Copyright */}
        <div className="pt-[30px] pb-5 text-sm opacity-70">
          <p>© 2026 Zellyo | Powered by Zenorix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
