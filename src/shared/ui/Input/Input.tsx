import { ChangeEvent, InputHTMLAttributes } from "react";
import { classNames, Mods } from "@/shared/lib";
import * as styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | "onFocus">

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: (value?: string) => void;
  value?: string | number;
  hasError?: boolean;
  errorMessage?: string;
}

export const Input = (props: InputProps) => {
  const { 
    className, 
    value,
    hasError,
    errorMessage,
    onChange,
    onFocus,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onFocusHandler = () => {
    if (onFocus) onFocus();
  }

  const mods: Mods = {
    [styles.isError]: hasError,
  }

  return(
    <div className={classNames(styles.Input, mods, [className])}>
      <input 
        onChange={onChangeHandler} 
        onFocus={onFocusHandler}
        value={value} 
        {...otherProps}
      />
      {!!errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  )
}
