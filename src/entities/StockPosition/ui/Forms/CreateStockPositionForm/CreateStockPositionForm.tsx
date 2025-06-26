import * as styles from "./CreateStockPositionForm.module.scss";
import { useState } from "react";
import { classNames, } from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { FormFields, StockPosition } from "@/entities/StockPosition";
import { Input } from "@/shared/ui";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  const [stock, setStock] = useState<Stock>();
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  
  const onStockChangeHandler = (stock: Stock) => {
    console.warn("CHANGE SELECT")
    setStock(stock);
    setStockPosition({...stockPosition,  stockId: stock.id})
  }

  const onStocksNumberChangeHandler = (stocksNumber: string) => {
    setStockPosition({ ...stockPosition, stocksNumber: Number(stocksNumber)})
  }

  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      {JSON.stringify(stockPosition)}
      <Autocomplete 
        action={"/stocks/search"} 
        onSelect={onStockChangeHandler} 
        value={stock?.name}
      />

      <Input 
        onChange={onStocksNumberChangeHandler} 
        value={stockPosition?.stocksNumber} 
      />
    </div>
  )
}
