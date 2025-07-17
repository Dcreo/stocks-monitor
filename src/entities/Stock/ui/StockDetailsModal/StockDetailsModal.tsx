import { useEffect, useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./StockDetailsModal.module.scss";
import { EModalTheme, Modal } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { getStockId } from "../../model/selectors/getStockId/getStockId";
import { getStockModal } from "../../model/selectors/getStockModal/getStockModal";
import { EStockModalType, setModalData, Stock } from "@/entities/Stock";
import { useGetStockQuery } from "../../services/stocksApi";

interface StockDetailsProps {
  className?: string
}

export const StockDetailsModal = ({ className }: StockDetailsProps) => {
  const dispatch = useAppDispatch();

  const [stock, setStock] = useState<Stock>();

  const id = useAppSelector(getStockId);
  const modal = useAppSelector(getStockModal);

  const {data} = useGetStockQuery(id, {
    skip: !id,
  });

  const onCloseHandler = () => {
    setStock({} as Stock);
    dispatch(setModalData({
      modal: {
        isOpen: false
      }
    }))
  }

  useEffect(() => {
    console.warn("set stock")
    if (!!data?.id) setStock(data);
  }, [data?.id]);

  return(
    <div className={classNames(styles.StockDetails, {}, [className])}>
      <Modal 
        isOpen={modal?.isOpen} 
        theme={EModalTheme.FULLSCREEN}
        onClose={onCloseHandler}>
        {!!stock?.id && (
          <div className={styles.container}>
            <h1>{ stock?.name }&nbsp;[{ id }]</h1>
          </div>
        )}
      </Modal>
    </div>
  )
}
