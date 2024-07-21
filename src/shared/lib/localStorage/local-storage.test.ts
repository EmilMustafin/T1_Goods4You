import { getAccessToken, removeTokensFromStorage, setTokensIntoStorage } from './localStorage';
import { IToken } from './types';

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('Поместить токены в локальное хранилище и отправить событие хранения', () => {
    const tokens: IToken = { token: 'dummyAccessToken' };
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');

    setTokensIntoStorage(tokens);

    expect(localStorage.getItem('accessToken')).toBe(tokens.token);
    expect(dispatchEventSpy).toHaveBeenCalledWith(new Event('storage'));
  });

  it('Удалить токены из локального хранилища и отправить событие хранения', () => {
    localStorage.setItem('accessToken', 'dummyAccessToken');
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');

    removeTokensFromStorage();

    expect(localStorage.getItem('accessToken')).toBeNull();
    expect(dispatchEventSpy).toHaveBeenCalledWith(new Event('storage'));
  });

  it('Получить токен доступа из localStorage', () => {
    const token = 'dummyAccessToken';
    localStorage.setItem('accessToken', token);

    const result = getAccessToken();
    expect(result).toBe(token);
  });

  it('должен возвращать значение null, если токен доступа отсутствует в localStorage', () => {
    const result = getAccessToken();
    expect(result).toBeNull();
  });
});
