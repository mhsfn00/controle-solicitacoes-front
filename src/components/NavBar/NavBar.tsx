import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav>
    <Link to="/">Início</Link> | 
    <Link to="/defenseRequest">Solicitação de Defesa</Link>
  </nav>
);

export default Navbar;
