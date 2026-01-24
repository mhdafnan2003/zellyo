import { motion } from 'framer-motion';
import heroCombined from '../../assets/image/hero-combined.png';
import whatIsZellyo from '../../assets/image/what-is-zellyo.png';
import whyZellyoExists from '../../assets/image/why-zellyo-exists.png';

const About = () => {
    return (
        <section className="py-[120px] bg-white relative">
            <div className="max-w-[170vh] mx-auto px-10 relative z-[2]">

                {/* Header Section */}
                <div className="relative mb-[100px]">
                    <h2 className="absolute top-[-60px] left-1/2 -translate-x-1/2 font-sans font-extrabold text-[10vw] leading-none text-transparent [webkit-text-stroke:3px_#E5E5E5] whitespace-nowrap pointer-events-none z-0 opacity-60">
                        ABOUT ZELLYO
                    </h2>
                    <div className="flex justify-between items-start relative z-[1] gap-[60px] pt-[30px] max-w-full max-lg:flex-col max-lg:gap-[30px]">
                        <div className="flex-1 max-lg:text-center">
                            <h3 className="font-sans font-bold text-[42px] max-md:text-[32px] leading-[1.1] text-[#0E0E0E] m-0">
                                Feel the Best Store-Building Experience
                            </h3>
                        </div>

                        <div className="flex-1 max-lg:text-center">
                            <p className="font-sans text-[1.2rem] max-md:text-lg font-medium text-black leading-[1.5] m-0 text-justify max-lg:text-center">
                                Zellyo makes building your online store effortless and smooth, with a clean flow that takes you from idea to launch in minutes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards Container - Sticky Stack Wrapper */}
                <div className="flex flex-col gap-10 pb-[100px] w-full">

                    {/* Card 1: What is Zellyo */}
                    <div className="sticky top-[140px] h-auto z-[1]" style={{ top: 'calc(100px + (1 * 40px))' }}>
                        <motion.div
                            className="rounded-[32px] p-[60px_60px_0_60px] max-md:p-[40px_30px_0_30px] min-h-[550px] max-md:min-h-[450px] overflow-hidden relative flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.05)] bg-[#0F4C38] text-white"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-[100%] mb-10 pl-[5vh] max-lg:pl-0">
                                <h4 className="font-sans font-bold text-[48px] max-lg:text-[36px] m-[0_0_20px_0] leading-[1.1]">What Is Zellyo?</h4>
                                <p className="font-sans text-[1.2rem] max-md:text-lg leading-[1.6] opacity-90 max-w-[990px] text-justify font-medium">
                                    Zellyo is a simple online store builder that helps anyone create and launch a clean, modern e-commerce website—without coding or complexity. It’s built for beginners, creators, and small businesses who want to start selling quickly.
                                </p>
                            </div>
                            <div className="mt-auto w-full flex justify-center relative -bottom-[5px]">
                                <img className="w-[80%] max-lg:w-[90%] h-auto block rounded-[16px_16px_0_0]" src={whatIsZellyo} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 2: Why Zellyo Exists */}
                    <div className="sticky top-[180px] h-auto z-[2]" style={{ top: 'calc(100px + (2 * 40px))' }}>
                        <motion.div
                            className="rounded-[32px] p-[60px_60px_0_60px] max-md:p-[40px_30px_0_30px] min-h-[550px] max-md:min-h-[450px] overflow-hidden relative flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.05)] bg-[#E3E7C5] text-[#0F4C38]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-[100%] mb-10 pl-[5vh] max-lg:pl-0">
                                <h4 className="font-sans font-bold text-[48px] max-lg:text-[36px] m-[0_0_20px_0] leading-[1.1]">Why Zellyo Exists</h4>
                                <p className="font-sans text-[1.2rem] max-md:text-lg leading-[1.6] opacity-90 max-w-[990px] text-justify font-medium text-[#0F4C38]">
                                    Most platforms feel overloaded and confusing. Zellyo focuses on clarity and speed. A few templates, easy steps, and a smooth flow—so you can launch your store without stress or technical skills.
                                </p>
                            </div>
                            <div className="mt-auto w-full flex justify-center relative -bottom-[5px]">
                                <img className="w-[80%] max-lg:w-[90%] h-auto block rounded-[16px_16px_0_0]" src={whyZellyoExists} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 3: What You Get */}
                    <div className="sticky top-[220px] h-auto z-[3]" style={{ top: 'calc(100px + (3 * 40px))' }}>
                        <motion.div
                            className="rounded-[32px] p-[60px_60px_0_60px] max-md:p-[40px_30px_0_30px] min-h-[550px] max-md:min-h-[450px] overflow-hidden relative flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.05)] bg-[#0F4C38] text-white"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-[100%] mb-10 pl-[5vh] max-lg:pl-0">
                                <h4 className="font-sans font-bold text-[48px] max-lg:text-[36px] m-[0_0_20px_0] leading-[1.1]">What You Get</h4>
                                <p className="font-sans text-[1.2rem] max-md:text-lg leading-[1.6] opacity-90 max-w-[990px] text-justify font-medium">
                                    A ready-to-use store layout, essential e-commerce features, mobile-friendly design, and a clean user experience. Zellyo gives you exactly what you need to start selling—nothing extra, nothing overwhelming.
                                </p>
                            </div>
                            <div className="mt-auto w-full flex justify-center relative -bottom-[5px]">
                                <img className="w-[80%] max-lg:w-[90%] h-auto block rounded-[16px_16px_0_0]" src={heroCombined} alt="Dashboard Preview" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;