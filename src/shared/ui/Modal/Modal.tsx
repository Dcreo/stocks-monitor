import { memo } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./Modal.module.scss";

console.warn(styles)

interface ModalProps {
  className?: string
}

export const Modal = memo(({ className }: ModalProps) => {
  return(
    <div className={classNames(styles.Modal, {}, [className])}>
      Modal
    </div>
  )
})
