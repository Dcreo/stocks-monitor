import { LoginModal, useAuthData } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isLoggedIn, username, logout } = useAuthData();

  return(
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.menu}>
        <NavLink to="/">Main page</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div className={styles.userInfo}>
        <div>
          { !isLoggedIn ? <LoginModal /> : username }
        </div>
        { isLoggedIn && (
          <div className={styles.logout} onClick={logout}>Logout</div>
        )}
      </div>
    </div>
  )
}
