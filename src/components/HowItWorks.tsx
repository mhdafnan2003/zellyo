import { motion } from 'framer-motion';
// Using the same mockup image source
import macbookMockup from '../assets/image/hero-desktop.png';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Choose a Template",
            items: [
                "Choose from clean, modern designs",
                "Built for easy reading and smooth shopping",
                "Optimized for all devices",
                "Ready to use — no setup required"
            ],
            bgColor: "#FFFFFF", // White
            textColor: "#0E0E0E",
            bulletColor: "#0E0E0E",
            image: macbookMockup
        },
        {
            number: 2,
            title: "Add Your Products",
            items: [
                "Upload images and pricing",
                "Write simple product details",
                "Organize items easily",
                "Preview everything as you go"
            ],
            bgColor: "#0F4C38", // Dark Green
            textColor: "#FFFFFF",
            bulletColor: "#FFFFFF",
            image: macbookMockup
        },
        {
            number: 3,
            title: "Set Up Basics",
            items: [
                "Add your store name and info",
                "Connect payment options",
                "Set delivery or contact details",
                "Adjust essential settings only"
            ],
            bgColor: "#E3E7C5", // Beige
            textColor: "#0F4C38",
            bulletColor: "#0F4C38",
            image: macbookMockup
        },
        {
            number: 4,
            title: "Launch Your Store",
            items: [
                "Publish with one click",
                "Share your store link instantly",
                "Start accepting orders",
                "Update anytime as you grow"
            ],
            bgColor: "#D4D4D4", // Light Gray (as per design image)
            textColor: "#0E0E0E",
            bulletColor: "#0E0E0E",
            image: macbookMockup
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="container">

                {/* Header Section */}
                <div className="how-header">
                    <h2 className="bg-text-outline">HOW ZELLYO WORKS</h2>
                    <div className="header-flex">
                        <div className="header-left">
                            <h3>Your Store in a Few Easy Steps</h3>
                        </div>
                        <div className="header-right">
                            <p>No clutter. No confusion. Just a clean path to your store.</p>
                        </div>
                    </div>
                </div>

                {/* Sticky Steps Container */}
                <div className="steps-stack-wrapper">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-sticky-container"
                            style={{
                                '--index': index,
                                zIndex: index + 1
                            } as React.CSSProperties}
                        >
                            <motion.div
                                className="step-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    backgroundColor: step.bgColor,
                                    color: step.textColor
                                }}
                            >
                                {/* Left Side: Image */}
                                <div className="step-image-wrapper">
                                    <div className="img-box">
                                        <img src={step.image} alt={step.title} />
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="step-content">
                                    <h4>Step {step.number} — {step.title}</h4>
                                    <ul style={{ '--bullet-color': step.bulletColor } as React.CSSProperties}>
                                        {step.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .how-it-works-section {
                    padding: 120px 0;
                    background-color: #FFFFFF;
                    position: relative;
                    overflow: visible; /* Important for sticky to work */
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 40px;
                    position: relative;
                }

                /* --- Header Styles --- */
                .how-header {
                    position: relative;
                    margin-bottom: 80px;
                    padding-top: 40px;
                }

                .bg-text-outline {
                    position: absolute;
                    top: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-family: 'Inter', sans-serif;
                    font-weight: 900;
                    font-size: 8vw; 
                    color: transparent; 
                    -webkit-text-stroke: 1.2px #E5E5E5; 
                    white-space: nowrap;
                    z-index: 0;
                    pointer-events: none;
                }

                .header-flex {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    position: relative;
                    z-index: 1;
                    padding: 0 20px;
                }

                .header-left h3 {
                    font-family: 'Inter', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    color: #0E0E0E;
                    max-width: 500px;
                    line-height: 1.1;
                    margin: 0;
                }

                .header-right p {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    color: #0E0E0E;
                    max-width: 350px;
                    line-height: 1.5;
                    margin: 0;
                    text-align: right;
                }

                /* --- Sticky Stacking Logic --- */
                .steps-stack-wrapper {
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 100px; /* Space at bottom of section */
                }

                .step-sticky-container {
                    position: sticky;
                    /* Logic: Base Top (120px) + (Index * Gap).
                       This creates the "Stacked Deck" look where you see top of previous cards.
                    */
                    top: calc(120px + (var(--index) * 20px)); 
                    margin-bottom: 40px; /* Vertical gap between cards in flow */
                    height: auto;
                }

                /* --- Card Design --- */
                .step-card {
                    display: flex;
                    align-items: center;
                    padding: 50px;
                    border-radius: 32px;
                    min-height: 500px; /* Consistent height for smooth stacking */
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                    gap: 50px;
                    overflow: hidden;
                    /* Ensure card fills the container width */
                    width: 100%;
                    box-sizing: border-box;
                }

                /* Left: Image */
                .step-image-wrapper {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .img-box {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                    overflow: hidden;
                    /* Use background to match mockup grey placeholder if image fails */
                    background: rgba(0,0,0,0.05); 
                    display: flex;
                }

                .img-box img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    display: block;
                }

                /* Right: Content */
                .step-content {
                    flex: 1;
                }

                .step-content h4 {
                    font-family: 'Inter', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    margin: 0 0 30px 0;
                    line-height: 1.2;
                }

                .step-content ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .step-content ul li {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 16px;
                    padding-left: 24px;
                    position: relative;
                    line-height: 1.5;
                }

                /* Bullet Customization */
                .step-content ul li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--bullet-color);
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 24px;
                    top: -2px;
                }

                /* --- Responsive --- */
                @media (max-width: 1024px) {
                    .header-flex {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }
                    .header-right p {
                        text-align: left;
                    }
                    .bg-text-outline {
                        font-size: 14vw;
                        top: -30px;
                    }
                    .step-card {
                        padding: 40px;
                        gap: 30px;
                    }
                }

                @media (max-width: 768px) {
                    .step-sticky-container {
                        /* Reduce sticky offset on mobile to save screen space */
                        top: calc(100px + (var(--index) * 10px));
                    }

                    .step-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 30px;
                        min-height: auto;
                    }

                    .step-image-wrapper {
                        width: 100%;
                        margin-bottom: 20px;
                    }

                    .step-content ul li {
                        text-align: left;
                        display: inline-block;
                    }
                    
                    /* Align bullets nicely even when centered */
                    .step-content ul {
                        display: inline-block;
                        text-align: left;
                    }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;