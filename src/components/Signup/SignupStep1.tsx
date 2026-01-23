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

            <form className="login-form" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
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
    );
};

export default SignupStep1;
