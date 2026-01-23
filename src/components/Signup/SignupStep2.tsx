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

            <button className="login-submit-btn verify-btn" onClick={onContinue}>
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
    );
};

export default SignupStep2;
