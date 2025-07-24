import * as styles from "./CreateStockPositionForm.module.scss";
import { useEffect, useState } from "react";
import { classNames, isNumber, } from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { StockPosition, StockPositionValidatorOptions } from "@/entities/StockPosition";
import { Button, Input } from "@/shared/ui";
import { useCreateStockPositionMutation } from "@/entities/StockPosition";
import { useTermitValidator } from "@/shared/hooks";

interface CreateStockPositionFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const CreateStockPositionForm = (props: CreateStockPositionFormProps) => {
  const { 
    className, 
    onSuccess 
  } = props;

  const [stock, setStock] = useState<Stock>();
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  const [createStockPosition, { isSuccess, isLoading }] = useCreateStockPositionMutation()

  const { validator } = useTermitValidator<StockPosition>(stockPosition, StockPositionValidatorOptions)

  const onStockChangeHandler = (stock: Stock) => {
    setStock(stock);
    setStockPosition({...stockPosition,  stockId: stock.id})
  }

  const onStocksNumberChangeHandler = (stocksNumber: string) => {
    setStockPosition({ ...stockPosition, stocksNumber: Number(stocksNumber)})
  }

  const onAveragePriceChangeHandler = (averagePrice: string) => {
    if (!isNumber(Number(averagePrice))) return
    setStockPosition({ ...stockPosition, averagePrice: Number(averagePrice)})
  }

  const createStockPositionHandler = () => {
    createStockPosition(stockPosition);
  }

  useEffect(() => {
    if (!!isSuccess && onSuccess) onSuccess(); 
  }, [isSuccess])

  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      {JSON.stringify(stockPosition)}
      <div>
        <Autocomplete 
          action={"/stocks/search"} 
          onSelect={onStockChangeHandler} 
          value={stock?.name}
          hasError={validator?.stockId?.errors?.length}
          className={styles.input}
          errorMessage={validator?.stockId?.messages[0]}
        />
      </div>

      <div>
        <Input 
          onChange={onStocksNumberChangeHandler} 
          hasError={validator?.stocksNumber?.errors?.length}
          errorMessage={validator?.stocksNumber?.messages[0]}
          className={styles.input}
          value={stockPosition?.stocksNumber} 
        />
      </div>
      
      <div>
        <Input 
          onChange={onAveragePriceChangeHandler} 
          value={stockPosition?.averagePrice} 
          hasError={validator?.averagePrice?.errors?.length}
          className={styles.input}
          errorMessage={validator?.averagePrice?.messages[0]}
        />
      </div>

      <Button 
        disabled={isLoading || validator.hasErrors()} 
        onClick={createStockPositionHandler}
        className={styles.button}>
        Add Stock Position
      </Button>
    </div>
  )
}
