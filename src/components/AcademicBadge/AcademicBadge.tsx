import styles from "./AcademicBadge.module.css";

type BadgeProps = {
    title: "graduando" | "mestrando" | "doutorando";
}

const DefenseApprovalPage: React.FC<BadgeProps> = ({ title }) => {
    return(
        <div className={styles.container}>
            <p>{title}</p>
        </div>
    )
} 

export default DefenseApprovalPage;