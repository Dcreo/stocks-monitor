import * as styles from "./CreateStockPositionForm.module.scss";
import { useEffect, useState } from "react";
import { classNames, } from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { StockPosition, StockPositionValidationErrors } from "@/entities/StockPosition";
import { Button, Input } from "@/shared/ui";
import { ValidationErrors } from "@/entities/StockPosition";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  const [stock, setStock] = useState<Stock>();
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  const [validationErrors, setValidationErrors] = useState<StockPositionValidationErrors>({});
  
  const onStockChangeHandler = (stock: Stock) => {
    setStock(stock);
    setStockPosition({...stockPosition,  stockId: stock.id})
  }

  const onStocksNumberChangeHandler = (stocksNumber: string) => {
    setStockPosition({ ...stockPosition, stocksNumber: Number(stocksNumber)})
  }

  const onAveragePriceChangeHandler = (averagePrice: string) => {
    setStockPosition({ ...stockPosition, averagePrice: Number(averagePrice)})
  }

  const validate = () => {
    setValidationErrors({
      ...(!stockPosition.stockId && {stockId: ValidationErrors.EMPTY}),
      ...(!stockPosition.stocksNumber && {stocksNumber: ValidationErrors.EMPTY}),
      ...(!stockPosition.averagePrice && {averagePrice: ValidationErrors.EMPTY}),
    })
  }

  useEffect(() => {
    validate(); 
  }, [stockPosition]);

  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      {JSON.stringify(stockPosition)}
      {JSON.stringify(validationErrors)}
      <Autocomplete 
        action={"/stocks/search"} 
        onSelect={onStockChangeHandler} 
        value={stock?.name}
        hasError={!!validationErrors?.stockId}
        errorMessage={validationErrors?.stockId}
      />

      <Input 
        onChange={onStocksNumberChangeHandler} 
        hasError={!!validationErrors?.stocksNumber}
        errorMessage={validationErrors?.stocksNumber}
        value={stockPosition?.stocksNumber} 
      />
      
      <Input 
        onChange={onAveragePriceChangeHandler} 
        value={stockPosition?.averagePrice} 
        hasError={!!validationErrors?.averagePrice}
        errorMessage={validationErrors?.averagePrice}
      />

      <Button disabled={!!Object.values(validationErrors)?.length}>Add Stock Position</Button>
    </div>
  )
}
