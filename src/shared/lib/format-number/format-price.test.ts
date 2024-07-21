import { formatPrice } from './format-price';

describe('formatPrice', () => {
  it('должен возвращать отформатированную цену за заданный номер', () => {
    const number = 1234.56;
    const result = formatPrice(number);
    expect(result).toBe('$1,234.56');
  });

  it('должен обрабатывать неопределенные входные данные и возвращать "Неизвестную цену"', () => {
    const result = formatPrice(undefined);
    expect(result).toBe('Unknown price');
  });

  it('следует ли правильно форматировать целочисленные значения', () => {
    const number = 1234;
    const result = formatPrice(number);
    expect(result).toBe('$1,234.00');
  });

  it('форматировать большие числа', () => {
    const number = 1000000;
    const result = formatPrice(number);
    expect(result).toBe('$1,000,000.00');
  });
});
