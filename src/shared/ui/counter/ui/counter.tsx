import { Icons } from '@/shared/assets';
import styles from './counter.module.css';
import { Button } from '../../button';
import { Icon } from '../../icon';

export interface Props {
  counter: number;
  className?: string;
  size?: 's' | 'm' | 'l';
  stock?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({
  counter,
  className,
  stock,
  size = 's',
  onIncrement,
  onDecrement,
}: Props) => {
  return (
    <>
      <div className={`${styles.counter_container} ${className}`}>
        <Button
          size={size}
          onClick={(e) => {
            e.preventDefault();
            onIncrement();
          }}
        >
          <Icon icon={Icons.MINUS} />
        </Button>
        {counter && (
          <div className={styles.counter}>
            {counter} {counter > 1 ? 'items' : 'item'}
          </div>
        )}
        <Button
          size={size}
          disabled={counter === stock}
          onClick={(e) => {
            e.preventDefault();
            onDecrement();
          }}
        >
          <Icon icon={Icons.PLUS} style={{ width: '20px', height: '20px' }} />
        </Button>
      </div>
    </>
  );
};
