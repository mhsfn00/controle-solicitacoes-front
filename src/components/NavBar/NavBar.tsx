import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbarContainer}>
    <Link to="/">Início</Link>
    <Link to="/defenseRequest">Solicitação de Defesa</Link>
    <Link to="/professor">Registro de Professores</Link>
    <Link to="/aluno">Registro de Alunos</Link>
    <Link to="/external-member">Registro de Membro Externo</Link>
  </nav>
);

export default Navbar;
