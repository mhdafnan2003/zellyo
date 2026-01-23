import React from 'react';

interface SignupStep4Props {
    selectedSource: string;
    setSelectedSource: (source: string) => void;
    onContinue: () => void;
}

const SignupStep4: React.FC<SignupStep4Props> = ({
    selectedSource,
    setSelectedSource,
    onContinue,
}) => {
    const sources = [
        "Social Media",
        "Search Engine",
        "Friend or Colleague",
        "Online Advertisement",
        "Other"
    ];

    return (
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
                {sources.map((option) => (
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
                <button className="skip-link-btn" onClick={onContinue}>Skip for now</button>
                <button className="login-submit-btn next-step-btn" onClick={onContinue}>
                    Next Step
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default SignupStep4;
