import { classNames } from "@/shared/lib";
import * as styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return(
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      <h1>404 Page not Found</h1>
    </div>
  )
}
