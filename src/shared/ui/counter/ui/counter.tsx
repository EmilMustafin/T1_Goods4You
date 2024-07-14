import { useState } from 'react';
import { Icons } from '@/shared/assets';
import styles from './counter.module.css';
import { Button } from '../../button';
import { Icon } from '../../icon';

export interface Props {
  counter: number;
  className?: string;
  size?: 's' | 'm' | 'l';
}

export const Counter = ({ counter, className, size = 's' }: Props) => {
  const [items, setItems] = useState(counter);
  return (
    <>
      {items && (
        <div className={`${styles.counter_container} ${className}`}>
          <Button
            size={size}
            onClick={(e) => {
              e.preventDefault();
              setItems((prevItems) => (prevItems > 1 ? prevItems - 1 : prevItems));
            }}
          >
            <Icon icon={Icons.MINUS} />
          </Button>
          {items && (
            <div className={styles.counter}>
              {items} {items > 1 ? 'items' : 'item'}
            </div>
          )}
          <Button
            size={size}
            onClick={(e) => {
              e.preventDefault();
              setItems((prev) => prev + 1);
            }}
          >
            <Icon icon={Icons.PLUS} style={{ width: '20px', height: '20px' }} />
          </Button>
        </div>
      )}
    </>
  );
};
