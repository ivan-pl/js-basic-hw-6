/**
 * Задача: в переменных a и b хранятся числа. Написать программу, которая
 * выводит в консоль произведение и сумму этих чисел.
 */
export function task1(a, b) {
  const mul = a * b;
  const sum = a + b;
  console.log(`mul = ${mul}; sum = ${sum}`);
}

/**
 * Задача: в двух переменных хранятся строки символов. Написать программу,
 * которая выведет в консоль суммарное количество символов в обоих
 * строках.
 */
export function task2(firstName, lastName) {
  return firstName.length + lastName.length;
}
