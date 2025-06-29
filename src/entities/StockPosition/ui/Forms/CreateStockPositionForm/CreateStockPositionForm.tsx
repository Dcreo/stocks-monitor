import * as styles from "./CreateStockPositionForm.module.scss";
import { useEffect, useState } from "react";
import { 
  classNames, 
  isNumber, 
  Validator, 
  ValidatorRules as VRules
} from "@/shared/lib";
import { Autocomplete } from "@/features/autocomplete";
import { Stock } from "@/entities/Stock";
import { StockPosition, StockPositionValidationMessages } from "@/entities/StockPosition";
import { Button, Input } from "@/shared/ui";
import { useCreateStockPositionMutation } from "@/entities/StockPosition";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  const [stock, setStock] = useState<Stock>();
  const [stockPosition, setStockPosition] = useState<StockPosition>({});
  const [createStockPosition, result] = useCreateStockPositionMutation()

  // TODO move validator to hooks
  const [validator] = useState<Validator>(
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
    validator.call(stockPosition, "stockId", 
      [VRules.REQUIRED]
    );
    
    validator.call(stockPosition, "stocksNumber", 
      [VRules.REQUIRED, VRules.IS_NUMBER]
    );

    validator.call(stockPosition, "averagePrice", 
      [VRules.REQUIRED]
    );

    setTouchValidator(prev => !prev)
  }

  const createStockPositionHandler = () => {
    createStockPosition(stockPosition);
  }

  useEffect(() => {
    validate(); 
  }, [stockPosition]);

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
        disabled={false} 
        onClick={createStockPositionHandler}
        className={styles.button}>
        Add Stock Position
      </Button>
    </div>
  )
}
