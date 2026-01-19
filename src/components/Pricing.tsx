import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Asset path as per your project structure
import bgWatermark from '../assets/image/pricingcardlogo.png';

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
    {
      name: 'Starter Plan',
      price: 49,
      description: 'Built for small businesses',
      features: [
        'All Free features',
        'Up to 100 products',
        'Email support',
        'Advanced analytics',
        'Better performance',
      ],
      isPopular: false,
    },
    {
      name: 'Growth Plan',
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
      name: 'Heavy Plan',
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
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, transparent pricing</h2>
          <p className="pricing-subtitle">
            Clear plans you can trust — start free and upgrade when you're ready.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="pricing-toggle">
          <button
            className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(false)}
          >
            MONTHLY
          </button>
          <button
            className={`toggle-btn ${isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(true)}
          >
            YEARLY
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.isPopular ? 'popular' : 'white-card'}`}
            >
              {/* Watermark Logo - Applied to ALL cards with different filters */}
              <div className="card-bg-watermark">
                <img
                  src={bgWatermark}
                  alt=""
                  className={plan.isPopular ? 'watermark-green' : 'watermark-white'}
                />
              </div>

              {plan.isPopular && <div className="popular-tag">MOST POPULAR</div>}

              <div className="card-content">
                <div className="card-price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? plan.price * 10 : plan.price}</span>
                  <span className="period">/month</span>
                </div>

                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>

                <ul className="feature-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <div className="check-wrapper">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="choose-btn">Choose plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-section {
          padding: 80px 20px;
          background-color: #FFFFFF;
          font-family: 'Inter', sans-serif;
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .pricing-title {
          font-size: 48px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #0B3B2D;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .pricing-subtitle {
          font-size: 20px;
          color: #6B7280;
          font-weight: 500;
        }

        .pricing-toggle {
          display: flex;
          justify-content: center;
          background: #f3f4f6;
          width: fit-content;
          margin: 0 auto 60px;
          padding: 6px;
          border-radius: 40px;
        }

        .toggle-btn {
          padding: 10px 28px;
          border-radius: 30px;
          border: none;
          background: transparent;
          font-size: 13px;
          font-weight: 800;
          color: #9CA3AF;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background-color: #0B3B2D;
          color: #FFFFFF;
        }

        .pricing-cards {
          display: flex;
          justify-content: center;
          gap: 24px;
          align-items: stretch;
        }

        .pricing-card {
          flex: 1;
          position: relative;
          border-radius: 40px;
          padding: 60px 40px 40px;
          overflow: hidden;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .white-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .popular {
          background-color: #0B3B2D;
          color: #FFFFFF;
          transform: scale(1.03);
          box-shadow: 0 20px 40px rgba(11, 59, 45, 0.2);
        }

        /* WATERMARK LOGO LOGIC */
        .card-bg-watermark {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          pointer-events: none;
          z-index: 0;
        }

        .card-bg-watermark img {
          width: 100%;
          height: auto;
          transform: translate(20%, -10%);
        }

        .watermark-white {
          opacity: 1; /* Subtle for white cards */
          filter: brightness(0.5) ;
        }

        .watermark-green {
          opacity: 1; /* Lighter green for the green card */
          filter: brightness(1) ;
        }

        .popular-tag {
          position: absolute;
          top: 25px;
          right: 35px;
          background-color: #FFFFFF;
          color: #0B3B2D;
          font-size: 11px;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 20px;
          z-index: 2;
        }

        .card-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-price {
          display: flex;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .currency {
          font-size: 38px;
          font-weight: 800;
          margin-right: 4px;
        }

        .amount {
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -2px;
        }

        .period {
          font-size: 16px;
          font-weight: 600;
          color: #6B7280;
          margin-left: 4px;
        }

        .popular .period { color: rgba(255, 255, 255, 0.7); }

        .plan-name {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .plan-description {
          font-size: 12.5px;
          color: #6B7280;
          font-weight: 600;
          margin-bottom: 40px;
        }

        .popular .plan-description { 
        color: rgba(255, 255, 255, 0.8);
        
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .check-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #E5E7EB;
          color: #4B5563;
        }

        .popular .check-wrapper {
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        .choose-btn {
          width: 100%;
          padding: 16px;
          border-radius: 40px;
          border: none;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .white-card .choose-btn {
          background-color: #0B3B2D;
          color: #FFFFFF;
        }

        .popular .choose-btn {
          background-color: #FFFFFF;
          color: #0B3B2D;
        }

        @media (max-width: 1024px) {
          .pricing-cards { flex-direction: column; align-items: center; }
          .pricing-card { width: 100%; max-width: 400px; transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;