import { classNames, Mods } from "@/shared/lib";
import * as styles from "./CapitalStatistic.module.scss";
import { useGetCapitalStatisticQuery } from "../../model/services/stockPositionApi";
import { TextLine } from "@/shared/ui";
import { ECurrencySymbol } from "@/entities/Currency";
import { SimpleChart } from "@/widgets/Charts";
import { MdLegendToggle } from "react-icons/md";
import { RxLetterCaseToggle } from "react-icons/rx";
import { useState } from "react";


interface CapitalStatisticProps {
  className?: string
}

export const CapitalStatistic = ({ className }: CapitalStatisticProps) => {
  const [showChart, setShowChart] = useState<boolean>(false)

  const { data, isError, isLoading} = useGetCapitalStatisticQuery();

  const toggleStatistic = (): void => {
    setShowChart(prev => !prev);
  }

  const mods: Mods = {
    [styles.withChart]: !!showChart
  }

  return(
    <div className={classNames(styles.CapitalStatistic, mods, [className])}>
      <div className={styles.toggler}>
        {!showChart && (
          <MdLegendToggle 
            onClick={toggleStatistic} />
        )}

        {!!showChart && (
          <RxLetterCaseToggle 
            onClick={toggleStatistic} />
        )}
      </div>

      {!!showChart && (
        <SimpleChart />
      )}

      {!showChart && (
        <>
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
        </>
      )}
    </div>
  )
}
