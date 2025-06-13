import { classNames } from "@/shared/lib";
import * as styles from "./StocksList.module.scss";
import { Stock } from "../../model/types/Stock";
import { StockCard } from "../StockCard/StockCard";

interface StocksListProps {
  className?: string;
  stocks: Stock[];
}

export const StocksList = ({ className, stocks }: StocksListProps) => {
  return(
    <div className={classNames(styles.StocksList, {}, [className])}>
      {stocks && (
        stocks.map((stock: Stock) => {
          return <StockCard stock={stock} />
        })
      )}
    </div>
  )
}
