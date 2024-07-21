import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '@/entities/user';
import { ScrollHash } from '@/features/scroll-hash';
import { getAccessToken } from '@/shared/lib/localStorage';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Spinner } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import styles from './root-layout.module.css';

export const RootLayout = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);
  const [isAuth, setIsAuth] = useState(!!getAccessToken());

  const checkToken = () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);
  };
  useEffect(() => {
    const listener = () => checkToken();
    window.addEventListener('storage', listener);
    dispatch(auth());
    return () => window.removeEventListener('storage', listener);
  }, [isAuth]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={styles.bodyContainer}>
      <ScrollHash />
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
