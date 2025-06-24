import * as styles from "./CreateStockPositionForm.module.scss";
import { useState } from "react";
import { classNames, } from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { StockPosition } from "@/entities/StockPosition";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  
  const onStockSelect = (stock: Stock) => {
    setStockPosition({ stockId: stock.id})
  }

  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      {JSON.stringify(stockPosition)}
      <Autocomplete action={"/stocks/search"} onSelect={onStockSelect} />
    </div>
  )
}
