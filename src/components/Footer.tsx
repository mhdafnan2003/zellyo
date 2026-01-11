const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo-text">Zellyo</div>
                    <p>The next generation e-commerce platform for modern brand builders and creators.</p>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Showcase</a>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">API Docs</a>
                        <a href="#">Community</a>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Zellyo. All rights reserved.</p>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>

            <style>{`
        .footer {
          padding: 80px 0 40px;
          background-color: var(--primary);
          color: white;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-brand {
          max-width: 320px;
        }
        .logo-text {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
        }
        .footer-brand p {
          opacity: 0.7;
          line-height: 1.6;
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .footer-column h4 {
          margin-bottom: 24px;
          font-size: 18px;
        }
        .footer-column a {
          display: block;
          margin-bottom: 12px;
          opacity: 0.7;
          font-size: 15px;
        }
        .footer-column a:hover {
          opacity: 1;
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          opacity: 0.6;
        }
        .legal-links {
          display: flex;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 40px;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .legal-links {
            justify-content: center;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
