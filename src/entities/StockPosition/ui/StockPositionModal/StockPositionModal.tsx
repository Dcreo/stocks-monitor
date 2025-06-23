import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionModal.module.scss";
import { Modal } from "@/shared/ui";
import { CreateStockPositionForm } from "../Forms/CreateStockPositionForm/CreateStockPositionForm";

interface StockPositionModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const StockPositionModal = (props: StockPositionModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <CreateStockPositionForm />
    </Modal>
  )
}
