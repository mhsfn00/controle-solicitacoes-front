import styles from "./BoardMemberCard.module.css";

type MemberProps = {
    type: string;
    name: string;
    institution: string;
    title: string;
}

const BoardMemberCard: React.FC<MemberProps> = ({ type, name, institution, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <strong className={styles.primary}>{type}</strong> 
                <p className={styles.secondary}>{name}</p>
            </div>
            <div className={styles.institution}>
                <strong className={styles.primary}>Instituição de Origem</strong> 
                <p className={styles.secondary}>{institution}</p>
            </div>
            <div className={styles.title}>
                <strong className={styles.primary}>Titularidade</strong>
                <p className={styles.secondary}>{title}</p>
            </div>
        </div>
    )
}

export default BoardMemberCard;