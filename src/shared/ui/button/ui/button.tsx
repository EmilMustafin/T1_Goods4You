import { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
import s from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  anchor?: string;
  size?: 's' | 'm' | 'l';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  type = 'button',
  anchor,
  size = 'm',
  disabled = false,
  onClick,
  ...rest
}: Props) => {
  return (
    <>
      {anchor ? (
        <a href={anchor}>
          <button
            type={type}
            disabled={disabled}
            className={`${s.button} ${s[`size_${size}`]}`}
            onClick={onClick}
            {...rest}
          >
            {children}
          </button>
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`${s.button} ${s[`size_${size}`]}`}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
};
