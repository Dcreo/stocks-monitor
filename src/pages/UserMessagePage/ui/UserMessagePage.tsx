import { classNames } from "@/shared/lib";
import * as styles from "./UserMessagePage.module.scss";

interface UserMessagePageProps {
  className?: string
}

export const UserMessagePage = ({ className }: UserMessagePageProps) => {
  return(
    <div className={classNames(styles.UserMessagePage, {}, [className])}>
      <h1>Message with ID</h1>
    </div>
  )
}
