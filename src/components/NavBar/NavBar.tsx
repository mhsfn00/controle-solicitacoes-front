import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { LogOutIcon } from "lucide-react";
import { routes } from "@/routes";

const links = [
  routes.home,
  routes.defenseRequest,
  routes.professor,
  routes.aluno,
  routes.course,
  routes.externalMember,
  routes.academicsRequests
];

const Navbar: React.FC = () => (
  <nav className={styles.navbarContainer}>
    <div className={styles.navHeader}>
      <img src="src/assets/icons/logo.svg" alt="logo" />
      SPPCU
    </div>
    {links.map((item) => (
      <Link className={styles.navButton} to={item.path}>
        {item.icon}
        {item.label}
      </Link>
    ))}

    <Link className={`${styles.navButton} ${styles.navButtonRed}`} to="/">
      <LogOutIcon />
      Sair
    </Link>
  </nav>
);

export default Navbar;
