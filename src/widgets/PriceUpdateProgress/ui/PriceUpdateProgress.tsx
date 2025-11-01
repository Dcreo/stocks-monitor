import { classNames } from "@/shared/lib";
import * as styles from "./PriceUpdateProgress.module.scss";

interface PriceUpdateProgressProps {
  className?: string;
  lazy?: boolean;
  active?: boolean;
}

export const PriceUpdateProgress = (props: PriceUpdateProgressProps) => {
  const {
    className,
    lazy,
    active,
  } = props;

  return(
    <div className={classNames(styles.PriceUpdateProgress, {}, [className])}>
      Progress
    </div>
  )
}
