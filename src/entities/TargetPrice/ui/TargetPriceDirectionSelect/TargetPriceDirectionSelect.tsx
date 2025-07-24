import { classNames } from "@/shared/lib";
import * as styles from "./TargetPriceDirectionSelect.module.scss";
import { ETargetPriceDirection } from "../../model/types/TargetPrice";
import { Select } from "@/shared/ui";

interface TargetPriceDirectionSelectProps {
  className?: string;
  onChange?: (value: string) => void;
}

export const TargetPriceDirectionSelect = (props: TargetPriceDirectionSelectProps) => {
  const {
    className,
    onChange,
  } = props;

  const directions = () => {
    return [
      {
        value: ETargetPriceDirection.ABOVE,
        name: "Above"
      },
      {
        value: ETargetPriceDirection.BELOW,
        name: "Below"
      }
    ]
  }

  return(
    <div className={classNames(styles.TargetPriceDirectionSelect, {}, [className])}>
      <Select items={directions()} onChange={onChange} />
    </div>
  )
}
