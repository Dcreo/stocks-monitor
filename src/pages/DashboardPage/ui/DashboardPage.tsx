import { classNames } from "@/shared/lib";
import * as styles from "./DashboardPage.module.scss";

interface DashboardPageProps {
  className?: string
}

export const DashboardPage = ({ className }: DashboardPageProps) => {
  return(
    <div className={classNames(styles.DashboardPage, {}, [className])}>
      <h1>Dashboard page</h1>
      sdfsdf
    </div>
  )
}
