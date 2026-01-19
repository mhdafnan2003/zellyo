
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
        bgColor: "#FFFFFF",
        textColor: "#000000",
        imageBg: "#D9D9D9",
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
        bgColor: "#144534",
        textColor: "#FFFFFF",
        imageBg: "#D9D9D9",
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
        bgColor: "#E3E7C5",
        textColor: "#000000",
        imageBg: "#D9D9D9",
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
        bgColor: "#FFFFFF",
        textColor: "#000000",
        imageBg: "#D9D9D9",
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            {/* Outline Watermark Title */}
            <div className="watermark-container">
                <h2 className="outline-text">HOW ZELLYO WORKS</h2>
            </div>

            <div className="content-container">
                {/* Header Section */}
                <div className="section-header">
                    <h3 className="header-title">Your Store in a Few Easy Steps</h3>
                    <p className="header-desc">
                        No clutter. No confusion. Just a clean path to your store.
                    </p>
                </div>
            </div>

            {/* Steps List */}
            <div className="steps-list">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step-row ${index === 0 ? 'first-step' : ''}`}
                        style={{
                            backgroundColor: step.bgColor,
                            color: step.textColor,
                            zIndex: index + 1
                        }}
                    >
                        <div className="step-inner">
                            {/* Left Side: Mockup Image */}
                            <div className="image-column">
                                <div
                                    className="mockup-placeholder"
                                    style={{ backgroundColor: step.imageBg }}
                                >
                                    {/* <img src={...} alt={step.title} /> */}
                                </div>
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="text-column">
                                <h4 className="step-heading">
                                    Step {step.number} — {step.title}
                                </h4>
                                <ul className="step-items">
                                    {step.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .how-it-works {
                    position: relative;
                    background-color: #ffffffff;
                    font-family: 'Inter', sans-serif;
                }

                /* Watermark Styling - Top Centered */
                .watermark-container {
                    position: absolute;
                    top: 20px;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    z-index: 0;
                    pointer-events: none;
                }

                .outline-text {
                    font-size: clamp(60px, 7.5vw, 150px);
                    font-weight: 900;
                    color: transparent;
                    -webkit-text-stroke: 1.5px #E5E5E5;
                    text-transform: uppercase;
                    white-space: nowrap;
                    margin: 0;
                    opacity: 0.6;
                    letter-spacing: 2px;
                }

                .content-container {
                    position: relative;
                    z-index: 10;
                    max-width: 1440px;
                    margin: 0 auto;
                }

                /* Header Styling */
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding: 120px 80px 0px;
                    max-width: 1440px;
                    margin: 0 auto;
                }

                .header-title {
                    font-size: 32px;
                    font-weight: 700;
                    color: #000000;
                    margin: 0;
                    max-width: 450px;
                    line-height: 1.1;
                    text-align: left;
                }

                .header-desc {
                    font-size: 20px;
                    font-weight: 700;
                    color: #000000;
                    max-width: 450px;
                    margin: 0;
                    line-height: 1.3;
                    text-align: left;
                }

                /* Sticky Step Rows */
                .step-row {
                    width: 100%;
                    min-height: 100vh;
                    position: sticky;
                    top: 0;
                    display: flex;
                    align-items: center; /* Vertically centers the step-inner */
                    justify-content: center;
                    box-shadow: 0 -10px 30px rgba(0,0,0,0.05);
                }

                .step-row.first-step {
                    box-shadow: none;
                }

                .step-inner {
                    width: 100%;
                    max-width: 1280px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center; /* Centers image and text relative to each other */
                    justify-content: center;
                    gap: 100px; /* Spacing between image and text */
                    padding: 0 60px;
                }

                /* Image Column Layout */
                .image-column {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .mockup-placeholder {
                    width: 100%;
                    max-width: 520px;
                    aspect-ratio: 1 / 1;
                    border-radius: 40px;
                    transition: transform 0.3s ease;
                }

                /* Text Column Layout */
                .text-column {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .step-heading {
                    font-size: 36px;
                    font-weight: 800;
                    margin: 0 0 30px 0;
                    letter-spacing: -1px;
                }

                .step-items {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .step-items li {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 16px;
                    position: relative;
                    padding-left: 30px;
                    line-height: 1.2;
                }

                .step-items li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    font-size: 28px;
                    line-height: 1;
                    top: -2px;
                }

                /* Mobile Responsive Adjustments */
                @media (max-width: 1024px) {
                    .step-inner { gap: 50px; }
                    .header-title { font-size: 24px; }
                    .step-heading { font-size: 28px; }
                }

                @media (max-width: 768px) {
                    .step-inner { 
                        flex-direction: column; 
                        text-align: left; 
                        padding: 120px 30px 60px;
                    }
                    .step-row { 
                        min-height: auto; 
                        position: relative; 
                    }
                    .image-column { width: 100%; }
                    .mockup-placeholder { max-width: 400px; border-radius: 24px; }
                    .section-header { padding: 80px 30px 20px; flex-direction: column; gap: 20px; }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;