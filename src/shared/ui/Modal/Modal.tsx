import { memo, ReactNode, MouseEvent } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Modal.module.scss";

export enum EModalTheme {
  FULLSCREEN = "fullscreen",
  DEFAULT = "default",
}

export enum EOverflow {
  AUTO = "Auto",
  UNSET = "Unset"
}

interface ModalProps {
  className?: string;
  children?: ReactNode; 
  isOpen?: boolean;
  onClose?: () => void;
  theme?: EModalTheme;
  lazy?: boolean;
  overflow?: EOverflow;
}

export const Modal = (props: ModalProps) => {
  const { 
    isOpen, 
    className, 
    children,
    theme = EModalTheme.DEFAULT,
    lazy = true,
    overflow = EOverflow.UNSET,
    onClose,
  } = props;

  const onCloseHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClose) onClose();
  }
  
  const mods: Mods = {
    [styles.closed]: !isOpen,
    // @ts-ignore
    [styles[theme]]: true,
  } 

  const contentMods: Mods = {
    [styles[`overflow${overflow}`]]: true,
  }

  if (lazy && !isOpen) return null;

  return(
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={onCloseHandler}>
        <div 
          className={classNames(styles.content, contentMods, [])} 
          onClick={(e) => e.stopPropagation()}>
          {children}
          <div className={styles.closeElement} onClick={onCloseHandler}>
            <RiCloseLargeFill />
          </div>
        </div>
      </div>
    </div>
  )
}
