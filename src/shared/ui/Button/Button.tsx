import { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Button.module.scss";

export enum ButtonTheme {
  OUTLINE = "outline"
}

export enum ButtonSize {
  EXTRA_SMALL = "extra_small",
  SMALL = "small",
  MIDDLE = "middle",
  LARGE = "large",
  EXTRA_LARGE = "extra_large"
}

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
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
    size = ButtonSize.MIDDLE,
    theme = ButtonTheme.OUTLINE,
    disabled,
    onClick, // TODO extend base events
  } = props;

  const mods: Mods = {
    [styles[theme]]: !!theme,
    [styles[size]]: size,
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
