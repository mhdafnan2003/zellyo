import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const themeImage = 'src/assets/image/themedemo.png';

const ThemeSection = () => {
  // States to track hover for each row independently
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [isBottomHovered, setIsBottomHovered] = useState(false);

  const baseThemes = [1, 2, 3, 4].map((id) => ({
    id,
    title: 'Zenorix Premium',
    badge: 'free',
    image: themeImage,
  }));

  // Create a long enough track for infinite looping
  const marqueeItems = [...baseThemes, ...baseThemes, ...baseThemes, ...baseThemes];

  const ThemeCard = ({ theme }: { theme: { id: number; title: string; badge: string; image: string } }) => (
    <div className="theme-card">
      <div className="image-container">
        <img src={theme.image} alt={theme.title} />
      </div>
      <div className="card-footer">
        <h3 className="theme-title">{theme.title}</h3>
        <span className="theme-badge">free</span>
      </div>
    </div>
  );

  return (
    <section className="theme-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Sell online with ease</h2>
          <p className="subtitle">
            Launch your online store with powerful, ready-to-use themes
          </p>
        </div>

        {/* Row 1: Moves Left */}
        <div
          className="marquee-wrapper"
          onMouseEnter={() => setIsTopHovered(true)}
          onMouseLeave={() => setIsTopHovered(false)}
        >
          <motion.div
            className="marquee-track"
            animate={{ x: isTopHovered ? undefined : [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            <div className="track-inner">
              {marqueeItems.map((theme, index) => (
                <ThemeCard key={`top-${index}`} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div
          className="marquee-wrapper"
          onMouseEnter={() => setIsBottomHovered(true)}
          onMouseLeave={() => setIsBottomHovered(false)}
        >
          <motion.div
            className="marquee-track"
            animate={{ x: isBottomHovered ? undefined : [-1920, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            <div className="track-inner">
              {marqueeItems.map((theme, index) => (
                <ThemeCard key={`bottom-${index}`} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="section-footer">
          <button className="view-all-btn">
            view all <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .theme-section {
          padding: 80px 0;
          background-color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: #144534;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .subtitle {
          font-size: 18px;
          color: #6B7280;
          font-weight: 500;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          margin-bottom: 24px;
          cursor: pointer;
        }

        .marquee-track {
          display: flex;
          width: fit-content;
        }

        .track-inner {
          display: flex;
          gap: 32px;
          padding: 10px 0;
        }

        .theme-card {
          flex: 0 0 450px;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #F3F4F6;
        }

        .image-container {
          width: 100%;
          height: 280px;
          background: #f0f0f0;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-footer {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .theme-title {
          font-size: 17px;
          font-weight: 700;
          color: #1F2937;
          margin: 0;
        }

        .theme-badge {
          background-color: #144534;
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 20px;
        }

        .section-footer {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 30px;
          background: transparent;
          border: 2px solid #E5E7EB;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 800;
          color: #1F2937;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: lowercase;
        }

        .view-all-btn:hover {
          border-color: #144534;
          color: #144534;
          background-color: #f9fafb;
        }

        @media (max-width: 768px) {
          .theme-card { flex: 0 0 320px; }
          .image-container { height: 200px; }
        }
      `}</style>
    </section>
  );
};

export default ThemeSection;