import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, X } from 'lucide-react';

interface LoginProps {
  onClose: () => void;
  onSignupClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSignupClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login-overlay"
    >
      <div className="login-container">
        {/* Left Side - Marketing */}
        <div className="login-left">
          <div className="login-brand">
            <img src="/Logo White.png" alt="Zellyo" className="login-logo" />
          </div>

          <div className="marketing-content">
            <h1>Launch your store in seconds.</h1>
            <p>
              No code, no stress. Build a high converting e-commerce
              site with the world's most intuitive platform.
            </p>

            <div className="carousel-indicators">
              <span className="indicator active"></span>
              <span className="indicator"></span>
              <span className="indicator"></span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-right">
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="form-wrapper">
            <div className="form-header">
              <h2>Welcome back</h2>
              <p>Please enter your details to sign in.</p>
            </div>

            <button className="google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            <div className="divider">
              <span>or with email</span>
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="demo@gmail.com" />
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label>Password</label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="remember-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="checkmark"></span>
                  Remember me for 30 days
                </label>
              </div>

              <button type="submit" className="login-submit-btn">
                Log in
              </button>
            </form>

            <p className="signup-text">
              Don't have an account? <button onClick={onSignupClick} style={{ color: '#0F4C38', fontWeight: 700, background: 'none', border: 'none', padding: 0 }}>Sign up for free</button>
            </p>

            <div className="footer-links">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .login-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          z-index: 2000;
          display: flex;
          overflow: hidden;
        }

        .login-container {
          display: flex;
          width: 100%;
          height: 100%;
        }

        /* --- Left Side --- */
        .login-left {
          flex: 1;
          background-color: #0F4C38;
          color: white;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .login-logo {
          height: 48px;
          width: auto;
        }

        .marketing-content {
          max-width: 480px;
          margin-bottom: 40px;
        }

        .marketing-content h1 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .marketing-content p {
          font-size: 18px;
          opacity: 0.8;
          line-height: 1.5;
          margin-bottom: 40px;
        }

        .carousel-indicators {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .indicator {
          height: 2px;
          width: 24px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
        }

        .indicator.active {
          background: white;
          width: 48px;
        }

        /* --- Right Side --- */
        .login-right {
          flex: 1.1;
          background-color: #FFFEFA;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 40px;
          overflow-y: auto;
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          color: #667085;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(0,0,0,0.05);
        }

        .form-wrapper {
          width: 100%;
          max-width: 440px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .form-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #101828;
          margin-bottom: 8px;
        }

        .form-header p {
          color: #667085;
          font-size: 16px;
        }

        .google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px;
          border: 1px solid #D0D5DD;
          border-radius: 8px;
          background: white;
          color: #344054;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 24px;
          transition: all 0.2s;
        }

        .google-btn:hover {
          background: #f9fafb;
          border-color: #667085;
        }

        .divider {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .divider::before, .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #EAECF0;
        }

        .divider span {
          padding: 0 16px;
          color: #667085;
          font-size: 14px;
        }

        .login-form {
          width: 100%;
        }

        .input-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-group label {
          font-size: 14px;
          font-weight: 600;
          color: #1a4d3c;
        }

        .input-group input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #D0D5DD;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s;
          background: white;
        }

        .input-group input:focus {
          outline: none;
          border-color: #0F4C38;
          box-shadow: 0 0 0 4px rgba(15, 76, 56, 0.1);
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-link {
          font-size: 14px;
          font-weight: 600;
          color: #0F4C38;
        }

        .password-wrapper {
          position: relative;
        }

        .toggle-password {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #667085;
        }

        .remember-row {
          margin-bottom: 24px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #344054;
          font-weight: 600;
          cursor: pointer;
        }

        .checkbox-container input {
          display: none;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          border: 1px solid #D0D5DD;
          border-radius: 4px;
          position: relative;
          transition: all 0.2s;
        }

        .checkbox-container input:checked + .checkmark {
          background-color: #0F4C38;
          border-color: #0F4C38;
        }

        .checkbox-container input:checked + .checkmark::after {
          content: "✓";
          position: absolute;
          color: white;
          font-size: 14px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .login-submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #0F4C38;
          color: white;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          transition: background 0.2s;
          margin-bottom: 24px;
        }

        .login-submit-btn:hover {
          background-color: #0a3527;
        }

        .signup-text {
          font-size: 14px;
          color: #667085;
          margin-bottom: 60px;
        }

        .signup-text a {
          color: #0F4C38;
          font-weight: 700;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          color: #98A2B3;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .login-left {
            display: none;
          }
          .login-right {
            flex: 1;
          }
        }

        @media (max-width: 480px) {
          .login-right {
            padding: 20px;
          }
          .form-header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Login;
