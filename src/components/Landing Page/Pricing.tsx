import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// Asset path as per your project structure
import bgWatermark from '../../assets/image/pricingcardlogo.png';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Basic features',
        'Up to 10 products',
        'Community support',
        'Basic analytics',
        'Standard performance',
      ],
      isPopular: false,
    },
    // {
    //   name: 'Starter Plan',
    //   price: 49,
    //   description: 'Built for small businesses',
    //   features: [
    //     'All Free features',
    //     'Up to 100 products',
    //     'Email support',
    //     'Advanced analytics',
    //     'Better performance',
    //   ],
    //   isPopular: false,
    // },
    {
      name: 'Boost Plan',
      price: 100,
      description: 'Built for growing businesses',
      features: [
        'All Starter features',
        'Unlimited products',
        'Priority support',
        'Store analytics',
        'Premium performance',
      ],
      isPopular: true,
    },
    {
      name: 'Scale Plan',
      price: 100,
      description: 'Built for growing businesses',
      features: [
        'All Starter features',
        'Unlimited products',
        'Priority support',
        'Store analytics',
        'Better performance',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 px-5 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] font-sans font-bold text-[#0B3B2D] mb-3 tracking-[-1px]">Simple, transparent pricing</h2>
          <p className="text-[20px] text-[#6B7280] font-medium">
            Clear plans you can trust — start free and upgrade when you're ready.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <div className="flex justify-center bg-[#f3f4f6] w-fit mx-auto mb-[60px] p-1.5 rounded-[40px]">
          <button
            className={`px-7 py-2.5 rounded-[30px] border-none text-[13px] font-extrabold cursor-pointer transition-all duration-200 ${!isAnnual ? 'bg-[#0B3B2D] text-white' : 'bg-transparent text-[#9CA3AF]'}`}
            onClick={() => setIsAnnual(false)}
          >
            MONTHLY
          </button>
          <button
            className={`px-7 py-2.5 rounded-[30px] border-none text-[13px] font-extrabold cursor-pointer transition-all duration-200 ${isAnnual ? 'bg-[#0B3B2D] text-white' : 'bg-transparent text-[#9CA3AF]'}`}
            onClick={() => setIsAnnual(true)}
          >
            YEARLY
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center gap-6 items-stretch max-lg:flex-col max-lg:items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`flex-1 relative rounded-[40px] p-[60px_40px_40px] overflow-hidden transition-transform duration-300 flex flex-col max-lg:w-full max-lg:max-w-[400px] max-lg:scale-100! ${plan.isPopular ? 'bg-[#0B3B2D] text-white scale-[1.03] shadow-[0_20px_40px_rgba(11,59,45,0.2)]' : 'bg-white border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.03)]'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Watermark Logo */}
              <div className="absolute top-0 right-0 w-[80%] pointer-events-none z-0">
                <img
                  src={bgWatermark}
                  alt=""
                  className={`w-full h-auto translate-x-[20%] -translate-y-[10%] ${plan.isPopular ? 'brightness-100 opacity-100' : 'brightness-50 opacity-100'}`}
                />
              </div>

              {plan.isPopular && <div className="absolute top-[25px] right-[35px] bg-white text-[#0B3B2D] text-[11px] font-black p-[6px_14px] rounded-[20px] z-[2]">MOST POPULAR</div>}

              <div className="relative z-[1] h-full flex flex-col">
                <div className="flex items-baseline mb-2.5">
                  <span className="text-[38px] font-extrabold mr-1">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-[42px] font-semibold tracking-[-2px]"
                    >
                      {isAnnual ? plan.price * 10 : plan.price}
                    </motion.span>
                  </AnimatePresence>
                  <span className={`text-[16px] font-semibold ml-1 ${plan.isPopular ? 'text-white/70' : 'text-[#6B7280]'}`}>/month</span>
                </div>

                <h3 className="text-[24px] font-semibold mb-2">{plan.name}</h3>
                <p className={`text-[12.5px] font-semibold mb-10 ${plan.isPopular ? 'text-white/80' : 'text-[#6B7280]'}`}>{plan.description}</p>

                <ul className="list-none p-0 m-[0_0_40px_0] flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[14px] font-semibold mb-4">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full ${plan.isPopular ? 'bg-white/20 text-white' : 'bg-[#E5E7EB] text-[#4B5563]'}`}>
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full p-4 rounded-[40px] border-none text-[14px] font-extrabold cursor-pointer transition-all duration-200 ${plan.isPopular ? 'bg-white text-[#0B3B2D]' : 'bg-[#0B3B2D] text-white'}`}>Choose plan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;