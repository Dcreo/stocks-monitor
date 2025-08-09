import { useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionsPage.module.scss";
import { StockPositionModal, StockPositionTable } from "@/entities/StockPosition";
import { useGetStockPositionsQuery } from "@/entities/StockPosition";
import { CapitalStatistic } from "@/entities/StockPosition";
import { EOverflow } from "@/shared/ui/Modal/Modal";
import { ExportFormat } from "@/widgets";
import { EExportFormat } from "@/widgets/ExportFormat";

interface StockPositionsPageProps {
  className?: string
}

export const StockPositionsPage = ({ className }: StockPositionsPageProps) => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);
  const {data: stockPositions, isError, isLoading} = useGetStockPositionsQuery();

  const onExportFormatClickHandler = (format: EExportFormat) => {
    console.warn(format)
  }

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
        <>
          <ExportFormat 
            onClick={onExportFormatClickHandler}
            className={styles.exportFormat} />
          <StockPositionTable 
            stockPositions={stockPositions} 
            className={styles.table} />
        </>
      )}
    </div>
  )
}
