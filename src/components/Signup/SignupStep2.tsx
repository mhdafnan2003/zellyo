import React from 'react';

interface SignupStep2Props {
    email: string;
    verificationCode: string[];
    setVerificationCode: (code: string[]) => void;
    onContinue: () => void;
    onLoginClick: () => void;
}

const SignupStep2: React.FC<SignupStep2Props> = ({
    email,
    verificationCode,
    setVerificationCode,
    onContinue,
    onLoginClick,
}) => {
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
        <>
            <div className="text-center mb-8">
                <h2 className="text-[32px] font-bold text-[#101828] mb-2">Verify your Email</h2>
                <p className="text-[#667085] text-base leading-6">
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
                        className="w-[70px] h-20 border border-[#D0D5DD] rounded-xl text-[32px] text-center font-bold text-[#101828] bg-white transition-all focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10"
                    />
                ))}
            </div>

            <button
                onClick={onContinue}
                className="w-full px-3 py-3 bg-zellyo-green text-white rounded-lg text-base font-bold mb-8 hover:bg-zellyo-green-dark transition-all"
            >
                Verify & Continue
            </button>

            <p className="text-sm text-[#667085] mb-10">
                Didn't receive the code? <button className="text-[#1a4d3c] font-bold">Resend code</button>
            </p>

            <div className="mb-15">
                <button onClick={onLoginClick} className="flex items-center gap-2.5 text-[#667085] text-sm font-semibold hover:text-zellyo-green transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to login
                </button>
            </div>
        </>
    );
};

export default SignupStep2;
