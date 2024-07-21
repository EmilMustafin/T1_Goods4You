import { SignInUser } from '@/features/sign-in-user';
import styles from './sign-in-page.module.css';

export const SignInPage = () => {
  return (
    <>
      <h1 className={styles.sign_in_title}>Sign in</h1>
      <SignInUser />
    </>
  );
};
