export const formatPrice = (
  value: number,
  currency: 'RUB' | 'USD' | 'EUR',
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string => {
  const localeMap = {
    RUB: 'ru-RU',
    USD: 'en-US',
    EUR: 'de-DE',
  };

  return new Intl.NumberFormat(localeMap[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  }).format(value / 100);
};
