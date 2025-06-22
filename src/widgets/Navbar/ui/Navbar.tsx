import { LoginModal, useAuthData } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { RouteName, RoutePath } from "@/shared/config";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isLoggedIn, username, logout, authorize } = useAuthData();

  return(
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.menu}>
        {authorize?.can(RouteName.ROOT) && <NavLink to={RoutePath.ROOT}>Main page</NavLink>}
        {authorize?.can(RouteName.DASHBOARD) && <NavLink to={RoutePath.DASHBOARD}>Dashboard</NavLink>}
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
