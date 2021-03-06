/**
 * Задача: в переменных a и b хранятся числа. Вывести в
 * консоль наибольшее из них.
 */
export function task1(a, b) {
  console.log(Math.max(a, b));
}

/**
 * Запросить у пользователя ввод числа от 1 до 12.
 * Вывести в консоль название месяца, соответствующее
 * этому числу (1 — январь, 2 — февраль и т.д.).
 */
export function task2() {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const numMonth = prompt("Enter a number from 1 to 12:", 1);
  console.log(months[numMonth - 1]);
}

/**
 * Задача: В переменных circle и square хранятся площади круга
 * и квадрата соответственно. Написать программу,
 * которая определяет, поместится ли круг в квадрат.
 */
export function task3(circle, square) {
  const r = Math.sqrt(circle / Math.PI);
  const a = Math.sqrt(square);
  return r >= a;
}
