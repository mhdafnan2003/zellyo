import { useRef } from 'react';
import { motion } from 'framer-motion';
// Assuming bgLogo is available in your project, otherwise remove or replace
import bgLogo from '../assets/image/large bg logo.png';

// Keep your existing asset constants
const imgMockup = "http://localhost:3845/assets/c1ab325a8363006ac04b039ac286614e8490f88b.png";
const imgArrowLeft = "http://localhost:3845/assets/fbcc9b9305d6abaf1c7e36abb21fc74d87b6de2f.svg";
const imgArrowRight = "http://localhost:3845/assets/6fd2920efab2ab699a0e648f5f177455b1802b8d.svg";
const imgStoreIcon = "http://localhost:3845/assets/e1f6184f01503de3bcd0c3a30b0e3e80c3eba305.svg";

const features = [
  {
    title: "Fast Store Setup",
    description: "Create and launch your store in just a few steps no tech skills needed.",
    image: imgMockup,
  },
  {
    title: "Modern Templates",
    description: "Choose from clean, professional layouts designed for better shopping experiences.",
    image: imgMockup,
  },
  {
    title: "Smooth Checkout",
    description: "A simple, distraction-free checkout that helps you convert more customers.",
    image: imgMockup,
  },
  {
    title: "Mobile-Friendly Design",
    description: "Your store looks great on every device, automatically.",
    image: imgMockup,
  }
];

const MainFeatures = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 350; // Width of card + gap

      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="main-features">
      {/* Background Decorative Logo */}
      <div className="bg-logo-overlay">
        <img src={bgLogo} alt="" />
      </div>

      <div className="container">
        <div className="features-header">
          <div className="header-left">
            <h2>Designed for Effortless Selling</h2>
          </div>
          <div className="header-right">
            <p>From setup to checkout, Zellyo keeps everything simple and focused.</p>
            <div className="header-nav">
              <button className="nav-btn" onClick={() => scroll('left')}>
                <img src={imgArrowLeft} alt="Previous" />
              </button>
              <button className="nav-btn" onClick={() => scroll('right')}>
                <img src={imgArrowRight} alt="Next" />
              </button>
            </div>
          </div>
        </div>

        <div className="features-scroll-wrapper">
          <div className="features-track" ref={scrollContainerRef}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-top">
                  <div className="icon-circle">
                    <img src={imgStoreIcon} alt="" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="card-bottom">
                  <img src={feature.image} alt={feature.title} className="mockup-img" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .main-features {
          background-color: #E3E7C5;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .bg-logo-overlay {
          position: absolute;
          top: -5%;
          left: 50%;
          transform: translateX(-50%) rotate(-10deg);
          width: 90%; 
          opacity: 0.08;
          pointer-events: none;
          z-index: 0;
        }

        .bg-logo-overlay img {
          width: 100%;
          height: auto;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* HEADER LAYOUT - Split Grid */
        .features-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
          align-items: start;
        }

        .header-left h2 {
          font-size: 48px;
          font-weight: 700;
          color: #0E0E0E;
          line-height: 1.1;
          margin: 0;
          max-width: 90%;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .header-right p {
          font-size: 20px;
          font-weight: 600;
          color: #0E0E0E;
          line-height: 1.4;
          margin: 0 0 30px 0;
          max-width: 500px;
        }

        .header-nav {
          display: flex;
          gap: 16px;
          justify-content: flex-end; /* Align buttons to the right */
        }

        .nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid #0E0E0E;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn img {
          width: 24px;
          height: 24px;
          transition: filter 0.3s ease;
        }

        .nav-btn:hover {
          background: #0E0E0E;
        }

        .nav-btn:hover img {
          filter: invert(1);
        }

        /* SCROLL CONTAINER */
        .features-scroll-wrapper {
          margin-right: -40px; /* Allow cards to peek off screen on right */
        }

        .features-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding-bottom: 20px;
          padding-right: 40px; /* Padding for the end of scroll */
          scrollbar-width: none; /* Firefox */
          scroll-behavior: smooth;
        }

        .features-track::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        /* CARDS */
        .feature-card {
          flex: 0 0 340px;
          background-color: #0F4C38;
          border-radius: 24px;
          padding: 32px 0 0 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          height: 520px; /* Fixed height for uniformity */
        }

        .card-top {
          padding: 0 32px;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .icon-circle img {
          width: 24px;
          height: 24px;
        }

        .feature-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .feature-card p {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8); /* Slightly transparent white */
          line-height: 1.5;
          margin: 0;
        }

        .card-bottom {
          margin-top: auto; /* Push image to bottom */
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        .mockup-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px 16px 0 0;
          box-shadow: 0px -10px 40px rgba(0,0,0,0.1);
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
           .features-header {
             grid-template-columns: 1fr;
             gap: 20px;
           }
           
           .header-nav {
             justify-content: flex-start;
           }
        }

        @media (max-width: 768px) {
          .header-left h2 {
            font-size: 32px;
          }
          
          .features-scroll-wrapper {
             margin-right: -20px;
          }
          
          .container {
             padding: 0 20px;
          }
          
          .feature-card {
             flex: 0 0 300px;
             height: 480px;
          }
        }
      `}</style>
    </section>
  );
};

export default MainFeatures;