import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import SignupStep1 from './Signup/SignupStep1';
import SignupStep2 from './Signup/SignupStep2';
import SignupStep3 from './Signup/SignupStep3';
import SignupStep4 from './Signup/SignupStep4';
import SignupStep5 from './Signup/SignupStep5';
import SignupStep6 from './Signup/SignupStep6';

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

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <SignupStep1
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        rememberMe={rememberMe}
                        setRememberMe={setRememberMe}
                        onContinue={() => setStep(2)}
                        onLoginClick={onLoginClick}
                    />
                );
            case 2:
                return (
                    <SignupStep2
                        email={email}
                        verificationCode={verificationCode}
                        setVerificationCode={setVerificationCode}
                        onContinue={() => setStep(3)}
                        onLoginClick={onLoginClick}
                    />
                );
            case 3:
                return (
                    <SignupStep3
                        storeName={storeName}
                        setStoreName={setStoreName}
                        onContinue={() => setStep(4)}
                    />
                );
            case 4:
                return (
                    <SignupStep4
                        selectedSource={selectedSource}
                        setSelectedSource={setSelectedSource}
                        onContinue={() => setStep(5)}
                    />
                );
            case 5:
                return (
                    <SignupStep5
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        onContinue={() => setStep(6)}
                        onBack={() => setStep(4)}
                    />
                );
            case 6:
                return (
                    <SignupStep6
                        selectedGoal={selectedGoal}
                        setSelectedGoal={setSelectedGoal}
                        onComplete={() => console.log('Complete')}
                        onBack={() => setStep(5)}
                    />
                );
            default:
                return (
                    <div className="form-header left-align">
                        <h2>Complete!</h2>
                        <p>Your store is ready to be built.</p>
                    </div>
                );
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
                        {renderStep()}

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
            grid-column: span 1.5;
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
        </motion.div>
    );
};

export default Signup;
