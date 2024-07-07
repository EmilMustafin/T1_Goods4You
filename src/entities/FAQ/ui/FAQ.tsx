import { useState } from 'react';
import { FAQItem } from '@/entities';
import styles from './FAQ.module.css';
import { faqData } from '../model/constants';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id='faq' className={styles.faq_container}>
      <div className={styles.faq}>
        <h2 className={styles.faq_title}>FAQ</h2>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openItems[index] || false}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};
