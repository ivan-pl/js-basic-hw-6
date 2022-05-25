/**
 * Пользователь вводит текстовую строку. Определить с
 * помощью регулярного выражения, является ли
 * введённая строка:
 * 1.Датой.
 * 2.Адресом электронной почты.
 * 3.*Номером телефона.
 */

export function isDate(str) {
  return /^\d{2}\.\d{2}.\d{4}$/.test(str);
}

export function isEmail(str) {
  return /^[0-9a-zA-Z-._]+@[0-9a-zA-Z]+\.[a-z]+/.test(str);
}

export function isMobileNumber(str) {
  return /^(\+7|8)\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/.test(str);
}
