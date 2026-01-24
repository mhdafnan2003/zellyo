import { motion } from 'framer-motion';
import { MousePointer2, Smartphone, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <MousePointer2 className="w-7 h-7" />,
    title: "Simple Store Builder",
    description: "Launch your store with our intuitive drag-and-drop editor. No coding required."
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile Optimized",
    description: "Your store looks beautiful on every device, ensuring a seamless shopping experience."
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Reach",
    description: "Sell to anyone, anywhere with built-in international shipping and tax support."
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Powerful Analytics",
    description: "Track your sales, visitors, and growth with detailed reports and insights."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-[120px] bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-zellyo-green font-bold uppercase tracking-[2px] text-sm">Premium Experience</span>
          <h2 className="text-5xl my-4 tracking-tight font-bold">Designed for Effortless Selling</h2>
          <p className="text-lg text-[#667085]">Everything you need to showcase, sell, and grow your products online.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-xl bg-[#F8FAF9] border border-[#E4E7EC] transition-all duration-300 hover:-translate-y-2.5 hover:border-[#B6D3C9] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-zellyo-green shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl mb-3 font-bold">{f.title}</h3>
              <p className="text-[#667085] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
