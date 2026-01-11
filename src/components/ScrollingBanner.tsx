import React from 'react';

const banners = [
    "Build your store fast.",
    "No code needed.",
    "Modern, clean templates.",
    "Launch in minutes.",
    "Sell your products online.",
];

const ScrollingBanner = () => {
    return (
        <div className="scrolling-banner-wrapper">
            <div className="scrolling-track">
                {/* Render multiple times to ensure enough length for seamless looping on large screens */}
                {[...banners, ...banners, ...banners, ...banners].map((text, index) => (
                    <div key={index} className="banner-item">
                        {text}
                    </div>
                ))}
            </div>

            <style>{`
        .scrolling-banner-wrapper {
          border-top: 1px solid #101828;
          border-bottom: 1px solid #101828;
          background: white;
          padding: 20px 0;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          z-index: 5; /* Ensure it sits nicely */
        }

        .scrolling-track {
          display: flex;
          gap: 60px;
          animation: scroll 40s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .banner-item {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.77);
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (prefers-reduced-motion: reduce) {
            .scrolling-track {
                animation: none;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                white-space: normal;
            }
        }
      `}</style>
        </div>
    );
};

export default ScrollingBanner;
