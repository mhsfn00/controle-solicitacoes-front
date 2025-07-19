import styles from "./PageTitle.module.css"

export type PageTitleProps = {
    title: string
}


export const PageTitle = (
    { title }: PageTitleProps
): React.ReactElement => (
        <div className={styles.pageTitle}>
            {title}
        </div>
)