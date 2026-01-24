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
            <div className="text-left w-full mb-8">
                <h2 className="text-[32px] font-bold text-[#101828] mb-2">What's your store name?</h2>
                <p className="text-[#667085] text-base">Don't worry, you can always change this later in your dashboard settings.</p>
            </div>

            <div className="w-full mb-5 flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1a4d3c]">Store Name</label>
                <input
                    type="text"
                    placeholder="e.g. Shamil's Shoe Store"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full px-3.5 py-3 border border-[#D0D5DD] rounded-lg text-base bg-white transition-all focus:outline-none focus:border-zellyo-green focus:ring-4 focus:ring-zellyo-green/10"
                />
            </div>

            <button
                onClick={onContinue}
                className="w-full px-3 py-3 bg-zellyo-green text-white rounded-lg text-base font-bold mb-4 hover:bg-zellyo-green-dark transition-all flex items-center justify-center gap-3"
            >
                Continue
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>

            <div className="flex items-center gap-2 mt-4 text-[#667085] text-[13px] font-medium">
                <div className="w-[18px] h-[18px] bg-[#1a4d3c] rounded-full flex items-center justify-center text-white">
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
