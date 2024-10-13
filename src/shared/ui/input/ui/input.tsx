import { forwardRef, FormEvent, FocusEvent } from 'react';
import styles from './input.module.css';
import { InputProps } from '../model/types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      onBlur,
      onChange,
      onFocus,
      onInput,
      value,
      type = 'text',
      className,
      maxLength,
      required = false,
      id,
      defaultValue,
      readOnly,
      disabled = false,
      size='m', 
      ...rest
    },
    ref,
  ): JSX.Element => {
    const inputValue = value ?? '';

    const handleChange = (e: FormEvent<HTMLInputElement>): void => {
      onChange?.(e);
    };

    const handleInput = (e: FormEvent<HTMLInputElement>): void => {
      onInput?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
      onBlur?.(e);
    };

    
    return (
      <input
        maxLength={maxLength}
        type={type}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onInput={handleInput}
        className={`${styles.input} ${className} ${styles[size]}`} 
        ref={ref}
        placeholder={placeholder}
        value={inputValue}
        defaultValue={defaultValue}
        required={required}
        id={id}
        readOnly={readOnly}
        disabled={disabled}
        {...rest} 
      />
    );
  },
);

Input.displayName = 'Input';
