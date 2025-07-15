import { useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionsPage.module.scss";
import { StockPositionModal, StockPositionTable } from "@/entities/StockPosition";
import { useGetStockPositionsQuery } from "@/entities/StockPosition";
import { CapitalStatistic } from "@/entities/StockPosition";

interface StockPositionsPageProps {
  className?: string
}

export const StockPositionsPage = ({ className }: StockPositionsPageProps) => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const {data: stockPositions, isError, isLoading} = useGetStockPositionsQuery();

  return(
    <div className={classNames(styles.StockPositionsPage, {}, [className])}>
      <h1>Stock Positions</h1>
      <span 
        onClick={() => setCreateModalIsOpen(true)} 
        className={styles.link}>
        Add stock position
      </span> 

      <CapitalStatistic className={styles.capitalStatistic} />

      <StockPositionModal 
        isOpen={createModalIsOpen} 
        onClose={() => setCreateModalIsOpen(false)} />

      {!!stockPositions?.length && (
        <StockPositionTable 
          stockPositions={stockPositions} 
          className={styles.table} />
        )
      }
    </div>
  )
}
