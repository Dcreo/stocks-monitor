import * as styles from "./CreateStockPositionForm.module.scss";
import { useEffect, useState } from "react";
import { 
  classNames, 
  isNumber, 
  Validator, 
  ValidatorErrors,
  ValidatorRules
} from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { StockPosition, StockPositionValidationMessages } from "@/entities/StockPosition";
import { Button, Input } from "@/shared/ui";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  const [stock, setStock] = useState<Stock>();
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  const [validator, setValidator] = useState<Validator>(
    new Validator(StockPositionValidationMessages)
  );
  const [touchValidator, setTouchValidator] = useState<boolean>(false);
  
  const onStockChangeHandler = (stock: Stock) => {
    setStock(stock);
    setStockPosition({...stockPosition,  stockId: stock.id})
  }

  const onStocksNumberChangeHandler = (stocksNumber: string) => {
    setStockPosition({ ...stockPosition, stocksNumber: Number(stocksNumber)})
  }

  const onAveragePriceChangeHandler = (averagePrice: string) => {
    console.warn(Number(averagePrice))
    if (!isNumber(Number(averagePrice))) return
    setStockPosition({ ...stockPosition, averagePrice: Number(averagePrice)})
  }

  const validate = () => {
    validator.call(
      stockPosition, 
      "stockId", 
      [ValidatorRules.REQUIRED]
    );
    
    validator.call(
      stockPosition, 
      "stocksNumber", 
      [
        ValidatorRules.REQUIRED, 
        ValidatorRules.IS_NUMBER
      ]
    );

    validator.call(
      stockPosition, 
      "averagePrice", 
      [ValidatorRules.REQUIRED]
    );

    setTouchValidator(prev => !prev)
  }

  useEffect(() => {
    validate(); 
  }, [stockPosition]);

  // useEffect(() => {
  //   setValidator(validator);
  // }, [validator])

  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      {JSON.stringify(stockPosition)}
      <Autocomplete 
        action={"/stocks/search"} 
        onSelect={onStockChangeHandler} 
        value={stock?.name}
        hasError={validator?.stockId?.errors?.length}
        errorMessage={validator?.stockId?.messages[0]}
      />

      <Input 
        onChange={onStocksNumberChangeHandler} 
        hasError={validator?.stocksNumber?.errors?.length}
        errorMessage={validator?.stocksNumber?.messages[0]}
        value={stockPosition?.stocksNumber} 
      />
      
      <Input 
        onChange={onAveragePriceChangeHandler} 
        value={stockPosition?.averagePrice} 
        hasError={validator?.averagePrice?.errors?.length}
        errorMessage={validator?.averagePrice?.messages[0]}
      />

      <Button disabled={false}>Add Stock Position</Button>
    </div>
  )
}
