import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { routes } from "@/routes";
import { useAuth } from "@/auth/AuthContext";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const {logout, hasRole} = useAuth();
  const links = Object.values(routes.app).filter(link => !link.role || hasRole(link.role));

  return(
    <nav className="h-screen w-64 flex flex-col sticky left-0 top-0 bg-secondary p-4">
      <div className="flex gap-2 items-center font-semibold my-5">
        <img src="src/assets/icons/logo.svg" alt="logo" />
        SPPCU
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {links.map((item) => (
            <Button asChild className="w-full flex justify-start">
              <Link to={item.path}>
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </div>

        <Button onClick={logout} variant="destructive" className="flex justify-start">
          <LogOutIcon />
          Sair
        </Button>
      </div>
    </nav>
  )
};

export default Navbar;
