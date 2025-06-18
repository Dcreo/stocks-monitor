import { LoginModal, useAuth } from "@/features/auth/jwt";
import { classNames } from "@/shared/lib";
import * as styles from "./Navbar.module.scss";
import { useAppSelector } from "@/shared/hooks";
import { getAuthData } from "@/features/auth/jwt";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isLoggedIn, username } = useAuth();

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
