import { classNames } from "@/shared/lib";
import * as styles from "./MainPage.module.scss";
import { useGetStocksQuery } from "@/entities/Stock";
import { StocksList } from "@/entities/Stock";

interface MainPageProps {
  className?: string
}

export const MainPage = ({ className }: MainPageProps) => {
  const { data, isLoading, isError } = useGetStocksQuery();

  return(
    <div className={classNames(styles.MainPage, {}, [className])}>
      <h1>Main page</h1>

      <StocksList stocks={data} />
    </div>
  )
}
