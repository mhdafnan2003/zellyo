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
            <div className="w-full mb-10">
                <div className="flex items-center gap-5 text-xs font-bold text-[#1a4d3c] mb-8">
                    <span>STEP 1 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded overflow-hidden">
                        <div className="h-full bg-zellyo-green rounded transition-all duration-300" style={{ width: '33%' }}></div>
                    </div>
                </div>
            </div>

            <div className="text-left w-full mb-8">
                <h2 className="text-4xl font-bold text-[#101828] mb-3">Where did you hear about Zellyo?</h2>
                <p className="text-base text-[#667085]">We'd love to know how you found us to improve our community.</p>
            </div>

            <div className="w-full flex flex-col gap-3 mb-10">
                {sources.map((option) => (
                    <div
                        key={option}
                        className={`w-full px-5 py-4 border rounded-lg flex items-center justify-between bg-white cursor-pointer transition-all font-semibold ${selectedSource === option
                                ? 'border-zellyo-green border-2 p-[15px] text-[#101828]'
                                : 'border-[#EAECF0] text-[#344054] hover:border-zellyo-green hover:bg-[#F9FAFB]'
                            }`}
                        onClick={() => setSelectedSource(option)}
                    >
                        <span>{option}</span>
                        <div className={`w-5 h-5 border rounded-full flex items-center justify-center text-white transition-all ${selectedSource === option
                                ? 'bg-zellyo-green border-zellyo-green'
                                : 'border-[#D0D5DD]'
                            }`}>
                            {selectedSource === option && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-center justify-between mb-10">
                <button
                    onClick={onContinue}
                    className="text-[#667085] text-sm font-semibold hover:text-[#1a4d3c] transition-colors"
                >
                    Skip for now
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

export default SignupStep4;
