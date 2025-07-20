import { LoginModal, useAuthData } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { RouteName, RoutePath } from "@/shared/config";
import { menuItems, MenuRouteName } from "../config/menuItems";
import { ReactNode } from "react";
import { UserMessages } from "@/entities/User";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isLoggedIn, username, logout, authorize } = useAuthData();

  const MenuItems = () => {
    const items: ReactNode[] = Object.keys(menuItems).map((routeName) => {
      const menuItem = menuItems[routeName as MenuRouteName];

      return(authorize?.can(routeName as RouteName) && <NavLink to={menuItem.path}>{menuItem.text}</NavLink>)
    })

    return items; 
  }

  return(
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.menu}>
        <MenuItems />
      </div>
      <div>
        { !isLoggedIn && <LoginModal /> }
      </div>
      {!!isLoggedIn && (
        <div className={styles.userInfo}>
          <UserMessages />
          { username }
          <div className={styles.logout} onClick={logout}>Logout</div>
        </div>
      )}
    </div>
  )
}
