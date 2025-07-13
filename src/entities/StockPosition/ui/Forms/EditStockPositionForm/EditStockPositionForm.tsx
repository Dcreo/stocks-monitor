import { useEffect, useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./EditStockPositionForm.module.scss";
import { useSelector } from "react-redux";
import { Button, Input } from "@/shared/ui";
import { useGetStockPositionQuery, useUpdateStockPositionMutation } from "@/entities/StockPosition/model/services/stockPositionApi";
import { EditableStockPosition, StockPosition } from "@/entities/StockPosition/model/types/StockPosition";
import { getStockPosition } from "../../../model/selectors/getStockPosition/getStockPosition";

interface EditStockPositionFormProps {
  className?: string;
  onSuccess?: () => void;
  id?: number; 
}

type editableFields = keyof StockPosition;

export const EditStockPositionForm = (props: EditStockPositionFormProps) => {
  const { className, onSuccess } = props;

  const [editedStockPosition, setEditedStockPosition] = useState<EditableStockPosition>({});

  const stockPosition = useSelector(getStockPosition) as StockPosition;
  // const { 
  //   data: stockPosition, 
  //   isError: isFetchError, 
  //   isLoading: isFetchLoading
  // } = useGetStockPositionQuery(id) 
  
  const [updateStockPosition, {
    isLoading: isUpdateLoading, 
    isError: isUpdateError,
    isSuccess: isUpdateSuccess
  }] = useUpdateStockPositionMutation()

  const onChangeHandler = (value: string, field: editableFields): void => {
    setEditedStockPosition({...editedStockPosition, [field]: Number(value), id: stockPosition?.id})  
  }

  const saveStockPositionHandler = (): void => {
    updateStockPosition(editedStockPosition); 
  }

  useEffect(() => {
    if (!!isUpdateSuccess && onSuccess) onSuccess();
  }, [isUpdateSuccess])

  return(
    <div className={classNames(styles.EditStockPositionForm, {}, [className])}>
      {stockPosition?.id && <h1>{stockPosition?.stock?.name}</h1>}

      <Input 
        className={styles.input} 
        defaultValue={stockPosition?.stocksNumber}
        label={"Stocks number"}
        onChange={(value) => onChangeHandler(value, "stocksNumber")}
        disabled={isUpdateLoading} />
      
      <Input 
        className={styles.input} 
        defaultValue={stockPosition?.averagePrice}
        label={"Average price"}
        onChange={(value) => onChangeHandler(value, "averagePrice")}
        disabled={isUpdateLoading} />

      <Button 
        onClick={saveStockPositionHandler}   
        loadingText={isUpdateLoading ? "Updating..." : ""}
        isLoading={isUpdateLoading}>
        Save
      </Button>
    </div>
  )
}
