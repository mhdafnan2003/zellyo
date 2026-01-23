import React from 'react';

interface SignupStep3Props {
    storeName: string;
    setStoreName: (name: string) => void;
    onContinue: () => void;
}

const SignupStep3: React.FC<SignupStep3Props> = ({
    storeName,
    setStoreName,
    onContinue,
}) => {
    return (
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

            <button className="login-submit-btn continue-arrow-btn" onClick={onContinue}>
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
    );
};

export default SignupStep3;
