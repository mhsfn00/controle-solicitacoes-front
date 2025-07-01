import styles from "./ProgressStepper.module.css";
import { Check } from "lucide-react";

interface Step {
    id: number;
    label: string;
    text: string;
}

interface StepperProps {
    steps: Step[];
    currentStep: number;
}

const ProgressStepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className={styles.stepperContainer}>
            {steps.map((step) => (
                <div key={step.id} className={styles.step}>
                    <div className={step.id <= currentStep ? `${styles.stepCircle} ${styles.active}` : styles.stepCircle }>
                        {currentStep > step.id ? (<Check className="h-5 w-5"/>) : step.label}
                    </div>
                    <p className={styles.stepText}>
                        {step.text}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default ProgressStepper;