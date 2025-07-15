import { classNames } from "@/shared/lib";
import * as styles from "./TextLine.module.scss";

interface TextLineProps {
  className?: string;
  label?: string;
  value?: string | number | undefined;
  symbol?: string; 
}

export const TextLine = (props: TextLineProps) => {
  const {
    className,
    label,
    value,
    symbol,
  } = props;

  return(
    <div className={classNames(styles.TextLine, {}, [className])}>
      <div className={styles.label}>{label}:</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.symbol}>{symbol}</div>
    </div>
  )
}
