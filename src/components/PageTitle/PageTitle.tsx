import styles from "./PageTitle.module.css"
import { GraduationCap, Shield } from "lucide-react"

export type PageTitleProps = {
    title: string;
    showShield: boolean;
}


export const PageTitle = (
    { title, showShield }: PageTitleProps
): React.ReactElement => (
        <div className={styles.pageTitle}>
            {showShield && (<div className={styles.background}>
                <GraduationCap size={20} strokeWidth={1.5} className={styles.cap}/>
                <Shield size={40} strokeWidth={1}  className={styles.shield}/>
            </div>)}
            <div>{title}</div>
        </div>
)