import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets';
import styles from './root-layout.module.css';

export const RootLayout = () => {
  return (
    <div className={styles.bodyContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
