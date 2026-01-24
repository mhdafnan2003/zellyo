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
      className="fixed inset-0 bg-white z-[2000] flex overflow-hidden"
    >
      <div className="flex w-full h-full">
        {/* Left Side - Marketing */}
        <div className="flex-1 bg-zellyo-green text-white p-15 flex flex-col justify-between relative max-md:hidden">
          <div className="text-left">
            <img src="/Logo White.png" alt="Zellyo" className="h-12 w-auto" />
          </div>

          <div className="max-w-[480px] mb-10 text-left">
            <h1 className="text-5xl font-bold leading-[1.1] mb-6">Launch your store in seconds.</h1>
            <p className="text-lg opacity-80 leading-[1.5] mb-10">
              No code, no stress. Build a high converting e-commerce
              site with the world's most intuitive platform.
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
          <button
            className="absolute top-[30px] right-[30px] text-[#667085] p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-[440px] flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-[32px] max-sm:text-[28px] font-bold text-[#101828] mb-2">Welcome back</h2>
              <p className="text-[#667085] text-base">Please enter your details to sign in.</p>
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
              <span className="px-4 text-[#667085] text-sm font-sans">or with email</span>
              <div className="flex-1 h-px bg-[#EAECF0]"></div>
            </div>

            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-5 flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zellyo-green-light">Email Address</label>
                <input
                  type="email"
                  placeholder="demo@gmail.com"
                  className="w-full p-[12px_14px] border border-[#D0D5DD] rounded-lg text-base bg-white focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10 transition-all duration-200"
                />
              </div>

              <div className="mb-5 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-zellyo-green-light">Password</label>
                  <a href="#" className="text-sm font-semibold text-zellyo-green hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
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

              <button type="submit" className="w-full p-3 bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-colors duration-200 mb-6">
                Log in
              </button>
            </form>

            <p className="text-sm text-[#667085] mb-[60px]">
              Don't have an account? <button onClick={onSignupClick} className="text-zellyo-green font-bold bg-none border-none p-0 cursor-pointer hover:underline">Sign up for free</button>
            </p>

            <div className="flex gap-6 mt-auto">
              <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-[0.05em] hover:text-zellyo-green transition-colors duration-200 uppercase">PRIVACY POLICY</a>
              <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-[0.05em] hover:text-zellyo-green transition-colors duration-200 uppercase">TERMS</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
