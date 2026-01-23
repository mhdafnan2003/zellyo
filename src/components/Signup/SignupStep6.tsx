import React from 'react';
import { Rocket, TrendingUp, Building2 } from 'lucide-react';

interface SignupStep6Props {
    selectedGoal: string;
    setSelectedGoal: (goal: string) => void;
    onComplete: () => void;
    onBack: () => void;
}

const SignupStep6: React.FC<SignupStep6Props> = ({
    selectedGoal,
    setSelectedGoal,
    onComplete,
    onBack,
}) => {
    const goals = [
        { id: 'starter', label: 'The Starter', sub: 'Upto to ₹ 15000 / month', icon: <Rocket size={24} /> },
        { id: 'scaler', label: 'The Scaler', sub: 'Upto to ₹ 25000 / month', icon: <TrendingUp size={24} /> },
        { id: 'enterprise', label: 'Enteprise', sub: 'Upto to ₹ 55000 / month', icon: <Building2 size={24} /> }
    ];

    return (
        <>
            <div className="progress-container">
                <div className="progress-header">
                    <span>STEP 3 OF 3</span>
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>

            <div className="form-header left-align">
                <h2 className="survey-title">What is your monthly goal?</h2>
                <p className="survey-subtitle">Help us tailor your dashboard by setting a realistic target for your shop's performance.</p>
            </div>

            <div className="goal-options">
                {goals.map((goal) => (
                    <div
                        key={goal.id}
                        className={`goal-card ${selectedGoal === goal.id ? 'active' : ''}`}
                        onClick={() => setSelectedGoal(goal.id)}
                    >
                        <div className="goal-icon-box">
                            {goal.icon}
                        </div>
                        <div className="goal-content">
                            <span className="goal-label">{goal.label}</span>
                            <span className="goal-sub">{goal.sub}</span>
                        </div>
                        <div className="check-circle-outline">
                            {selectedGoal === goal.id && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="survey-footer">
                <button className="back-nav-btn" onClick={onBack}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                </button>
                <button className="login-submit-btn complete-btn" onClick={onComplete}>
                    Complete Setup
                </button>
            </div>
        </>
    );
};

export default SignupStep6;
