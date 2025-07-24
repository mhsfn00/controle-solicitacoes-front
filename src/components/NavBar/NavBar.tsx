import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import {
  BookOpenCheckIcon,
  CalendarIcon,
  GraduationCapIcon,
  LogOutIcon,
  UserRoundIcon,
  UserRoundPenIcon,
  UserRoundPlusIcon,
} from "lucide-react";

const Navbar: React.FC = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.navHeader}>
      <img src="src/assets/icons/logo.svg" alt="logo" />
      SPPCU
    </div>
    <Link className={styles.navButton} to="/">
      <CalendarIcon />
      Início
    </Link>
    <Link className={styles.navButton} to="/defenseRequest">
      <GraduationCapIcon />
      Solicitar de Defesa
    </Link>
    {/* <Link className={styles.navButton} to="/professor">
      <ScrollTextIcon />
      Solicitar Exame
    </Link> */}
    {/* <Link className={styles.navButton} to="/professor">
      <TableCellsMergeIcon />
      Visualizar Status
    </Link> */}
    {/* <Link className={styles.navButton} to="/professor">
      <UserRoundPenIcon />
      Editar Perfil
    </Link> */}
    <Link className={styles.navButton} to="/professor">
      <UserRoundPenIcon />
      Cadastrar Professor
    </Link>
    <Link className={styles.navButton} to="/aluno">
      <UserRoundIcon />
      Cadastrar Aluno
    </Link>
    <Link className={styles.navButton} to="/course">
      <BookOpenCheckIcon />
      Cadastrar Curso
    </Link>
    <Link className={styles.navButton} to="/external-member">
      <UserRoundPlusIcon />
      Registro de Membro Externo
    </Link>
    <Link className={`${styles.navButton} ${styles.navButtonRed}`} to="/">
      <LogOutIcon />
      Sair
    </Link>
  </nav>
);

export default Navbar;
