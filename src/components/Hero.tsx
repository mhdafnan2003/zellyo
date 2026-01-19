import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import heroDesktop from '../assets/image/hero-desktop.png';
import heroMobile from '../assets/image/hero-mobile.png';
import logoHero from '../assets/image/logo-hero.png';
import logoHero2 from '../assets/image/logo-hero-2.png';

const Hero = () => {
    return (
        <section className="hero-section">


            {/* <div className="nav-container">
                <nav className="floating-nav">
                    <div className="nav-logo">
                       
                        <span className="logo-text">Zellyo</span>
                        <div className="logo-dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                    </ul>

                    <button className="nav-cta-btn">Get Started</button>
                </nav>
            </div> */}

            {/* 2. Hero Content */}
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-text-wrapper"
                >
                    {/* Badge */}
                    <div className="badge-pill">
                        <Zap size={18} className="icon-zap" fill="currentColor" />
                        <span>Build Your Store. Your Way.</span>
                    </div>

                    {/* Headline */}

                    <h1 style={{ fontFamily: '"Samsung Sharp Sans", sans-serif', fontSize: '2.3rem' }}>
                        Launch a beautiful online store in minutes with Zellyo <br className="desktop-break" />
                        simple, fast, and built for creators.
                    </h1>

                    {/* Buttons */}
                    <div className="hero-btns">
                        <button className="btn btn-beige">Book a Call</button>
                        <button className="btn btn-green">Get Started</button>
                    </div>
                </motion.div>

                {/* 3. Hero Visuals (Mockups + BG Logos) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visuals"
                >
                    {/* Background Decorative Logos */}
                    <img src={logoHero} alt="" className="bg-logo bg-left" />
                    <img src={logoHero2} alt="" className="bg-logo bg-right" />

                    {/* Mockups */}
                    <div className="mockup-container">
                        <img src={heroDesktop} alt="Desktop Dashboard" className="mockup-desktop" />
                        <img src={heroMobile} alt="Mobile App" className="mockup-mobile" />
                    </div>
                </motion.div>
            </div>

            <style>{`
                /* --- Base Layout --- */
                .hero-section {
                    background: linear-gradient(180deg, #EBF3EF 0%, #FFFFFF 100%);
                    padding-top: 20vh; /* Space for navbar */
                    padding-bottom: 0;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', sans-serif;
                    min-height: 100vh;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                /* --- Floating Navbar --- */
                .nav-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 80px;
                    padding: 0 20px;
                }

                .floating-nav {
                    background-color: #0F4C38;
                    width: 100%;
                    max-width: 900px;
                    height: 70px;
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 10px 0 30px;
                    box-shadow: 0 10px 30px rgba(15, 76, 56, 0.15);
                }

                .nav-logo {
                    display: flex;
                    flex-direction: column;
                    line-height: 1;
                    position: relative;
                }

                .logo-text {
                    font-family: 'cursive', sans-serif; /* Fallback for script font */
                    font-size: 24px;
                    color: #fff;
                    font-weight: 400;
                    font-style: italic;
                }
                
                .logo-dots {
                    display: flex;
                    gap: 4px;
                    margin-top: 2px;
                    justify-content: center;
                }

                .dot {
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                    border: 1px solid #0F4C38; /* Matches bg */
                }

                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 30px;
                    margin: 0;
                    padding: 0;
                }

                .nav-links li a {
                    text-decoration: none;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 15px;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .nav-links li a:hover {
                    color: #fff;
                }

                .nav-cta-btn {
                    background-color: #E3E7C5;
                    color: #0F4C38;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .nav-cta-btn:hover {
                    transform: scale(1.05);
                }

                /* --- Text Content --- */
                .hero-text-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 60px;
                    position: relative;
                    z-index: 10;
                }

                .badge-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 20px;
                    background: white;
                    border: 1px solid #0F4C38;
                    border-radius: 100px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #0F4C38;
                    margin-bottom: 24px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }

                .icon-zap {
                    color: #F59E0B; /* Amber/Gold color */
                }

                h1 {
                    font-size: 52px;
                    line-height: 1.2;
                    color: #0E0E0E;
                    font-weight: 700;
                    letter-spacing: -1px;
                    margin-bottom: 32px;
                    max-width: 900px;
                }

                .hero-btns {
                    display: flex;
                    gap: 16px;
                }

                .btn {
                    padding: 14px 32px;
                    border-radius: 100px;
                    font-weight: 600;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    transition: transform 0.2s ease;
                }

                .btn:hover {
                    transform: translateY(-2px);
                }

                .btn-beige {
                    background-color: #E3E7C5;
                    color: #0F4C38;
                }

                .btn-green {
                    background-color: #0F4C38;
                    color: white;
                }

                /* --- Visuals & Mockups --- */
                .hero-visuals {
                    position: relative;
                    width: 100%;
                    max-width: 1100px; /* Constrain width to keep side logos visible */
                    margin: 0 auto;
                }

                /* Background Logos */
                .bg-logo {
                    position: absolute;
                    width: 300px; 
                    opacity: 0.5; /* Subtle fade */
                    pointer-events: none;
                    z-index: 0;
                }

                .bg-left {
                    left: -150px;
                    top: 50px;
                    transform: rotate(-15deg);
                }

                .bg-right {
                    right: -150px;
                    top: 100px;
                    transform: rotate(15deg);
                }

                /* Images */
                .mockup-container {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center; /* Center the desktop img */
                    z-index: 1;
                    /* Padding bottom to allow mobile phone to hang off if needed */
                    padding-bottom: 0vh; 
                }

                .mockup-desktop {
                    width: 85%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    display: block;
                    position: relative;
                    z-index: 1;
                    
                }

                .mockup-mobile {
                    position: absolute;
                    width: 22%; /* Approx scale relative to desktop */
                    right: 8%; /* Adjust to overlap correctly */
                    bottom: -20px; /* Hangs slightly below */
                    z-index: 2;
                    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.25));
                }

                /* --- Responsive --- */
                @media (max-width: 1024px) {
                    .nav-links { display: none; } /* Hide links on tablet/mobile */
                    .floating-nav { justify-content: center; padding: 0; width: auto; min-width: 300px;}
                    .nav-logo { margin-right: auto; margin-left: 20px; }
                    .nav-cta-btn { margin-left: auto; margin-right: 10px; }
                    
                    h1 { font-size: 42px; }
                    .mockup-desktop { width: 100%; }
                    .bg-logo { width: 200px; }
                    .bg-left { left: -50px; top: 0; }
                    .bg-right { right: -50px; top: 50px; }
                }

                @media (max-width: 768px) {
                    .hero-section { padding-top: 20px; }
                    .nav-container { margin-bottom: 40px; }
                    
                    h1 { 
                        font-size: 32px; 
                        padding: 0 10px;
                    }
                    
                    .desktop-break { display: none; }
                    
                    .hero-btns {
                        width: 100%;
                        justify-content: center;
                    }

                    .mockup-container {
                        margin-top: 20px;
                    }

                    .mockup-mobile {
                        width: 35%; /* Larger relative size on mobile */
                        right: 0;
                        bottom: -10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;