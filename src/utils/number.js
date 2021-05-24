export const formatToDecimal = number =>
  `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

export const formatDecimalToInt = number =>
  Number(number.replace(/[^0-9.-]+/g, ''));
