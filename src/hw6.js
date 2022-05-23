/**
 * 1.Напишите функцию diff, которая получает в качестве
 * параметров 2 числа и возвращает разницу между
 * наибольшим и наименьшим.
 */
export function diff(num1, num2) {
  const [maxVal, minVal] = num1 > num2 ? [num1, num2] : [num2, num1];
  return maxVal - minVal;
}

/**
 * 2.Напишите функцию isWord, которая принимает на
 * вход текстовую строку. Функция возвращает true, если
 * строка состоит из одного слова и false, если из
 * нескольких.
 */
export function isWord(str) {
  return /^\w+$/i.test(str);
}

/**
 * *Напишите функцию pow(a, x), которая вернёт
 * значение числа a, возведённого в степень x.
 */
export function pow(a, x) {
  return a ** x;
}
