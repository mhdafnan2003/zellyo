import React from 'react';

interface SignupStep5Props {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    onContinue: () => void;
    onBack: () => void;
}

const SignupStep5: React.FC<SignupStep5Props> = ({
    selectedCategory,
    setSelectedCategory,
    onContinue,
    onBack,
}) => {
    const categories = [
        { id: 'fashion', label: 'Fashion', sub: 'Clothing, shoes, jewelry' },
        { id: 'tech', label: 'Tech', sub: 'Gadgets, electronics, etc' },
        { id: 'food', label: 'Food & Drink', sub: 'Groceries, beverages' },
        { id: 'beauty', label: 'Beauty & Health', sub: 'Skincare, makeup, vitamins' },
        { id: 'other', label: 'Other', sub: 'something unique' }
    ];

    return (
        <>
            <div className="progress-container">
                <div className="progress-header">
                    <span>STEP 2 OF 3</span>
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-fill" style={{ width: '66%' }}></div>
                    </div>
                </div>
            </div>

            <div className="form-header left-align">
                <h2 className="survey-title">What are you selling?</h2>
                <p className="survey-subtitle">We'll help you pick the best theme based on your niche.</p>
            </div>

            <div className="category-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className={`category-card ${selectedCategory === cat.id ? 'active' : ''} ${cat.id === 'beauty' || cat.id === 'other' ? 'centered-row' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <div className="card-content">
                            <span className="cat-label">{cat.label}</span>
                            <span className="cat-sub">{cat.sub}</span>
                        </div>
                        <div className="check-circle-outline small">
                            {selectedCategory === cat.id && (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
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

export default SignupStep5;
