import { motion } from 'framer-motion';
import { MousePointer2, Smartphone, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <MousePointer2 className="f-icon" />,
    title: "Simple Store Builder",
    description: "Launch your store with our intuitive drag-and-drop editor. No coding required."
  },
  {
    icon: <Smartphone className="f-icon" />,
    title: "Mobile Optimized",
    description: "Your store looks beautiful on every device, ensuring a seamless shopping experience."
  },
  {
    icon: <Globe className="f-icon" />,
    title: "Global Reach",
    description: "Sell to anyone, anywhere with built-in international shipping and tax support."
  },
  {
    icon: <BarChart3 className="f-icon" />,
    title: "Powerful Analytics",
    description: "Track your sales, visitors, and growth with detailed reports and insights."
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Premium Experience</span>
          <h2>Designed for Effortless Selling</h2>
          <p>Everything you need to showcase, sell, and grow your products online.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="icon-wrapper">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
          padding: 120px 0;
          background-color: var(--white);
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .subtitle {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
        }
        h2 {
          font-size: 48px;
          margin: 16px 0;
          letter-spacing: -1px;
        }
        .section-header p {
          font-size: 18px;
          color: var(--text-muted);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }
        .feature-card {
          padding: 40px;
          border-radius: var(--radius-md);
          background-color: var(--background);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-light);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .icon-wrapper {
          width: 56px;
          height: 56px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .f-icon {
          width: 28px;
          height: 28px;
        }
        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .feature-card p {
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;
