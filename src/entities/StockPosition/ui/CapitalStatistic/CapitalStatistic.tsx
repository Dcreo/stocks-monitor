import { classNames } from "@/shared/lib";
import * as styles from "./CapitalStatistic.module.scss";
import { useGetCapitalStatisticQuery } from "../../model/services/stockPositionApi";
import { TextLine } from "@/shared/ui";
import { ECurrencySymbol } from "@/entities/Currency";

interface CapitalStatisticProps {
  className?: string
}

export const CapitalStatistic = ({ className }: CapitalStatisticProps) => {
  const { data, isError, isLoading} = useGetCapitalStatisticQuery();

  return(
    <div className={classNames(styles.CapitalStatistic, {}, [className])}>
      <TextLine 
        label={"Base capital"}
        value={data?.baseCapital}
        symbol={ECurrencySymbol.USD} />

      <TextLine 
        label={"Current capital"}
        value={data?.currentCapital}
        symbol={ECurrencySymbol.USD} />
      
      <TextLine 
        label={"Profit"}
        value={data?.profit}
        symbol={ECurrencySymbol.USD} />
      
      <TextLine 
        label={"Percents"}
        value={data?.percents}
        symbol={"%"} />
    </div>
  )
}
