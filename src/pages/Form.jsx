import { useState } from "react";
import FormComp from "../components/FormComp";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";
import StepProgress from "../components/StepProgress";
import ThankYou from "../components/ThankYou";
import NavBar from "../components/NavBar";
import RegistrationSummary from "../components/RegistrationSummary";

const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return <FormComp step={1} />;
            case 2:
                return <FormComp step={2} />;
            case 3:
                return <FormComp step={3} />;
            case 4:
                return <RegistrationSummary />;
            case 5:
                return <ThankYou />;
            default:
                return <FormComp step={1} />;
        }
    };

    return (
        <NavBar currentstep={currentStep}>
            <div className="relative w-full min-h-screen overflow-hidden">
                <img
                    src="/images/BgGradient.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="mt-10 mb-6">
                        <StepProgress currentStep={currentStep} />
                    </div>
                    <div className="w-full mx-auto flex gap-4 justify-center">
                        {renderFormStep()}
                    </div>
                    {currentStep < 5 && (
                        <div className="flex gap-4 justify-center mt-6 mb-10">
                            {currentStep > 1 && <PreviousButton onClick={handlePrevious} />}
                            <NextButton onClick={handleNext} />
                        </div>
                    )}
                </div>
            </div>
        </NavBar>
    );
};

export default Form;
