import { Icons, ICONS } from '@/shared/assets';
import s from './icon.module.css';

interface Props {
  icon: Icons;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({ icon, className, ...rest }: Props) => {
  const Icon = ICONS[icon];

  return <Icon className={`${s.icon} ${className ? className : ''}`} {...rest} />;
};
