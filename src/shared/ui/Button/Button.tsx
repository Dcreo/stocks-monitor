import { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Button.module.scss";

export enum ButtonTheme {
  OUTLINE = "outline"
}

interface ButtonProps {
  className?: string;
  theme?: ButtonTheme;
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    isLoading,
    loadingText = "Loading...",
    theme = ButtonTheme.OUTLINE,
    disabled,
    onClick, // TODO extend base events
  } = props;

  const mods: Mods = {
    [styles[theme]]: !!theme,
  }

  return(
    <button 
      disabled={disabled}
      className={classNames(styles.Button, mods, [className])} 
      onClick={onClick}>
      { (isLoading && loadingText) || children }
    </button>
  )
}
