import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserCarts } from '@/entities/user';
import { useAuthLoginMutation } from '@/shared/api';
import { ROUTER_PATHS } from '@/shared/constants';
import { setTokensIntoStorage } from '@/shared/lib/localStorage';
import { useAppDispatch } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/ui/input';
import styles from './sign-in-user.module.css';
export const SignInUser = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth] = useAuthLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth({ username: login, password }).then((user) => {
      if (user.data) {
        setTokensIntoStorage(user.data);
        dispatch(fetchUserCarts(user.data));
        navigate(ROUTER_PATHS.HOME, { replace: true });
      } else {
        // Handle the case when user.data is undefined
      }
    });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.auth_container}>
      <form className={styles.auth_form} onSubmit={handleSubmit}>
        <Input type='text' placeholder='Login' value={login} onChange={handleLoginChange} />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <Button className={styles.button_sign_in} type='submit' size='m'>
          Sign in
        </Button>
      </form>
    </div>
  );
};
