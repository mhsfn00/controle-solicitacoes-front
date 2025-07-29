import styles from "./AttatchmentCard.module.css";

type CardProps = {
    title: string;
    subTitle: string;
}

const AttatchmentCard: React.FC<CardProps> = ({ title, subTitle }) => {
    return (
        <div className={styles.fileContainer}>
            <div className={styles.icon}>
                <img src="/src/assets/icons/pdf-icon.svg"/>
            </div>
            <div className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>
            </div>
        </div>
    )
}

export default AttatchmentCard;