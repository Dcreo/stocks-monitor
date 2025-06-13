import { memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode; 
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { 
    isOpen, 
    className, 
    children,
    onClose
  } = props;

  const onCloseHandler = () => {
    if (onClose) onClose();
  }

  const mods: Mods = {
    [styles.closed]: !isOpen,
  } 

  return(
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={onCloseHandler}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
