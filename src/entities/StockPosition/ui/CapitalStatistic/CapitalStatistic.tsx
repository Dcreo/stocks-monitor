import { classNames, Mods } from "@/shared/lib";
import * as styles from "./CapitalStatistic.module.scss";
import { useGetCapitalStatisticQuery } from "../../model/services/stockPositionApi";
import { TextLine } from "@/shared/ui";
import { ECurrencySymbol } from "@/entities/Currency";
import { SimpleChart } from "@/widgets/Charts";
import { MdLegendToggle } from "react-icons/md";
import { RxLetterCaseToggle } from "react-icons/rx";
import { useState } from "react";
import { useGetHistoryQuery } from "@/entities/Histrory";


interface CapitalStatisticProps {
  className?: string
}

export const CapitalStatistic = ({ className }: CapitalStatisticProps) => {
  const [showChart, setShowChart] = useState<boolean>(false)
  const {data: history, isError: isErrorHistory, isLoading: isLoadingHistory} = useGetHistoryQuery(undefined, {
    skip: !showChart
  })

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
        <SimpleChart data={history!} lines={[
          {
            type: "monotone",
            name: "Base capital",
            dataKey: "baseCapital",
            stroke: "#8884d8"
          },
          {
            type: "monotone",
            name: "Current capital",
            dataKey: "currentCapital",
            stroke: "#82ca9d"
          },
          {
            type: "monotone",
            name: "Profit",
            dataKey: "profit",
            stroke: "#E3E019"
          },
          {
            type: "monotone",
            name: "Percents",
            dataKey: "percents",
            stroke: "#E319E3"
          }
        ]}/>
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
