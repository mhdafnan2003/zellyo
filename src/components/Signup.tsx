import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, X, Rocket, TrendingUp, Building2 } from 'lucide-react';

interface SignupProps {
  onClose: () => void;
  onLoginClick: () => void;
}

const Signup: React.FC<SignupProps> = ({ onClose, onLoginClick }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [storeName, setStoreName] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value !== '' && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

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
            <h1>Fast, Easy, and Scalable</h1>
            <p>
              The no-code engine powering the next generation of
              e-commerce moguls.
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
            {step === 1 ? (
              <>
                <div className="form-header">
                  <h2>Create your account</h2>
                  <p>Join thousands of builders on Zellyo today</p>
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

                <form className="login-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="demo@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <div className="label-row">
                      <label>Password</label>
                    </div>
                    <div className="password-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                    Continue with Email
                  </button>
                </form>

                <p className="signup-disclaimer">
                  By creating an account, you agree to Zellyo's Terms of Service and Privacy Policy.
                </p>

                <p className="signup-text">
                  Already have an account? <button onClick={onLoginClick} style={{ color: '#0F4C38', fontWeight: 700, background: 'none', border: 'none', padding: 0 }}>Sign In</button>
                </p>
              </>
            ) : step === 2 ? (
              <>
                <div className="form-header">
                  <h2>Verify your Email</h2>
                  <p className="verification-text">
                    We've sent a 6-digit verification code to<br />
                    <strong>{email || 'alex@example.com'}</strong>. Please enter it below.
                  </p>
                </div>

                <div className="code-inputs">
                  {verificationCode.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`code-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      className="code-input"
                    />
                  ))}
                </div>

                <button className="login-submit-btn verify-btn" onClick={() => setStep(3)}>
                  Verify & Continue
                </button>

                <p className="resend-text">
                  Didn't receive the code? <button className="resend-link">Resend code</button>
                </p>

                <div className="back-to-login">
                  <button onClick={onLoginClick} className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to login
                  </button>
                </div>
              </>
            ) : step === 3 ? (
              <>
                <div className="form-header left-align">
                  <h2>What's your store name?</h2>
                  <p>Don't worry, you can always change this later in your dashboard settings.</p>
                </div>

                <div className="input-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Shamil's Shoe Store"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>

                <button className="login-submit-btn continue-arrow-btn" onClick={() => setStep(4)}>
                  Continue
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <div className="subdomain-badge">
                  <div className="check-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Free .zellyo.store subdomain included</span>
                </div>
              </>
            ) : step === 4 ? (
              <>
                <div className="progress-container">
                  <div className="progress-header">
                    <span>STEP 1 OF 3</span>
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar-fill" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="form-header left-align">
                  <h2 className="survey-title">Where did you hear about Zellyo?</h2>
                  <p className="survey-subtitle">We'd love to know how you found us to improve our community.</p>
                </div>

                <div className="survey-options">
                  {[
                    "Social Media",
                    "Search Engine",
                    "Friend or Colleague",
                    "Online Advertisement",
                    "Other"
                  ].map((option) => (
                    <div
                      key={option}
                      className={`survey-option ${selectedSource === option ? 'active' : ''}`}
                      onClick={() => setSelectedSource(option)}
                    >
                      <span>{option}</span>
                      <div className="check-circle-outline">
                        {selectedSource === option && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="survey-footer">
                  <button className="skip-link-btn" onClick={() => console.log('Skip')}>Skip for now</button>
                  <button className="login-submit-btn next-step-btn" onClick={() => setStep(5)}>
                    Next Step
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </>
            ) : step === 5 ? (
              <>
                <div className="progress-container">
                  <div className="progress-header">
                    <span>STEP 2 OF 3</span>
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar-fill" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="form-header left-align">
                  <h2 className="survey-title">What are you selling?</h2>
                  <p className="survey-subtitle">We'll help you pick the best theme based on your niche.</p>
                </div>

                <div className="category-grid">
                  {[
                    { id: 'fashion', label: 'Fashion', sub: 'Clothing, shoes, jewelry' },
                    { id: 'tech', label: 'Tech', sub: 'Gadgets, electronics, etc' },
                    { id: 'food', label: 'Food & Drink', sub: 'Groceries, beverages' },
                    { id: 'beauty', label: 'Beauty & Health', sub: 'Skincare, makeup, vitamins' },
                    { id: 'other', label: 'Other', sub: 'something unique' }
                  ].map((cat) => (
                    <div
                      key={cat.id}
                      className={`category-card ${selectedCategory === cat.id ? 'active' : ''} ${cat.id === 'beauty' || cat.id === 'other' ? 'centered-row' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <div className="card-content">
                        <span className="cat-label">{cat.label}</span>
                        <span className="cat-sub">{cat.sub}</span>
                      </div>
                      <div className="check-circle-outline small">
                        {selectedCategory === cat.id && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="survey-footer">
                  <button className="back-nav-btn" onClick={() => setStep(4)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                  <button className="login-submit-btn next-step-btn" onClick={() => setStep(6)}>
                    Next Step
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </>
            ) : step === 6 ? (
              <>
                <div className="progress-container">
                  <div className="progress-header">
                    <span>STEP 3 OF 3</span>
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="form-header left-align">
                  <h2 className="survey-title">What is your monthly goal?</h2>
                  <p className="survey-subtitle">Help us tailor your dashboard by setting a realistic target for your shop's performance.</p>
                </div>

                <div className="goal-options">
                  {[
                    { id: 'starter', label: 'The Starter', sub: 'Upto to ₹ 15000 / month', icon: <Rocket size={24} /> },
                    { id: 'scaler', label: 'The Scaler', sub: 'Upto to ₹ 25000 / month', icon: <TrendingUp size={24} /> },
                    { id: 'enterprise', label: 'Enteprise', sub: 'Upto to ₹ 55000 / month', icon: <Building2 size={24} /> }
                  ].map((goal) => (
                    <div
                      key={goal.id}
                      className={`goal-card ${selectedGoal === goal.id ? 'active' : ''}`}
                      onClick={() => setSelectedGoal(goal.id)}
                    >
                      <div className="goal-icon-box">
                        {goal.icon}
                      </div>
                      <div className="goal-content">
                        <span className="goal-label">{goal.label}</span>
                        <span className="goal-sub">{goal.sub}</span>
                      </div>
                      <div className="check-circle-outline">
                        {selectedGoal === goal.id && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="survey-footer">
                  <button className="back-nav-btn" onClick={() => setStep(5)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                  <button className="login-submit-btn complete-btn" onClick={() => console.log('Complete')}>
                    Complete Setup
                  </button>
                </div>
              </>
            ) : (
              <div className="form-header left-align">
                <h2>Complete!</h2>
                <p>Your store is ready to be built.</p>
              </div>
            )}

            <div className="footer-links">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS</a>
            </div>
          </div>
        </div>
      </div >

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

        .signup-disclaimer {
            font-size: 12px;
            color: #667085;
            text-align: center;
            margin-bottom: 16px;
            line-height: 1.4;
        }

        .signup-text {
          font-size: 14px;
          color: #667085;
          margin-bottom: 60px;
        }

        .signup-text a, .signup-text button {
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

        .verification-text {
            color: #667085 !important;
            font-size: 16px !important;
            line-height: 1.5 !important;
        }

        .code-inputs {
            display: flex;
            gap: 16px;
            margin: 32px 0;
            width: 100%;
            justify-content: center;
        }

        .code-input {
            width: 70px;
            height: 80px;
            border: 1px solid #D0D5DD;
            border-radius: 12px;
            font-size: 32px;
            text-align: center;
            font-weight: 700;
            color: #101828;
            background: white;
            transition: all 0.2s;
        }

        .code-input:focus {
            outline: none;
            border-color: #0F4C38;
            box-shadow: 0 0 0 4px rgba(15, 76, 56, 0.1);
        }

        .verify-btn {
            margin-bottom: 32px;
        }

        .resend-text {
            font-size: 14px;
            color: #667085;
            margin-bottom: 40px;
        }

        .resend-link {
            color: #1a4d3c;
            font-weight: 700;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
        }

        .back-to-login {
            margin-bottom: 60px;
        }

        .back-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #667085;
            font-size: 14px;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.2s;
        }

        .back-btn:hover {
            color: #0F4C38;
        }

        .left-align {
            text-align: left !important;
            width: 100%;
        }

        .continue-arrow-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .subdomain-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
            color: #667085;
            font-size: 13px;
            font-weight: 500;
        }

        .check-circle {
            width: 18px;
            height: 18px;
            background-color: #1a4d3c;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .progress-container {
            width: 100%;
            margin-bottom: 40px;
        }

        .progress-header {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 12px;
            font-weight: 700;
            color: #1a4d3c;
        }

        .progress-bar-wrapper {
            flex: 1;
            height: 4px;
            background: #EBF3EF;
            border-radius: 2px;
            overflow: hidden;
        }

        .progress-bar-fill {
            height: 100%;
            background: #0F4C38;
            border-radius: 2px;
            transition: width 0.3s ease;
        }

        .survey-title {
            font-size: 36px !important;
            margin-bottom: 12px !important;
        }

        .survey-subtitle {
            font-size: 16px !important;
            margin-bottom: 32px !important;
            color: #667085 !important;
        }

        .survey-options {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 40px;
        }

        .survey-option {
            width: 100%;
            padding: 16px 20px;
            border: 1px solid #EAECF0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: white;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 600;
            color: #344054;
        }

        .survey-option:hover {
            border-color: #0F4C38;
            background: #F9FAFB;
        }

        .survey-option.active {
            border-color: #0F4C38;
            border-width: 2px;
            padding: 15px 19px;
            color: #101828;
        }

        .check-circle-outline {
            width: 20px;
            height: 20px;
            border: 1px solid #D0D5DD;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: all 0.2s;
        }

        .survey-option.active .check-circle-outline {
            background-color: #0F4C38;
            border-color: #0F4C38;
        }

        .survey-footer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
        }

        .skip-link-btn {
            background: none;
            border: none;
            color: #667085;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.2s;
        }

        .skip-link-btn:hover {
            color: #1a4d3c;
        }

        .next-step-btn {
            width: auto !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 0 !important;
        }

        .category-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            width: 100%;
            margin-bottom: 40px;
        }

        .category-card {
            padding: 16px;
            border: 1px solid #EAECF0;
            border-radius: 8px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            background: white;
            cursor: pointer;
            transition: all 0.2s;
            min-height: 80px;
        }

        .category-card.centered-row {
            grid-column: span 1.5; /* This doesn't work directly, will handle with flex wrapper if needed or just grid */
        }

        /* Adjusting for the specific staggered 3-2 layout */
        .category-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
        }

        .category-card {
            flex: 0 0 calc(33.333% - 11px);
        }

        .category-card.centered-row {
            flex: 0 0 calc(33.333% - 11px);
        }

        /* Responsive grid adjustment */
        @media (max-width: 600px) {
            .category-card {
                flex: 0 0 100%;
            }
        }

        .category-card:hover {
            border-color: #0F4C38;
        }

        .category-card.active {
            border-color: #0F4C38;
            border-width: 2px;
            padding: 15px;
            background: #F9FAFB;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .cat-label {
            font-size: 14px;
            font-weight: 700;
            color: #101828;
        }

        .cat-sub {
            font-size: 12px;
            color: #667085;
            font-weight: 500;
        }

        .check-circle-outline.small {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
        }

        .back-nav-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 32px;
            border: 1px solid #0F4C38;
            border-radius: 8px;
            background: transparent;
            color: #1a4d3c;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .back-nav-btn:hover {
            background: rgba(15, 76, 56, 0.05);
        }

        .goal-options {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          margin-bottom: 40px;
        }

        .goal-card {
          width: 100%;
          padding: 16px 20px;
          border: 1px solid #EAECF0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .goal-card:hover {
          border-color: #0F4C38;
          background: #F9FAFB;
        }

        .goal-card.active {
          border-color: #0F4C38;
          border-width: 2px;
          padding: 15px 19px;
        }

        .goal-icon-box {
          width: 48px;
          height: 48px;
          border: 1px solid #EAECF0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667085;
          background: white;
          transition: all 0.2s;
        }

        .goal-card.active .goal-icon-box {
          background-color: transparent;
          color: #1a4d3c;
          border-color: #EAECF0;
        }

        .goal-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .goal-label {
          font-size: 16px;
          font-weight: 700;
          color: #101828;
        }

        .goal-sub {
          font-size: 14px;
          color: #667085;
          font-weight: 500;
        }

        .complete-btn {
          width: auto !important;
          padding: 12px 40px !important;
          margin-bottom: 0 !important;
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
          .code-input {
            width: 60px;
            height: 70px;
          }
        }
      `}</style>
    </motion.div >
  );
};

export default Signup;
