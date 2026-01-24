
const banners = [
  "Build your store fast.",
  "No code needed.",
  "Modern, clean templates.",
  "Launch in minutes.",
  "Sell your products online.",
];

const ScrollingBanner = () => {
  return (
    <div className="border-t border-b border-[#101828] bg-white py-5 overflow-hidden whitespace-nowrap relative z-5">
      <div className="flex gap-[60px] animate-scroll w-max will-change-transform motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-5 motion-reduce:whitespace-normal">
        {/* Render multiple times to ensure enough length for seamless looping on large screens */}
        {[...banners, ...banners, ...banners, ...banners].map((text, index) => (
          <div key={index} className="font-sans font-bold text-base text-black/80 shrink-0">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
