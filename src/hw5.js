/**
 * 1.Выведите в консоль сумму всех элементов массива.
 */
export function task1(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

/**
 * 2.Создайте новый массив на основе исходного, в
 * котором каждый элемент будет вдвое больше
 * элемента исходного массива с таким же индексом.
 * (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
 * массив).
 */
export function task2(arr) {
  return arr.map((x) => x * 2);
}

/**
 * 3.*Найдите и выведите в консоль наибольший и
 * наименьший элементы исходного массива.
 */
export function task3(arr) {
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  console.log(maxNum, minNum);
}
