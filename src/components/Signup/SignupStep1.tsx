import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface SignupStep1Props {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    rememberMe: boolean;
    setRememberMe: (remember: boolean) => void;
    onContinue: () => void;
    onLoginClick: () => void;
}

const SignupStep1: React.FC<SignupStep1Props> = ({
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    rememberMe,
    setRememberMe,
    onContinue,
    onLoginClick,
}) => {
    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-[32px] font-bold text-[#101828] mb-2">Create your account</h2>
                <p className="text-[#667085] text-base">Join thousands of builders on Zellyo today</p>
            </div>

            <button className="w-full flex items-center justify-center gap-3 px-3 py-3 border border-[#D0D5DD] rounded-lg bg-white text-[#344054] font-semibold text-base mb-6 hover:bg-gray-50 hover:border-[#667085] transition-all">
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

            <form className="w-full" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
                <div className="mb-5 flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#1a4d3c]">Email Address</label>
                    <input
                        type="email"
                        placeholder="demo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3.5 py-3 border border-[#D0D5DD] rounded-lg text-base bg-white transition-all focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10"
                    />
                </div>

                <div className="mb-5 flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#1a4d3c]">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3.5 py-3 border border-[#D0D5DD] rounded-lg text-base bg-white transition-all focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10"
                        />
                        <button
                            type="button"
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#667085]"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="flex items-center gap-3 text-sm text-[#344054] font-semibold cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="hidden peer"
                        />
                        <span className="w-5 h-5 border border-[#D0D5DD] rounded relative transition-all peer-checked:bg-zellyo-green peer-checked:border-zellyo-green after:content-['✓'] after:absolute after:text-white after:text-sm after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100"></span>
                        Remember me for 30 days
                    </label>
                </div>

                <button type="submit" className="w-full px-3 py-3 bg-zellyo-green text-white rounded-lg text-base font-bold mb-6 hover:bg-zellyo-green-dark transition-all">
                    Continue with Email
                </button>
            </form>

            <p className="text-xs text-[#667085] text-center mb-4 leading-relaxed">
                By creating an account, you agree to Zellyo's Terms of Service and Privacy Policy.
            </p>

            <p className="text-sm text-[#667085] mb-15">
                Already have an account? <button onClick={onLoginClick} className="text-zellyo-green font-bold">Sign In</button>
            </p>
        </>
    );
};

export default SignupStep1;
