import { LoginModal, useAuthData } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isLoggedIn, username } = useAuthData();

  return(
    <div className={classNames(styles.Navbar, {}, [className])}>
      { !isLoggedIn && <LoginModal /> }
      { isLoggedIn && (
        <>
          <div>{username}</div>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </>
      )}
    </div>
  )
}
