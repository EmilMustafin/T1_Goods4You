import { useState, useRef, forwardRef, MouseEvent, FormEvent, FocusEvent, useEffect } from 'react';
import styles from './input.module.css';
import { InputProps } from '../model/types';

{
  /* TODO Добавить иконки для разных типов инпутов */
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isError = false,
      placeholder,
      onBlur,
      onChange,
      onFocus,
      onInput,
      value,
      type,
      className,
      maxLength,
      white,
      required = false,
      id,
      defaultValue,
      size = 'm',
      readOnly,
      disabled = false,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const initialValue = value || defaultValue;
    const [focus, setFocus] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string | undefined>(initialValue);
    const [typeInput] = useState<string | undefined>(type);
    const inputRef = useRef<HTMLInputElement>(null);
    const passwordBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (inputRef.current && initialValue) {
        inputRef.current.value = initialValue;
      }
    }, [initialValue]);

    const boxClass = `${styles.inputWrapper} ${isError && !disabled ? styles.error : ''} ${
      !isError && focus ? styles.focus : ''
    } ${white ? styles.white : ''} ${size ? styles[size] : ''}`;

    const labelClass = `${styles.label} ${isError ? styles.error : ''} ${
      focus || valueInput || inputRef.current?.value ? styles.focus : ''
    }`;

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter' && type === 'replace') {
        e.preventDefault();
      }
    };

    const handleChangeValue: (e: FormEvent<HTMLInputElement>) => void = (e) => {
      setValueInput(e.currentTarget.value);
      onChange?.(e);
    };

    const handleOnInputValue: (e: FormEvent<HTMLInputElement>) => void = (e) => {
      setValueInput(e.currentTarget.value);
      onInput?.(e);
    };

    const handleFocus: (e: FocusEvent<HTMLInputElement>) => void = (e) => {
      setFocus(true);
      onFocus?.(e);
    };

    const handleFocusLabel: (e: MouseEvent<HTMLLabelElement>) => void = () => {
      if (!disabled) {
        setFocus(true);
        inputRef.current?.focus();
      }
    };

    const handleFocusDisable: (e: FocusEvent<HTMLInputElement>) => void = (e) => {
      e.preventDefault();

      if (type !== 'password' || e.relatedTarget !== passwordBtnRef.current) {
        setFocus(false);
        onBlur?.(e);
      }
    };

    const getInput = (): JSX.Element => (
      <input
        maxLength={maxLength}
        type={typeInput}
        onBlur={handleFocusDisable}
        onChange={handleChangeValue}
        onFocus={handleFocus}
        onInput={handleOnInputValue}
        onKeyDown={handleKeyPress}
        className={`${styles.input} ${className}`}
        ref={ref}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        id={id}
        readOnly={readOnly}
        disabled={disabled}
        {...rest}
      />
    );

    return <>{getInput()}</>;
  },
);

Input.displayName = 'Input';
