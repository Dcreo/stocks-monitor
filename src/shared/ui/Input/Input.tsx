import { ChangeEvent, InputHTMLAttributes } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | "onFocus">

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  value?: string;
}

export const Input = (props: InputProps) => {
  const { 
    className, 
    onChange,
    onFocus,
    value,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return(
    <div className={classNames(styles.Input, {}, [className])}>
      <input 
        onChange={onChangeHandler} 
        onFocus={onChangeHandler}
        value={value} 
        {...otherProps}
      />
    </div>
  )
}
