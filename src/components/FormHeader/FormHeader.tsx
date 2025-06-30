import styles from './FormHeader.module.css';

interface FormHeaderProps {
    title: string;
    subTitle: string;
}

const FormHeader = ({ title, subTitle}: FormHeaderProps) => (
  <nav className={styles.formHeaderContainer}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subTitle}>{subTitle}</p>
  </nav>
);

export default FormHeader;
