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
            <div className="w-full mb-10">
                <div className="flex items-center gap-5 text-xs font-bold text-[#1a4d3c] mb-8">
                    <span>STEP 3 OF 3</span>
                    <div className="flex-1 h-1 bg-[#EBF3EF] rounded overflow-hidden">
                        <div className="h-full bg-zellyo-green rounded transition-all duration-300" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>

            <div className="text-left w-full mb-8">
                <h2 className="text-4xl font-bold text-[#101828] mb-3">What is your monthly goal?</h2>
                <p className="text-base text-[#667085]">Help us tailor your dashboard by setting a realistic target for your shop's performance.</p>
            </div>

            <div className="w-full flex flex-col gap-4 mb-10">
                {goals.map((goal) => (
                    <div
                        key={goal.id}
                        className={`w-full px-5 py-4 border rounded-xl flex items-center gap-5 bg-white cursor-pointer transition-all ${selectedGoal === goal.id
                                ? 'border-zellyo-green border-2 p-[15px]'
                                : 'border-[#EAECF0] hover:border-zellyo-green hover:bg-[#F9FAFB]'
                            }`}
                        onClick={() => setSelectedGoal(goal.id)}
                    >
                        <div className="w-12 h-12 border border-[#EAECF0] rounded-lg flex items-center justify-center text-[#667085] bg-white transition-all">
                            {goal.icon}
                        </div>
                        <div className="flex flex-col gap-0.5 flex-1">
                            <span className="text-base font-bold text-[#101828]">{goal.label}</span>
                            <span className="text-sm text-[#667085] font-medium">{goal.sub}</span>
                        </div>
                        <div className={`w-5 h-5 border rounded-full flex items-center justify-center text-white transition-all ${selectedGoal === goal.id
                                ? 'bg-zellyo-green border-zellyo-green'
                                : 'border-[#D0D5DD]'
                            }`}>
                            {selectedGoal === goal.id && (
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
                    onClick={onComplete}
                    className="px-10 py-3 bg-zellyo-green text-white rounded-lg text-base font-bold hover:bg-zellyo-green-dark transition-all"
                >
                    Complete Setup
                </button>
            </div>
        </>
    );
};

export default SignupStep6;
