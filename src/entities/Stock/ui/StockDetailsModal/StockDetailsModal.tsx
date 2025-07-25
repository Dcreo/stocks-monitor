import { classNames } from "@/shared/lib";
import * as styles from "./StockDetailsModal.module.scss";
import { EModalTheme, Modal } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { getStockModal } from "../../model/selectors/getStockModal/getStockModal";
import { setModalData } from "@/entities/Stock";
import { DetailsContainer } from "./DetailsContainer/DetailsContainer";

interface StockDetailsProps {
  className?: string
}

export const StockDetailsModal = ({ className }: StockDetailsProps) => {
  const dispatch = useAppDispatch();

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
        lazy={true}
        theme={EModalTheme.FULLSCREEN}
        onClose={onCloseHandler}>
        <DetailsContainer />
      </Modal>
    </div>
  )
}
