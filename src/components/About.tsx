import { motion } from 'framer-motion';
import heroDesktop from '../assets/image/hero-desktop.png';

const About = () => {
    return (
        <section className="about-zellyo-section">
            <div className="container">

                {/* Header Section */}
                <div className="about-header">
                    <h2 className="bg-text">ABOUT ZELLYO</h2>
                    <div className="header-content">
                        <div className="header-left">
                            <h3 style={{ fontSize: '2rem' }}>Feel the Best Store-Building Experience</h3>
                        </div>

                        <div className="header-right">
                            <p style={{ textAlign: 'justify', fontSize: '1.2rem', lineHeight: '1.2rem', maxWidth: '100%' }}>Zellyo makes building your online store effortless and smooth, with a clean flow that takes you from idea to launch in minutes.</p>
                        </div>
                    </div>
                </div>

                {/* Cards Container - Sticky Stack Wrapper */}
                <div className="cards-stack-wrapper" style={{ maxWidth: '100%' }}>

                    {/* Card 1: What is Zellyo */}
                    <div className="sticky-card-container" style={{ '--index': 1 } as React.CSSProperties}>
                        <motion.div
                            className="feature-card dark-green"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="card-content" style={{ paddingLeft: '15vh' }}>
                                <h4>What Is Zellyo?</h4>
                                <p style={{ maxWidth: '100%', textAlign: 'justify', fontSize: '1.2rem', lineHeight: '1.2rem', fontWeight: '500' }}>Zellyo is a simple online store builder that helps anyone create and launch a clean, modern e-commerce website—without coding or complexity. It’s built for beginners, creators, and small businesses who want to start selling quickly.</p>
                            </div>
                            <div className="card-image-bottom">
                                <img src={heroDesktop} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 2: Why Zellyo Exists */}
                    <div className="sticky-card-container" style={{ '--index': 2 } as React.CSSProperties}>
                        <motion.div
                            className="feature-card beige"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="card-content" style={{ paddingLeft: '15vh' }}>
                                <h4>Why Zellyo Exists</h4>
                                <p style={{ maxWidth: '100%', textAlign: 'justify', fontSize: '1.2rem', lineHeight: '1.2rem', fontWeight: '500', color: '#0F4C38' }}>Most platforms feel overloaded and confusing. Zellyo focuses on clarity and speed. A few templates, easy steps, and a smooth flow—so you can launch your store without stress or technical skills.</p>
                            </div>
                            <div className="card-image-bottom">
                                <img src={heroDesktop} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 3: What You Get */}
                    <div className="sticky-card-container" style={{ '--index': 3 } as React.CSSProperties}>
                        <motion.div
                            className="feature-card dark-green"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="card-content" style={{ paddingLeft: '15vh' }}>
                                <h4>What You Get</h4>
                                <p style={{ maxWidth: '100%', textAlign: 'justify', fontSize: '1.2rem', lineHeight: '1.2rem', fontWeight: '500' }}>A ready-to-use store layout, essential e-commerce features, mobile-friendly design, and a clean user experience. Zellyo gives you exactly what you need to start selling—nothing extra, nothing overwhelming.</p>
                            </div>
                            <div className="card-image-bottom">
                                <img src={heroDesktop} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`
                .about-zellyo-section {
                    padding: 120px 0;
                    background-color: white;
                    position: relative;
                }

                .container {
                    max-width: 110vh;
                    margin: 0 auto;
                    padding: 0 40px;
                    position: relative;
                    z-index: 2;
                }

                /* --- Header Styling --- */
                .about-header {
                    position: relative;
                    margin-bottom: 100px;
                }

                .bg-text {
                    position: absolute;
                    top: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-family: 'Inter', sans-serif;
                    font-weight: 800;
                    font-size: 10vw; 
                    line-height: 1;
                    color: transparent; 
                    -webkit-text-stroke: 3px #E5E5E5; 
                    white-space: nowrap;
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0.6;
                }

                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    position: relative;
                    z-index: 1;
                    gap: 60px;
                    padding-top: 30px;
                    max-width: 100%;
                
                }

                .header-left h3 {
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    font-size: 42px; 
                    line-height: 1.1;
                    color: #0E0E0E;
                    margin: 0;
                    
                }

                .header-left {
                    flex: 1;
                }

                .header-right {
                    flex: 1;
                }

                .header-right p {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 500; 
                    color:rgb(0, 0, 0); 
                    line-height: 1.5;
                    margin-top: 5px;
                    max-width: 110vh;
                    padding: 0;
                    margin: 0;
                }

                /* --- Sticky Stacking Logic --- */
                .cards-stack-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 40px; /* Distance between cards in flow */
                    padding-bottom: 100px;
                }

                .sticky-card-container {
                    position: sticky;
                    /* This creates the stack effect. 
                       Card 1 sticks at 120px. 
                       Card 2 sticks at 160px (covering 1). 
                       Card 3 sticks at 200px (covering 2). 
                    */
                    top: calc(100px + (var(--index) * 40px));
                    height: auto; 
                }

                .feature-card {
                    border-radius: 32px;
                    padding: 60px 60px 0 60px; /* No bottom padding, image sits flush */
                    min-height: 550px;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 -20px 60px rgba(0,0,0,0.05); /* Subtle shadow for depth */
                }

                .feature-card.dark-green {
                    background-color: #0F4C38;
                    color: white;
                }

                .feature-card.beige {
                    background-color: #E3E7C5;
                    color: #0F4C38;
                }

                /* --- Card Content --- */
                .card-content {
                    max-width: 90%;
                    margin-bottom: 40px;
                }
                
                
                .feature-card h4 {
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    font-size: 48px;
                    margin: 0 0 20px 0;
                    line-height: 1.1;
                }

                .feature-card p {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    line-height: 1.6;
                    opacity: 0.9;
                    max-width: 990px;
                }

                /* --- Card Images --- */
                .card-image-bottom {
                    margin-top: auto;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    bottom: -5px; /* Push slighty down to hide bottom radius of img if needed */
                }

                .card-image-bottom img {
                    width: 80%;
                    height: auto;
                    display: block;
                    border-radius: 16px 16px 0 0;
                    box-shadow: 0 -10px 40px rgba(0,0,0,0.15);
                }

                /* --- Responsive --- */
                @media (max-width: 1024px) {
                    .header-content {
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .bg-text {
                        top: 0;
                        font-size: 120px;
                    }

                    .feature-card h4 {
                        font-size: 36px;
                    }
                    
                    .card-image-bottom img {
                        width: 90%;
                    }
                }

                @media (max-width: 768px) {
                    .about-header {
                        text-align: center;
                    }

                    .header-content {
                        align-items: center;
                    }
                    
                    .header-left h3, .header-right p {
                        text-align: center;
                    }

                    .feature-card {
                        padding: 40px 30px 0 30px;
                        min-height: 450px;
                    }

                    /* On mobile, usually better to disable sticky or reduce top offset */
                    .sticky-card-container {
                        top: calc(80px + (var(--index) * 20px));
                    }
                }
            `}</style>
        </section>
    );
};

export default About;