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
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE
  } = props;

  const mods: Mods = {
    [styles[theme]]: !!theme,
  }

  return(
    <div className={classNames(styles.Button, mods, [className])}>
      { children }
    </div>
  )
}
