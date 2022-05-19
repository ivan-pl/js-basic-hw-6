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

/**
 * Вывести в консоль таблицу умножения на 7.
 * 7 x 1 = 7
 * 7 x 2 = 14
 * …
 * 7 x 9 = 63
 */
export function task2() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}
