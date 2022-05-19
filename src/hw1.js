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
export function task2(firstStr, secondStr) {
  return firstStr.length + secondStr.length;
}

/**
 * Задача: написать программу, которая запрашивает у пользователя ввод
 * трёхзначного числа, а потом выводит в консоль сумму цифр введённого
 * числа.
 */
export function task3() {
  const numStr = prompt("Enter a 3-digits number: ", 111);
  return Array.from(numStr).reduce((prev, cur) => prev + +cur, 0);
}
