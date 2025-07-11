import { useEffect } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./EditStockPositionForm.module.scss";
import { useSelector } from "react-redux";
import { getStockPositionId } from "../../../model/selectors/getStockPositionId/getStockPositionId";
import { Button, Input } from "@/shared/ui";
import { useGetStockPositionQuery } from "@/entities/StockPosition/model/services/stockPositionApi";

interface EditStockPositionFormProps {
  className?: string;
  onSuccess?: () => void;
  id?: number; 
}

export const EditStockPositionForm = (props: EditStockPositionFormProps) => {
  const { className, onSuccess } = props;

  const id = useSelector(getStockPositionId);
  const { data: stockPosition, isError, isLoading} = useGetStockPositionQuery(id) 

  return(
    <div className={classNames(styles.EditStockPositionForm, {}, [className])}>
      {stockPosition?.id && <h1>{stockPosition?.stock?.name}</h1>}
      <Input className={styles.input} disabled={true} />
      <Input className={styles.input} disabled={true} />
      <Button isLoading={true}>Save</Button>
    </div>
  )
}
