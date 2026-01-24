import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Store, CreditCard, Smartphone, Layout, ChevronLeft, ChevronRight } from 'lucide-react';

const bgZellyoLogo = "/bg-logo-new.png";

const features = [
  {
    title: "Fast Store Setup",
    description: "Create and launch your store in just a few steps no tech skills needed.",
    icon: <Store size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-combined.png",
  },
  {
    title: "Modern Templates",
    description: "Choose from clean, professional layouts designed for better shopping experiences.",
    icon: <Layout size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-combined.png",
  },
  {
    title: "Smooth Checkout",
    description: "A simple, distraction-free checkout that helps you convert more customers.",
    icon: <CreditCard size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-combined.png",
  },
  {
    title: "Mobile-Friendly Design",
    description: "Your store looks great on every device, automatically.",
    icon: <Smartphone size={20} strokeWidth={2.5} className="text-[#0B3B2D]" />,
    image: "/src/assets/image/hero-combined.png",
  }
];

const MainFeatures = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 412;
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
    <section className="bg-[#DDE3BD] py-25 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-100 pointer-events-none z-0">
        <img src={bgZellyoLogo} alt="" className="w-full max-w-[1200px] h-auto object-contain -translate-y-5" />
      </div>

      <div className="max-w-[1440px] mx-auto px-15 relative z-[1]">
        <div className="flex justify-between items-start mb-2.5 gap-5 max-lg:flex-col">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[40px] font-bold text-black leading-tight m-0 tracking-tight max-w-[450px]"
            >
              Designed for Effortless Selling
            </motion.h2>
          </div>

          <div className="flex-1 flex justify-between items-start max-w-[32%] max-lg:max-w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[22px] text-black leading-snug m-0 font-semibold"
            >
              From setup to checkout, Zellyo keeps everything simple and focused.
            </motion.p>
          </div>
        </div>

        <div className="flex gap-1.5 pt-px ml-[89%] max-lg:ml-0 max-lg:justify-end">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="w-14 h-14 rounded-full border-[1.5px] border-black bg-transparent flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black group"
          >
            <ChevronLeft className="w-6 h-6 text-black group-hover:text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next"
            className="w-14 h-14 rounded-full border-[1.5px] border-black bg-transparent flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black group"
          >
            <ChevronRight className="w-6 h-6 text-black group-hover:text-white" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto py-2.5 pb-5 scrollbar-none scroll-smooth snap-x snap-mandatory"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_380px] h-[560px] bg-[#0B3B2D] rounded-[32px] p-10 pt-10 pb-0 flex flex-col relative overflow-hidden snap-start max-md:flex-[0_0_300px] max-md:h-[500px]"
              >
                <div className="mb-5">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-[26px] font-bold text-white m-0 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-base text-white/80 leading-relaxed m-0">{feature.description}</p>
                </div>

                <div className="mt-auto w-full flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-[90%] h-auto object-contain rounded-t-2xl translate-y-5"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;