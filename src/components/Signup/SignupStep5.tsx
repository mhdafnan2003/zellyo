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
            <div className="w-full mb-10">
                <div className="flex items-center gap-5 text-xs font-bold text-[#1a4d3c] mb-8">
                    <span>STEP 2 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded overflow-hidden">
                        <div className="h-full bg-zellyo-green rounded transition-all duration-300" style={{ width: '66%' }}></div>
                    </div>
                </div>
            </div>

            <div className="text-left w-full mb-8">
                <h2 className="text-4xl font-bold text-[#101828] mb-3">What are you selling?</h2>
                <p className="text-base text-[#667085]">We'll help you pick the best theme based on your niche.</p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className={`flex-[0_0_calc(33.333%-11px)] p-4 border rounded-lg flex items-start justify-between bg-white cursor-pointer transition-all min-h-[80px] ${selectedCategory === cat.id
                                ? 'border-zellyo-green border-2 p-[15px] bg-[#F9FAFB]'
                                : 'border-[#EAECF0] hover:border-zellyo-green'
                            }`}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#101828]">{cat.label}</span>
                            <span className="text-xs text-[#667085] font-medium">{cat.sub}</span>
                        </div>
                        <div className={`w-4 h-4 border rounded-full flex items-center justify-center text-white transition-all flex-shrink-0 ${selectedCategory === cat.id
                                ? 'bg-zellyo-green border-zellyo-green'
                                : 'border-[#D0D5DD]'
                            }`}>
                            {selectedCategory === cat.id && (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-center justify-between mb-10">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2.5 px-8 py-3 border border-zellyo-green rounded-lg bg-transparent text-[#1a4d3c] font-semibold text-base hover:bg-zellyo-green/5 transition-all"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                </button>
                <button
                    onClick={onContinue}
                    className="px-10 py-3 bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-all flex items-center gap-3"
                >
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
