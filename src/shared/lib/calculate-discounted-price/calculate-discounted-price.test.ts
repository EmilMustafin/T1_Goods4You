import { calculateDiscountedPrice } from './calculate-discounted-price';
import { formatPrice } from '../format-number/format-price';

jest.mock('../format-number/format-price');

describe('calculateDiscountedPrice', () => {
  it('должен быть возвращен правильный формат цены со скидкой', () => {
    const price = 100;
    const discount = 10;
    const discountedPrice = 90;
    const formattedPrice = '$90.00';

    (formatPrice as jest.Mock).mockReturnValue(formattedPrice);

    const result = calculateDiscountedPrice(price, discount);
    expect(result).toBe(formattedPrice);
    expect(formatPrice).toHaveBeenCalledWith(discountedPrice);
  });

  it('следует воспользоваться скидкой в размере 0%', () => {
    const price = 100;
    const discount = 0;
    const discountedPrice = 100;
    const formattedPrice = '$100.00';

    (formatPrice as jest.Mock).mockReturnValue(formattedPrice);

    const result = calculateDiscountedPrice(price, discount);
    expect(result).toBe(formattedPrice);
    expect(formatPrice).toHaveBeenCalledWith(discountedPrice);
  });

  it('должен получить скидку в размере 100%', () => {
    const price = 100;
    const discount = 100;
    const discountedPrice = 0;
    const formattedPrice = '$0.00';

    (formatPrice as jest.Mock).mockReturnValue(formattedPrice);

    const result = calculateDiscountedPrice(price, discount);
    expect(result).toBe(formattedPrice);
    expect(formatPrice).toHaveBeenCalledWith(discountedPrice);
  });
});
