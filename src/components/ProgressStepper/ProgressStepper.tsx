import styles from "./ProgressStepper.module.css";

const ProgressStepper: React.FC = () => {


    return (
        <div className={styles.stepperContainer}>
            <hr className={styles.line}/>
            <div className={styles.step}>
                <div className={styles.stepCircle}>1</div>
                <p className={styles.stepText}>Step - Text</p>
            </div>
            <div className={styles.step}>
                <div className={styles.stepCircle}>2</div>
                <p className={styles.stepText}>Step - Text</p>
            </div>
            <div className={styles.step}>
                <div className={styles.stepCircle}>3</div>
                <p className={styles.stepText}>Step - Text</p>
            </div>
        </div>
    )
}
export default ProgressStepper;