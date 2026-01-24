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
    <div className="flex-[0_0_450px] max-md:flex-[0_0_320px] bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#F3F4F6]">
      <div className="w-full h-[280px] max-md:h-[200px] bg-[#f0f0f0]">
        <img src={theme.image} alt={theme.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 px-6 flex justify-between items-center">
        <h3 className="text-[17px] font-bold text-[#1F2937] m-0">{theme.title}</h3>
        <span className="bg-[#144534] text-white text-[13px] font-bold px-3.5 py-1.5 rounded-full uppercase">free</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container">
        <div className="text-center mb-[50px]">
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-[#144534] mb-3 tracking-[-1px]">Sell online with ease</h2>
          <p className="text-lg text-[#6B7280] font-medium">
            Launch your online store with powerful, ready-to-use themes
          </p>
        </div>

        {/* Row 1: Moves Left */}
        <div
          className="w-full overflow-hidden mb-6 cursor-pointer"
          onMouseEnter={() => setIsTopHovered(true)}
          onMouseLeave={() => setIsTopHovered(false)}
        >
          <motion.div
            className="flex w-fit"
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
            <div className="flex gap-8 py-2.5">
              {marqueeItems.map((theme, index) => (
                <ThemeCard key={`top-${index}`} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div
          className="w-full overflow-hidden mb-6 cursor-pointer"
          onMouseEnter={() => setIsBottomHovered(true)}
          onMouseLeave={() => setIsBottomHovered(false)}
        >
          <motion.div
            className="flex w-fit"
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
            <div className="flex gap-8 py-2.5">
              {marqueeItems.map((theme, index) => (
                <ThemeCard key={`bottom-${index}`} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-[30px]">
          <button className="flex items-center gap-2.5 p-[12px_30px] bg-transparent border-2 border-[#E5E7EB] rounded-[40px] text-base font-extrabold text-[#1F2937] cursor-pointer transition-all duration-300 lowercase hover:border-[#144534] hover:text-[#144534] hover:bg-gray-50">
            view all <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;