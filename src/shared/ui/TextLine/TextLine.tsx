import { classNames, Mods } from "@/shared/lib";
import * as styles from "./TextLine.module.scss";
import { useEffect } from "react";

export enum EColorizedFields {
  LABEL = "label",
  VALUE = "value",
  SYMBOL = "symbol"
}

export enum EColors {
  GREEN = "Green"
}

interface TextLineProps {
  className?: string;
  label?: string;
  value?: string | number | undefined;
  symbol?: string; 
  colorizedFields?: EColorizedFields[];
  color?: EColors;
}

export const TextLine = (props: TextLineProps) => {
  const {
    className,
    label,
    value,
    symbol,
    colorizedFields,
    color = EColors.GREEN,
  } = props;

  const colorizedField = (field: EColorizedFields) => {
    return {[styles[`colorizedFields${color}`]]: !!colorizedFields?.includes(field)}
  }

  return(
    <div className={classNames(styles.TextLine, {}, [className])}>
      <div className={classNames(styles.label, colorizedField(EColorizedFields.LABEL))}>
        {label}:
      </div>
      <div className={classNames(styles.value, colorizedField(EColorizedFields.VALUE))}>
        {value}
      </div>
      <div className={classNames(styles.symbol, colorizedField(EColorizedFields.SYMBOL))}>
        {symbol}
      </div>
    </div>
  )
}
