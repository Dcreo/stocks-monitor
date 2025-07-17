import { memo, ReactNode, MouseEvent } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Modal.module.scss";

export enum EModalTheme {
  FULLSCREEN = "fullscreen",
  DEFAULT = "default",
}

interface ModalProps {
  className?: string;
  children?: ReactNode; 
  isOpen?: boolean;
  onClose?: () => void;
  theme?: EModalTheme;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { 
    isOpen, 
    className, 
    children,
    theme = EModalTheme.DEFAULT,
    lazy = true,
    onClose,
  } = props;

  const onCloseHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClose) onClose();
  }
  
  const mods: Mods = {
    [styles.closed]: !isOpen,
    // @ts-ignore
    [styles[theme]]: !!true
  } 

  if (lazy && !isOpen) return null;

  return(
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={onCloseHandler}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
          <div className={styles.closeElement} onClick={onCloseHandler}>
            <RiCloseLargeFill />
          </div>
        </div>
      </div>
    </div>
  )
}
