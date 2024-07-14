export const formatPrice = (number: number | undefined) => {
  if (number === undefined) {
    return 'Unknown price'; 
  }

  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumIntegerDigits: 2,
  });
};
