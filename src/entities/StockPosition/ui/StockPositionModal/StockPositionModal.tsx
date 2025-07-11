import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionModal.module.scss";
import { Modal } from "@/shared/ui";
import { CreateStockPositionForm } from "../Forms/CreateStockPositionForm/CreateStockPositionForm";
import { StockPositionFormType } from "../../model/types/StockPosition";
import { EditStockPositionForm } from "../Forms/EditStockPositionForm/EditStockPositionForm";

interface StockPositionModalProps {
  className?: string;
  isOpen: boolean | undefined;
  onClose: () => void;
  id?: number;
  formType?: StockPositionFormType;
}

export const StockPositionModal = (props: StockPositionModalProps) => {
  const {
    className,
    isOpen,
    id,
    formType = StockPositionFormType.NEW, 
    onClose,
  } = props

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      {formType === StockPositionFormType.NEW && <CreateStockPositionForm onSuccess={onClose} />}
      {formType === StockPositionFormType.EDIT && <EditStockPositionForm onSuccess={onClose} />}
    </Modal>
  )
}
