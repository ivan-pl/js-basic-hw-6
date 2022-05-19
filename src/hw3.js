/**
 * Вывести в консоль сумму всех целых чисел от 50 до 100.
 */
export function task1() {
  let sum = 0;
  for (let i = 50; i < 100; i++) {
    sum += i;
  }
  console.log(sum);
}
