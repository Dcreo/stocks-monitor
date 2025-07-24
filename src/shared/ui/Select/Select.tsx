import { ChangeEvent } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./Select.module.scss";

interface SelectProps {
  className?: string;
  items: any[];
  onChange?: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  const {
    className,
    items,
    onChange,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return(
    <div className={classNames(styles.Select, {}, [className])}>
      <select onChange={onChangeHandler} className={styles.element}>
        {items?.map((item) => {
          return(
            <option 
              value={item?.value} 
              disabled={item?.disabled} 
              selected={item?.select}>
              {item?.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
