import { Icons } from '@/shared/assets';
import styles from './star.module.css';
import { Icon } from '../../icon';

interface Props {
  stars: number;
}

export const Star = ({ stars }: Props) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? <Icon icon={Icons.STAR_FILL} style={{ width: '20px', height: '20px' }} /> : <Icon icon={Icons.STAR} />}
      </span>
    );
  });
  return <div className={`${styles.star_rating}`}>{ratingStar}</div>;
};
