import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import heroCombined from '../../assets/image/hero-combined.png';
import logoHero from '../../assets/image/logo-hero.png';
import logoHero2 from '../../assets/image/logo-hero-2.png';

interface HeroProps {
    onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
    return (
        <section className="bg-gradient-to-b from-[#EBF3EF] to-white pt-[20vh] pb-0 relative overflow-hidden font-sans min-h-screen">
            <div className="max-w-[1280px] mx-auto px-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-15 relative z-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-zellyo-green rounded-full text-base font-bold text-zellyo-green mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <Zap size={18} className="text-amber-500" fill="currentColor" />
                        <span>Build Your Store. Your Way.</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[52px] leading-tight text-[#0E0E0E] font-bold tracking-tight mb-8 max-w-[900px] lg:text-[36px] md:text-[42px] max-md:text-[32px] max-md:px-2.5 font-samsung">
                        Launch a beautiful online store in minutes with Zellyo <br className="max-md:hidden" />
                        simple, fast, and built for creators.
                    </h1>

                    {/* Buttons */}
                    <motion.div
                        className="flex gap-4 max-md:w-full max-md:justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 rounded-full font-semibold text-base bg-[#E3E7C5] text-zellyo-green hover:-translate-y-0.5 transition-transform"
                        >
                            Book a Call
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 rounded-full font-semibold text-base bg-zellyo-green text-white hover:-translate-y-0.5 transition-transform"
                            onClick={onSignupClick}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Hero Visuals */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative w-full max-w-[1100px] mx-auto"
                >
                    {/* Background Decorative Logos */}
                    <img
                        src={logoHero}
                        alt=""
                        className="absolute w-[300px] opacity-50 pointer-events-none z-0 -left-[150px] top-[50px] -rotate-[15deg] lg:w-[300px] md:w-[200px] md:-left-[50px] md:top-0"
                    />
                    <img
                        src={logoHero2}
                        alt=""
                        className="absolute w-[300px] opacity-50 pointer-events-none z-0 -right-[150px] top-[100px] rotate-[15deg] lg:w-[300px] md:w-[200px] md:-right-[50px] md:top-[50px]"
                    />

                    {/* Mockups */}
                    <div className="relative w-full flex justify-center z-[1] pb-0">
                        <img
                            src={heroCombined}
                            alt="Dashboard Preview"
                            className="w-full h-auto rounded-[10px] block relative z-[1]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;