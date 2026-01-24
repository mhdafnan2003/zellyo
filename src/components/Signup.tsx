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
      className="fixed inset-0 bg-white z-[2000] flex overflow-hidden"
    >
      <div className="flex w-full h-full">
        {/* Left Side - Marketing */}
        <div className="flex-1 bg-zellyo-green text-white p-15 flex flex-col justify-between relative max-md:hidden">
          <div className="text-left">
            <img src="/Logo White.png" alt="Zellyo" className="h-12 w-auto" />
          </div>

          <div className="max-w-[480px] mb-10 text-left">
            <h1 className="text-5xl font-bold leading-[1.1] mb-6">Fast, Easy, and Scalable</h1>
            <p className="text-lg opacity-80 leading-[1.5] mb-10">
              The no-code engine powering the next generation of
              e-commerce moguls.
            </p>

            <div className="flex gap-3 items-center">
              <span className="h-0.5 w-12 bg-white rounded-sm"></span>
              <span className="h-0.5 w-6 bg-white/30 rounded-sm"></span>
              <span className="h-0.5 w-6 bg-white/30 rounded-sm"></span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-[1.1] bg-zellyo-cream flex items-center justify-center relative p-10 max-sm:p-5 overflow-y-auto">
          <button className="absolute top-[30px] right-[30px] text-[#667085] p-2 rounded-full hover:bg-black/5 transition-colors duration-200" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="w-full max-w-[440px] flex flex-col items-center">
            {step === 1 ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] max-sm:text-[28px] font-bold text-[#101828] mb-2">Create your account</h2>
                  <p className="text-[#667085] text-base">Join thousands of builders on Zellyo today</p>
                </div>

                <button className="w-full flex items-center justify-center gap-3 p-3 border border-[#D0D5DD] rounded-lg bg-white text-[#344054] font-semibold text-base mb-6 hover:bg-[#f9fafb] hover:border-[#667085] transition-all duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </button>

                <div className="w-full flex items-center mb-6">
                  <div className="flex-1 h-px bg-[#EAECF0]"></div>
                  <span className="px-4 text-[#667085] text-sm">or with email</span>
                  <div className="flex-1 h-px bg-[#EAECF0]"></div>
                </div>

                <form className="w-full" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="mb-5 flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zellyo-green-light">Email Address</label>
                    <input
                      type="email"
                      placeholder="demo@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-[12px_14px] border border-[#D0D5DD] rounded-lg text-base bg-white focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10 transition-all duration-200"
                    />
                  </div>

                  <div className="mb-5 flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-zellyo-green-light">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-[12px_14px] border border-[#D0D5DD] rounded-lg text-base bg-white focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10 transition-all duration-200"
                      />
                      <button
                        type="button"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#667085] hover:text-[#101828] transition-colors duration-200"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center gap-3 text-sm text-[#344054] font-semibold cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border border-[#D0D5DD] rounded-[4px] bg-white transition-all duration-200 peer-checked:bg-zellyo-green peer-checked:border-zellyo-green after:content-['✓'] after:absolute after:hidden peer-checked:after:block after:text-white after:text-sm after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>
                      </div>
                      Remember me for 30 days
                    </label>
                  </div>

                  <button type="submit" className="w-full p-3 bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-colors duration-200 mb-6 font-sans">
                    Continue with Email
                  </button>
                </form>

                <p className="text-[12px] text-[#667085] text-center mb-4 leading-[1.4] font-sans">
                  By creating an account, you agree to Zellyo's Terms of Service and Privacy Policy.
                </p>

                <p className="text-sm text-[#667085] mb-[60px]">
                  Already have an account? <button onClick={onLoginClick} className="text-zellyo-green font-bold bg-none border-none p-0 cursor-pointer hover:underline">Sign In</button>
                </p>
              </>
            ) : step === 2 ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-2">Verify your Email</h2>
                  <p className="text-[#667085] text-base leading-[1.5]">
                    We've sent a 6-digit verification code to<br />
                    <strong>{email || 'alex@example.com'}</strong>. Please enter it below.
                  </p>
                </div>

                <div className="flex gap-4 my-8 w-full justify-center">
                  {verificationCode.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`code-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      className="w-[70px] h-20 border border-[#D0D5DD] rounded-xl text-[32px] text-center font-bold text-[#101828] bg-white focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10 transition-all duration-200"
                    />
                  ))}
                </div>

                <button className="w-full p-3 bg-zellyo-green text-white rounded-lg text-base font-bold mb-8 hover:bg-zellyo-green-dark transition-colors duration-200" onClick={() => setStep(3)}>
                  Verify & Continue
                </button>

                <p className="text-sm text-[#667085] mb-10">
                  Didn't receive the code? <button className="text-zellyo-green font-bold bg-none border-none p-0 cursor-pointer hover:underline">Resend code</button>
                </p>

                <div className="mb-[60px]">
                  <button onClick={onLoginClick} className="flex items-center gap-2.5 text-[#667085] text-sm font-semibold hover:text-zellyo-green transition-colors duration-200">
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
                <div className="text-left w-full mb-8">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-2">What's your store name?</h2>
                  <p className="text-[#667085] text-base">Don't worry, you can always change this later in your dashboard settings.</p>
                </div>

                <div className="mb-5 flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-semibold text-zellyo-green-light">Store Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Shamil's Shoe Store"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full p-[12px_14px] border border-[#D0D5DD] rounded-lg text-base bg-white focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10 transition-all duration-200"
                  />
                </div>

                <button className="w-full p-3 bg-zellyo-green text-white rounded-lg text-base font-bold mb-4 hover:bg-zellyo-green-dark transition-colors duration-200 flex items-center justify-center gap-3" onClick={() => setStep(4)}>
                  Continue
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <div className="flex items-center gap-2 mt-4 text-[#667085] text-[13px] font-medium w-full">
                  <div className="w-[18px] h-[18px] bg-zellyo-green-light rounded-full flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Free .zellyo.store subdomain included</span>
                </div>
              </>
            ) : step === 4 ? (
              <>
                <div className="w-full mb-10">
                  <div className="flex items-center gap-5 text-[12px] font-bold text-zellyo-green-light mb-8">
                    <span>STEP 1 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded-sm overflow-hidden">
                      <div className="h-full bg-zellyo-green rounded-sm transition-all duration-300" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-left w-full mb-8">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-3">Where did you hear about Zellyo?</h2>
                  <p className="text-base text-[#667085]">We'd love to know how you found us to improve our community.</p>
                </div>

                <div className="w-full flex flex-col gap-3 mb-10">
                  {[
                    "Social Media",
                    "Search Engine",
                    "Friend or Colleague",
                    "Online Advertisement",
                    "Other"
                  ].map((option) => (
                    <div
                      key={option}
                      className={`w-full p-[14px_20px] border rounded-lg flex items-center justify-between cursor-pointer transition-all duration-200 font-semibold ${selectedSource === option ? 'border-zellyo-green bg-[#F9FAFB] border-2 p-[13px_19px] text-[#101828]' : 'border-[#EAECF0] text-[#344054] hover:border-zellyo-green hover:bg-[#F9FAFB]'}`}
                      onClick={() => setSelectedSource(option)}
                    >
                      <span>{option}</span>
                      <div className={`w-5 h-5 border rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedSource === option ? 'bg-zellyo-green border-zellyo-green' : 'border-[#D0D5DD]'}`}>
                        {selectedSource === option && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between mb-10">
                  <button className="text-[#667085] text-sm font-semibold hover:text-zellyo-green transition-colors duration-200 bg-none border-none p-0 cursor-pointer" onClick={() => console.log('Skip')}>Skip for now</button>
                  <button className="flex items-center gap-3 p-[12px_40px] bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-colors duration-200" onClick={() => setStep(5)}>
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
                <div className="w-full mb-10">
                  <div className="flex items-center gap-5 text-[12px] font-bold text-zellyo-green-light mb-8">
                    <span>STEP 2 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded-sm overflow-hidden">
                      <div className="h-full bg-zellyo-green rounded-sm transition-all duration-300" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-left w-full mb-8">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-3">What are you selling?</h2>
                  <p className="text-base text-[#667085]">We'll help you pick the best theme based on your niche.</p>
                </div>

                <div className="w-full grid grid-cols-3 max-md:grid-cols-2 gap-4 mb-10">
                  {[
                    { id: 'fashion', label: 'Fashion', sub: 'Clothing, shoes, jewelry' },
                    { id: 'tech', label: 'Tech', sub: 'Gadgets, electronics, etc' },
                    { id: 'food', label: 'Food & Drink', sub: 'Groceries, beverages' },
                    { id: 'beauty', label: 'Beauty & Health', sub: 'Skincare, makeup, vitamins' },
                    { id: 'other', label: 'Other', sub: 'something unique' }
                  ].map((cat) => (
                    <div
                      key={cat.id}
                      className={`p-4 border rounded-lg flex flex-col justify-between cursor-pointer transition-all duration-200 min-h-[80px] ${selectedCategory === cat.id ? 'border-zellyo-green bg-[#F9FAFB] border-2 p-[15px]' : 'border-[#EAECF0] hover:border-zellyo-green'}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-[#101828]">{cat.label}</span>
                        <span className="text-[10px] text-[#667085] font-medium leading-tight">{cat.sub}</span>
                      </div>
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center text-white mt-2 self-end transition-all duration-200 ${selectedCategory === cat.id ? 'bg-zellyo-green border-zellyo-green' : 'border-[#D0D5DD]'}`}>
                        {selectedCategory === cat.id && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between mb-10">
                  <button className="flex items-center gap-2.5 p-[12px_32px] border border-zellyo-green bg-transparent text-zellyo-green font-semibold text-base rounded-lg hover:bg-zellyo-green/5 transition-colors duration-200" onClick={() => setStep(4)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                  <button className="flex items-center gap-3 p-[12px_40px] bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-colors duration-200" onClick={() => setStep(6)}>
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
                <div className="w-full mb-10">
                  <div className="flex items-center gap-5 text-[12px] font-bold text-zellyo-green-light mb-8">
                    <span>STEP 3 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded-sm overflow-hidden">
                      <div className="h-full bg-zellyo-green rounded-sm transition-all duration-300" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-left w-full mb-8">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-3">What is your monthly goal?</h2>
                  <p className="text-base text-[#667085]">Help us tailor your dashboard by setting a realistic target for your shop's performance.</p>
                </div>

                <div className="w-full flex flex-col gap-4 mb-10">
                  {[
                    { id: 'starter', label: 'The Starter', sub: 'Upto to ₹ 15000 / month', icon: <Rocket size={24} /> },
                    { id: 'scaler', label: 'The Scaler', sub: 'Upto to ₹ 25000 / month', icon: <TrendingUp size={24} /> },
                    { id: 'enterprise', label: 'Enteprise', sub: 'Upto to ₹ 55000 / month', icon: <Building2 size={24} /> }
                  ].map((goal) => (
                    <div
                      key={goal.id}
                      className={`w-full p-[14px_20px] border rounded-xl flex items-center gap-5 cursor-pointer transition-all duration-200 ${selectedGoal === goal.id ? 'border-zellyo-green bg-[#F9FAFB] border-2 p-[13px_19px]' : 'border-[#EAECF0] hover:border-zellyo-green hover:bg-[#F9FAFB]'}`}
                      onClick={() => setSelectedGoal(goal.id)}
                    >
                      <div className="w-12 h-12 border border-[#EAECF0] rounded-lg flex items-center justify-center text-[#667085] bg-white">
                        {goal.icon}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="text-base font-bold text-[#101828]">{goal.label}</span>
                        <span className="text-sm text-[#667085] font-medium">{goal.sub}</span>
                      </div>
                      <div className={`w-5 h-5 border rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedGoal === goal.id ? 'bg-zellyo-green border-zellyo-green' : 'border-[#D0D5DD]'}`}>
                        {selectedGoal === goal.id && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between mb-10">
                  <button className="flex items-center gap-2.5 p-[12px_32px] border border-zellyo-green bg-transparent text-zellyo-green font-semibold text-base rounded-lg hover:bg-zellyo-green/5 transition-colors duration-200" onClick={() => setStep(5)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                  </button>
                  <button className="p-[12px_40px] bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-colors duration-200" onClick={() => console.log('Complete')}>
                    Complete Setup
                  </button>
                </div>
              </>
            ) : (
              <div className="text-left w-full mb-8">
                <h2 className="text-[32px] font-bold text-[#101828] mb-2">Complete!</h2>
                <p className="text-[#667085] text-base">Your store is ready to be built.</p>
              </div>
            )}

            <div className="flex gap-6 mt-auto pt-10">
              <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-[0.05em] hover:text-zellyo-green transition-colors duration-200 uppercase">PRIVACY POLICY</a>
              <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-[0.05em] hover:text-zellyo-green transition-colors duration-200 uppercase">TERMS</a>
            </div>
          </div>
        </div>
      </div >
    </motion.div>
  );
};

export default Signup;
