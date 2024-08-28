import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string | null;
  label?: string | null;
  placeholder?: string | undefined;
  isError?: boolean;
  className?: string;
  type: string;
  name?: string;
  maxLength?: number;
  handleSearch?: () => void;
  white?: boolean;
  required?: boolean;
  id?: string;
  defaultValue?: string;
  size?: 'm' | 's' | 'l';
  textAlign?: string;
  readOnly?: boolean;
  iconButton?: ReactNode;
  disabled?: boolean;
  paintedWIthDark?: boolean;
}

export interface InputBoxProps {
  children: ReactNode;
  className?: string;
  dataTestid?: string;
}
