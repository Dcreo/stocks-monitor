import { classNames, Mods } from "@/shared/lib";
import * as styles from "./TextLine.module.scss";
import { useEffect } from "react";

export enum EColorizedFields {
  LABEL = "label",
  VALUE = "value",
  SYMBOL = "symbol"
}

export enum ERenders {
  LABEL = "labelRender",
  VALUE = "valueRender",
  SYMBOL = "symbolRender"
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
  renders?: ERenders[]; 
}

export const TextLine = (props: TextLineProps) => {
  const {
    className,
    label,
    value,
    symbol,
    colorizedFields,
    renders = [ERenders.LABEL, ERenders.VALUE, ERenders.SYMBOL],
    color = EColors.GREEN,
  } = props;

  const colorizedField = (field: EColorizedFields) => {
    return {[styles[`colorizedFields${color}`]]: !!colorizedFields?.includes(field)}
  }

  const labelRender = () => {
    if (!label?.length) return

    return(
      <div className={classNames(styles.label, colorizedField(EColorizedFields.LABEL))}>
        {label}:
      </div>
    )
  }

  const valueRender = () => {
    return(
      <div className={classNames(styles.value, colorizedField(EColorizedFields.VALUE))}>
        {value}
      </div>
    )
  }

  const symbolRender = () => {
    return(
      <div className={classNames(styles.symbol, colorizedField(EColorizedFields.SYMBOL))}>
        {symbol}
      </div>
    )
  }

  const renderAll = () => {
    const rendersValues = Object.values(renders);

    return [
      labelRender,
      valueRender,
      symbolRender
    ]
    .sort((a, b) => rendersValues?.indexOf(a.name as ERenders) - 
                    rendersValues?.indexOf(b.name as ERenders))
    .map((render) => render());
  }

  return(
    <div className={classNames(styles.TextLine, {}, [className])}>
      {renderAll()}
    </div>
  )
}
