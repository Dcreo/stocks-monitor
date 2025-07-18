import { useEffect, useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./DetailsContainer.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { 
  getStockId, 
  Stock, 
  useGetStockQuery 
} from "@/entities/Stock";

interface DetailsContainerProps {
  className?: string
}

export const DetailsContainer = ({ className }: DetailsContainerProps) => {
  const dispatch = useAppDispatch();

  const [stock, setStock] = useState<Stock>();
  const [reloaded, setReloaded] = useState<boolean>(false);

  const id = useAppSelector(getStockId);
  
  const {data, isSuccess} = useGetStockQuery(id);

  useEffect(() => {
    if (data?.id) {
      setStock(data as Stock);
    }
  }, [data])

  return(
    <div className={classNames(styles.DetailsContainer, {}, [className])}>
      {!!stock?.id && (
        <>
          <div className={styles.header}>
            <h1>{ stock?.name }&nbsp;[ID: { id }]</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.leftPart}>
              Left part
            </div>
            <div className={styles.rightPart}>
              Right Part
            </div>
          </div>
        </>
      )}
    </div>
  )
}
