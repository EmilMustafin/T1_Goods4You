import { ReactNode, useEffect, useState } from 'react';
import { userCartsStore } from '@/entities/products-cart';
import { useAppDispatch } from '@/shared/lib/redux';
import { Spinner } from '@/shared/ui';

export function AppLoader({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    Promise.all([dispatch(userCartsStore.actions.fetchUserCarts(33))]).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
}
