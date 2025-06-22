import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionsPage.module.scss";

interface StockPositionsPageProps {
  className?: string
}

export const StockPositionsPage = ({ className }: StockPositionsPageProps) => {
  return(
    <div className={classNames(styles.StockPositionsPage, {}, [className])}>
      <h1>Stock Positions</h1>
    </div>
  )
}
