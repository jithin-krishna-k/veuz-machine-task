import React from "react";

// eslint-disable-next-line react/prop-types
const StepProgress = ({ currentStep }) => {
    const steps = [1, 2, 3, 4];

    return (
        <div className="flex items-center gap-2">
            {steps.map((step, index) => {
                const isLastStep = step === steps[steps.length - 1];
                const isCompleted =
                    step < currentStep || (isLastStep && step === currentStep);
                const isActive = step === currentStep;

                return (
                    <React.Fragment key={step}>
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold 
              ${isCompleted || isActive
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                        >
                            {isCompleted ? (
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                step
                            )}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`h-1 w-10 rounded-sm 
                ${step < currentStep ? "bg-green-600" : "bg-gray-200"}`}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default StepProgress;
