import { classNames } from "@/shared/lib";
import * as styles from "./StockDetailsModal.module.scss";
import { Modal } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { getStockId } from "../../model/selectors/getStockId/getStockId";
import { getStockModal } from "../../model/selectors/getStockModal/getStockModal";
import { setModalData } from "@/entities/Stock";

interface StockDetailsProps {
  className?: string
}

export const StockDetailsModal = ({ className }: StockDetailsProps) => {
  const dispatch = useAppDispatch();

  const id = useAppSelector(getStockId);
  const modal = useAppSelector(getStockModal);

  const onCloseHandler = () => {
    dispatch(setModalData({
      modal: {
        isOpen: false
      }
    }))
  }

  return(
    <div className={classNames(styles.StockDetails, {}, [className])}>
      <Modal 
        isOpen={modal?.isOpen} 
        onClose={onCloseHandler}>
        <div className={styles.container}>
          { id }
        </div>
      </Modal>
    </div>
  )
}
