export type Line = { amount: number };

// ISO 4217 currency decimal places
// Currencies with 3 decimal places
const CURRENCIES_3_DECIMALS = new Set([
  'BHD', // Bahraini Dinar
  'BYN', // Belarusian Ruble
  'JOD', // Jordanian Dinar
  'KWD', // Kuwaiti Dinar
  'OMR', // Omani Rial
  'TND', // Tunisian Dinar
]);

// Currencies with 0 decimal places
const CURRENCIES_0_DECIMALS = new Set([
  'BIF', // Burundian Franc
  'CLP', // Chilean Peso
  'DJF', // Djiboutian Franc
  'GNF', // Guinean Franc
  'ISK', // Icelandic Króna
  'JPY', // Japanese Yen
  'KMF', // Comorian Franc
  'KRW', // South Korean Won
  'PYG', // Paraguayan Guaraní
  'RWF', // Rwandan Franc
  'UGX', // Ugandan Shilling
  'VND', // Vietnamese Đồng
  'VUV', // Vanuatu Vatu
  'XAF', // Central African CFA Franc
  'XOF', // West African CFA Franc
  'XPF', // CFP Franc
]);

function getCurrencyDecimals(currency: string): number {
  const upperCurrency = currency.toUpperCase();
  if (CURRENCIES_3_DECIMALS.has(upperCurrency)) return 3;
  if (CURRENCIES_0_DECIMALS.has(upperCurrency)) return 0;
  return 2; // Default to 2 decimals for unknown currencies
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = getCurrencyDecimals(currency);
  return sum.toFixed(decimals);
}