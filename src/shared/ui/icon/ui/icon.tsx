import { Icons, ICONS } from '@/shared/assets';
import s from './icon.module.css';

interface Props {
  icon: Icons;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

export const Icon = ({ icon, className,width,height, ...rest }: Props) => {
  const Icon = ICONS[icon];

  return <Icon  className={`${s.icon} ${className ? className : ''}`} {...rest} />;
};
