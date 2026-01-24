import { motion } from 'framer-motion';

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
        bgColor: "bg-white",
        textColor: "text-black",
        imageBg: "bg-[#D9D9D9]",
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
        bgColor: "bg-[#144534]",
        textColor: "text-white",
        imageBg: "bg-[#D9D9D9]",
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
        bgColor: "bg-[#E3E7C5]",
        textColor: "text-black",
        imageBg: "bg-[#D9D9D9]",
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
        bgColor: "bg-white",
        textColor: "text-black",
        imageBg: "bg-[#D9D9D9]",
    }
];

const HowItWorks = () => {
    return (
        <section className="relative bg-white font-sans">
            {/* Outline Watermark Title */}
            <div className="absolute top-5 left-0 w-full flex justify-center z-0 pointer-events-none">
                <h2 className="text-[clamp(60px,7.5vw,150px)] font-black text-transparent [webkit-text-stroke:1.5px_#E5E5E5] uppercase whitespace-nowrap m-0 opacity-60 tracking-[2px]">
                    HOW ZELLYO WORKS
                </h2>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-end p-[120px_80px_0px] max-w-[1440px] mx-auto max-md:p-[80px_30px_20px] max-md:flex-col max-md:gap-5">
                    <motion.h3
                        className="text-[32px] max-md:text-[24px] font-bold text-black m-0 max-w-[450px] leading-[1.1] text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Your Store in a Few Easy Steps
                    </motion.h3>
                    <motion.p
                        className="text-[20px] font-bold text-black max-w-[450px] m-0 leading-[1.3] text-left"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        No clutter. No confusion. Just a clean path to your store.
                    </motion.p>
                </div>
            </div>

            {/* Steps List */}
            <div className="flex flex-col">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`w-full min-h-screen sticky top-0 flex items-center justify-center ${index === 0 ? 'shadow-none' : 'shadow-[0_-10px_30px_rgba(0,0,0,0.05)]'} ${step.bgColor} ${step.textColor}`}
                        style={{
                            zIndex: index + 1
                        }}
                    >
                        <motion.div
                            className="w-full max-w-[1280px] mx-auto flex items-center justify-center gap-[100px] max-lg:gap-[50px] px-[60px] max-md:flex-col max-md:text-left max-md:p-[120px_30px_60px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            {/* Left Side: Mockup Image */}
                            <div className="flex-1 flex justify-center w-full">
                                <motion.div
                                    className={`w-full max-w-[520px] max-md:max-w-[400px] aspect-square rounded-[40px] max-md:rounded-[24px] transition-transform duration-300 ${step.imageBg}`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                </motion.div>
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <motion.h4
                                    className="text-[36px] max-md:text-[28px] font-extrabold m-[0_0_30px_0] tracking-[-1px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Step {step.number} — {step.title}
                                </motion.h4>
                                <ul className="list-none p-0 m-0">
                                    {step.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="text-[20px] font-bold mb-4 relative pl-[30px] leading-[1.2] before:content-['•'] before:absolute before:left-0 before:text-[28px] before:leading-none before:top-[-2px]"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;