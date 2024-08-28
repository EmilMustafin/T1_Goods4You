import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userSlice } from '@/entities/user';
import { ROUTER_PATHS } from '@/shared/constants';
import { getAccessToken } from '@/shared/lib';
import { useAppSelector } from '@/shared/lib/redux';

type AuthRedirectProps = {
  children: ReactElement;
};

export const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const user = useAppSelector(userSlice.selectors.getUsers);
  const isAuth = getAccessToken();
  const location = useLocation();

  if (user && location.pathname === ROUTER_PATHS.SIGN_IN) {
    return <Navigate to={ROUTER_PATHS.HOME} replace />;
  } else if (location.pathname !== ROUTER_PATHS.SIGN_IN && !isAuth) {
    return <Navigate to={ROUTER_PATHS.SIGN_IN} replace />;
  }

  return children;
};
