import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Free",
      price: billingCycle === 'monthly' ? "0" : "0",
      description: "Built for growing businesses",
      features: [
        "All Starter features",
        "Unlimited products",
        "Priority support",
        "Store analytics",
        "Better performance"
      ],
      btnText: "Choose plan",
      popular: false,
      variant: "white"
    },
    {
      name: "Growth Plan",
      price: billingCycle === 'monthly' ? "100" : "80",
      description: "Built for growing businesses",
      features: [
        "All Starter features",
        "Unlimited products",
        "Priority support",
        "Store analytics",
        "Better performance"
      ],
      btnText: "Choose plan",
      popular: true,
      variant: "dark"
    },
    {
      name: "Heavy Plan",
      price: billingCycle === 'monthly' ? "180" : "150",
      description: "Built for growing businesses",
      features: [
        "All Starter features",
        "Unlimited products",
        "Priority support",
        "Store analytics",
        "Better performance"
      ],
      btnText: "Choose plan",
      popular: false,
      variant: "white"
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        {/* Header Section */}
        <div className="pricing-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Clear plans you can trust — start free and upgrade when you're ready.
          </motion.p>
        </div>

        {/* Toggle Section */}
        <div className="toggle-wrapper">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              MONTHLY
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              YEARLY
            </button>
            <div
              className="toggle-slider"
              style={{
                left: billingCycle === 'monthly' ? '4px' : 'calc(50% + 2px)',
                width: 'calc(50% - 6px)'
              }}
            />
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.variant} ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              {/* Watermark Logo */}
              <div className="card-watermark">Zellyo</div>

              <div className="card-top">
                <div className="price-box">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="card-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={20} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-bottom">
                <button className={`btn-plan ${plan.variant === 'dark' ? 'btn-white' : 'btn-dark'}`}>
                  {plan.btnText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
                .pricing-section {
                    padding: 100px 0;
                    background-color: #FFFFFF;
                    position: relative;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* Header */
                .pricing-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .pricing-header h2 {
                    font-family: 'Inter', sans-serif;
                    font-size: 48px;
                    font-weight: 800;
                    color: #0F4C38;
                    margin-bottom: 20px;
                }

                .pricing-header p {
                    font-family: 'Inter', sans-serif;
                    font-size: 20px;
                    color: #696969;
                    font-weight: 500;
                }

                /* Toggle */
                .toggle-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 80px;
                }

                .toggle-container {
                    background: #F2F4F7;
                    padding: 4px;
                    border-radius: 100px;
                    display: flex;
                    position: relative;
                    width: 240px;
                    height: 54px;
                }

                .toggle-btn {
                    flex: 1;
                    border: none;
                    background: none;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    color: #667085;
                    cursor: pointer;
                    z-index: 2;
                    transition: color 0.3s ease;
                }

                .toggle-btn.active {
                    color: #FFFFFF;
                }

                .toggle-slider {
                    position: absolute;
                    top: 4px;
                    bottom: 4px;
                    background: #0F4C38;
                    border-radius: 100px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1;
                }

                /* Grid & Cards */
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    align-items: center;
                }

                .pricing-card {
                    padding: 50px 40px;
                    border-radius: 32px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    min-height: 550px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                    border: 1px solid #F2F4F7;
                }

                .pricing-card.white {
                    background: #FFFFFF;
                    color: #0E0E0E;
                }

                .pricing-card.dark {
                    background: #0F4C38;
                    color: #FFFFFF;
                    transform: scale(1.05);
                    box-shadow: 0 20px 60px rgba(15, 76, 56, 0.15);
                    z-index: 2;
                }

                .popular-badge {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    font-size: 12px;
                    font-weight: 800;
                    opacity: 0.8;
                }

                /* Watermark */
                .card-watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-30%, -20%) rotate(-15deg);
                    font-size: 180px;
                    font-weight: 900;
                    opacity: 0.03;
                    pointer-events: none;
                    white-space: nowrap;
                    font-family: 'Inter', sans-serif;
                }

                .pricing-card.dark .card-watermark {
                    opacity: 0.05;
                }

                /* Card Content */
                .price-box {
                    margin-bottom: 30px;
                    display: flex;
                    align-items: baseline;
                }

                .currency {
                    font-size: 32px;
                    font-weight: 700;
                    margin-right: 2px;
                }

                .amount {
                    font-size: 64px;
                    font-weight: 800;
                }

                .period {
                    font-size: 18px;
                    font-weight: 500;
                    opacity: 0.7;
                    margin-left: 4px;
                }

                .plan-name {
                    font-size: 32px;
                    font-weight: 800;
                    margin-bottom: 10px;
                }

                .plan-desc {
                    font-size: 16px;
                    font-weight: 500;
                    opacity: 0.8;
                    margin-bottom: 40px;
                }

                .card-features {
                    margin-bottom: auto;
                }

                .card-features ul {
                    list-style: none;
                    padding: 0;
                }

                .card-features li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 16px;
                }

                .check-icon {
                    flex-shrink: 0;
                    color: inherit;
                }

                .card-bottom {
                    margin-top: 40px;
                }

                .btn-plan {
                    width: 100%;
                    padding: 16px;
                    border-radius: 100px;
                    font-size: 18px;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-dark {
                    background: #0F4C38;
                    color: #FFFFFF;
                }

                .btn-white {
                    background: #FFFFFF;
                    color: #0F4C38;
                }

                .btn-plan:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .pricing-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                    .pricing-card.dark {
                        transform: scale(1);
                        grid-column: span 1;
                    }
                }

                @media (max-width: 768px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                    }
                    .pricing-header h2 {
                        font-size: 36px;
                    }
                    .pricing-card {
                        padding: 40px 30px;
                        min-height: auto;
                    }
                    .amount {
                        font-size: 48px;
                    }
                }
            `}</style>
    </section>
  );
};

export default Pricing;
