import { LoginModal, useAuthData } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";

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
        </>
      )}
    </div>
  )
}
