import { useState } from 'react';
import styles from './faq.module.css';
import { FAQItem } from '../../faq-item/ui/faq-item';
import { faqData } from '../model/constants';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id='faq' className={styles.faq_container}>
      <div className={styles.faq}>
        <h1 className={styles.faq_title}>FAQ</h1>
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
