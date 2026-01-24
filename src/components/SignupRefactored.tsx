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
                    <div className="text-left w-full">
                        <h2 className="text-[32px] font-bold text-[#101828] mb-2">Complete!</h2>
                        <p className="text-[#667085] text-base">Your store is ready to be built.</p>
                    </div>
                );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-[2000] flex overflow-hidden"
        >
            <div className="flex w-full h-full">
                {/* Left Side - Marketing */}
                <div className="flex-1 bg-zellyo-green text-white p-15 flex flex-col justify-between relative max-md:hidden">
                    <div>
                        <img src="/Logo White.png" alt="Zellyo" className="h-12 w-auto" />
                    </div>

                    <div className="max-w-[480px] mb-10">
                        <h1 className="text-5xl font-bold leading-tight mb-6">Fast, Easy, and Scalable</h1>
                        <p className="text-lg opacity-80 leading-relaxed mb-10">
                            The no-code engine powering the next generation of
                            e-commerce moguls.
                        </p>

                        <div className="flex gap-3 items-center">
                            <span className="h-0.5 w-12 bg-white rounded"></span>
                            <span className="h-0.5 w-6 bg-white/30 rounded"></span>
                            <span className="h-0.5 w-6 bg-white/30 rounded"></span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-[1.1] bg-zellyo-cream flex items-center justify-center relative p-10 overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-7 right-7 text-[#667085] p-2 rounded-full hover:bg-black/5 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full max-w-[440px] flex flex-col items-center">
                        {renderStep()}

                        <div className="flex gap-6 mt-auto pt-10">
                            <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-wider hover:text-zellyo-green transition-colors">PRIVACY POLICY</a>
                            <a href="#" className="text-[#98A2B3] text-sm font-bold tracking-wider hover:text-zellyo-green transition-colors">TERMS</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;
