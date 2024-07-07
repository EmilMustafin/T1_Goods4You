import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets';
import styles from './appLayout.module.css';

const AppLayout = () => {
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

export default AppLayout;
