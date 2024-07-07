import { Icons } from '@/shared/assets';
import styles from './counter.module.css';
import { Button } from '../../button';
import { Icon } from '../../icon';

export interface Props {
  id: number;
  counter: number;
  className?: string;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export const Counter = ({ id, counter, className, increase, decrease }: Props) => {
  return (
    <div className={`${styles.counter_container} ${className}`}>
      <Button
        size='s'
        onClick={(e) => {
          e.preventDefault();
          decrease(id);
        }}
      >
        <Icon icon={Icons.MINUS} />
      </Button>
      <div className={styles.counter}>
        {counter} {counter > 1 ? 'items' : 'item'}
      </div>
      <Button
        size='s'
        onClick={(e) => {
          e.preventDefault();
          increase(id);
        }}
      >
        <Icon icon={Icons.PLUS} style={{ width: '20px', height: '20px' }} />
      </Button>
    </div>
  );
};
