import { IToken } from './types';

export const setTokensIntoStorage = (tokens: IToken): void => {
  localStorage.setItem('accessToken', tokens.token);
  window.dispatchEvent(new Event('storage'));
};

export const removeTokensFromStorage = (): void => {
  localStorage.removeItem('accessToken');
  window.dispatchEvent(new Event('storage'));
};

export const getAccessToken = (): string | null => localStorage.getItem('accessToken');
