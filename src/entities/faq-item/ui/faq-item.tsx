import { Icons } from '@/shared/assets';
import { Icon } from '@/shared/ui/icon';
import styles from './faq-item.module.css';
import { FAQBlock } from '../model/types';

interface Props {
  item: FAQBlock;
  isOpen: boolean;
  toggleOpen: () => void;
}
export const FAQItem = ({ item, isOpen, toggleOpen }: Props) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.questionWrapper} onClick={toggleOpen}>
        <h3 className={styles.question}>{item.question}</h3>
        <Icon
          icon={Icons.PLUS}
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
        />
      </div>
      <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};
