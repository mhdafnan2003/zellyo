import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Store, CreditCard, Smartphone, Layout } from 'lucide-react';

// Assets
const bgZellyoLogo = "/bg-logo-new.png";
const imgArrowLeft = "http://localhost:3845/assets/fbcc9b9305d6abaf1c7e36abb21fc74d87b6de2f.svg";
const imgArrowRight = "http://localhost:3845/assets/6fd2920efab2ab699a0e648f5f177455b1802b8d.svg";

const features = [
  {
    title: "Fast Store Setup",
    description: "Create and launch your store in just a few steps no tech skills needed.",
    icon: <Store size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-mobile.png",
  },
  {
    title: "Modern Templates",
    description: "Choose from clean, professional layouts designed for better shopping experiences.",
    icon: <Layout size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-mobile.png",
  },
  {
    title: "Smooth Checkout",
    description: "A simple, distraction-free checkout that helps you convert more customers.",
    icon: <CreditCard size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-mobile.png",
  },
  {
    title: "Mobile-Friendly Design",
    description: "Your store looks great on every device, automatically.",
    icon: <Smartphone size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-mobile.png",
  }
];

const MainFeatures = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 412; // Card width + gap
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="main-features">
      <div className="bg-watermark">
        <img src={bgZellyoLogo} alt="" />
      </div>

      <div className="container">
        <div className="features-header">
          <div className="header-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Designed for Effortless Selling
            </motion.h2>
          </div>

          <div className="header-right" style={{maxWidth:"32%"}}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From setup to checkout, Zellyo keeps everything simple and focused.
            </motion.p>


          </div>

        </div>
<div className="header-nav"style={{marginLeft:"89%"}}>
              <button className="nav-btn" onClick={() => scroll('left')} aria-label="Previous">
                <img src={imgArrowLeft} alt="" />
              </button>
              <button className="nav-btn" onClick={() => scroll('right')} aria-label="Next">
                <img src={imgArrowRight} alt="" />
              </button>
            </div>
        <div className="features-scroll-wrapper">
          <div className="features-track" ref={scrollContainerRef}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-top">
                  <div className="icon-badge">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

                <div className="card-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
              </motion.div>
            ))}
            <div className="scroll-spacer" />
          </div>
        </div>
      </div>

      <style>{`
        .main-features {
          background-color: #DDE3BD;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .bg-watermark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          pointer-events: none;
          z-index: 0;
        }

        .bg-watermark img {
          width: 100%;
          max-width: 1200px;
          height: auto;
          object-fit: contain;
          transform: translateY(-20px);
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
          position: relative;
          z-index: 1;
        }

        .features-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          gap: 20px;
        }

        .header-left {
          flex: 1;
        }

        .header-left h2 {
          font-size: 40px;
          font-weight: 700;
          color: #000000;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -1px;
          max-width: 450px;
        }

        .header-right {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-right p {
          font-size: 22px;
          color: #000000;
          line-height: 1.4;
          margin: 0;
          font-weight: 600;
          
        }

        .header-nav {
          display: flex;
          gap: 5px;
          padding-top: 1px;
        }

        .nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1.5px solid #000000;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: #000000;
        }

        .nav-btn img {
          width: 24px;
          filter: brightness(0);
        }

        .nav-btn:hover img {
          filter: invert(1);
        }

        .features-track {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          padding: 10px 0 20px;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        .features-track::-webkit-scrollbar {
          display: none;
        }

        .feature-card {
          flex: 0 0 380px;
          height: 560px;
          background-color: #0B3B2D;
          border-radius: 32px;
          padding: 40px 32px 0;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          scroll-snap-align: start;
        }

        .card-top {
          margin-bottom: 20px;
        }

        .icon-badge {
          width: 44px;
          height: 44px;
          background: #FFFFFF;
          border-radius: 12px; /* Matching the rounded-square look in some icon sets */
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .feature-card h3 {
          font-size: 26px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 12px;
          letter-spacing: -0.5px;
        }

        .feature-card p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0;
        }

        .card-image {
          margin-top: auto;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .card-image img {
          width: 90%;
          height: auto;
          object-fit: contain;
          border-radius: 16px 16px 0 0;
          transform: translateY(20px);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .header-right {
             flex-direction: column;
             gap: 24px;
          }
          .header-left h2 { font-size: 40px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 24px; }
          .features-header { flex-direction: column; }
          .feature-card { flex: 0 0 300px; height: 500px; }
        }
      `}</style>
    </section>
  );
};

export default MainFeatures;