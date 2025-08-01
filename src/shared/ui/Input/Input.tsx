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
  disabled?: boolean;
  label?: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const { 
    className, 
    value,
    hasError,
    errorMessage,
    disabled,
    label,
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
      {label?.length && (
        <label>{label}</label>
      )}

      <input 
        onChange={onChangeHandler} 
        onFocus={onFocusHandler}
        disabled={disabled}
        className={styles.input}
        value={value} 
        {...otherProps}
      />
      {!!errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  )
}
