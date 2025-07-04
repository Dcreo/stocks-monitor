import { classNames } from "@/shared/lib";
import * as styles from "./MainPage.module.scss";

interface MainPageProps {
  className?: string
}

export const MainPage = ({ className }: MainPageProps) => {

  return(
    <div className={classNames(styles.MainPage, {}, [className])}>
      <h1>Main Page</h1>

    </div>
  )
}
