import { useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionsPage.module.scss";
import { StockPositionModal } from "@/entities/StockPosition";

interface StockPositionsPageProps {
  className?: string
}

export const StockPositionsPage = ({ className }: StockPositionsPageProps) => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);

  return(
    <div className={classNames(styles.StockPositionsPage, {}, [className])}>
      <h1>Stock Positions</h1>
      <span 
        onClick={() => setCreateModalIsOpen(true)} 
        className={styles.link}>
        Add stock position
      </span> 

      <StockPositionModal 
        isOpen={createModalIsOpen} 
        onClose={() => setCreateModalIsOpen(false)} />
    </div>
  )
}
