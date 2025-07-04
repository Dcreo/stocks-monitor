import { classNames } from "@/shared/lib";
import { StocksList } from "@/entities/Stock";
import * as styles from "./StocksPage.module.scss";
import { useGetStocksQuery } from "@/entities/Stock";

interface StocksPageProps {
  className?: string
}

export const StocksPage = ({ className }: StocksPageProps) => {
  const { data, isLoading, isError } = useGetStocksQuery();

  return(
    <div className={classNames(styles.StocksPage, {}, [className])}>
      <h1>Stocks</h1>
      <StocksList stocks={data} />
    </div>
  )
}
