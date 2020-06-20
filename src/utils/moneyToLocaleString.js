export const moneyToLocaleString = number =>
  new Intl.NumberFormat(
    'de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(number)