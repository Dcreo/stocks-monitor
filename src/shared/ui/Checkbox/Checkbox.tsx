import { useEffect, useState } from "react";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Checkbox.module.scss";

interface CheckboxProps {
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    value,
    onChange,
  } = props;

  const [checked, setChecked] = useState<boolean>(value!);

  const mods: Mods = {
    [styles.checked]: !!checked
  }

  const onClickHandler = () => {
    const currentValue = !checked;
    setChecked(currentValue);
    if (onChange) onChange(currentValue);
  }

  return(
    <div className={classNames(styles.Checkbox, {}, [className])}>
      <div 
        onClick={onClickHandler}
        className={classNames(styles.body, mods)}>
      </div>
    </div>
  )
}
