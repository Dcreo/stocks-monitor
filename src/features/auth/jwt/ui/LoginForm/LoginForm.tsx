import { classNames } from "@/shared/lib";
import * as styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return(
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <form>
        <input type="text" name="email" /> 
        <input type="password" name="passwor" />
        <input type="submit" />
      </form>
    </div>
  )
}
