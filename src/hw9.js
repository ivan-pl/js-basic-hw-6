/**
 * 1.Даны длины трёх сторон треугольника. Определить,
 * является ли треугольник прямоугольным.
 * 2.Пользователь вводит число R. Написать программу,
 * которая выведет в консоль длину окружности и
 * площадь круга с радиусом R.
 * *Пользователь вводит числа a, b и c. Написать
 * программу, выводящую корни квадратного
 * уравнения с коэффициентами a, b и c.
 */

export function isRightTriangle(side1, side2, side3) {
  const [a, b, c] = [side1, side2, side3].sort((item1, item2) => item1 - item2);
  const square = (a ** 2 + b ** 2).toFixed(2);

  return square === (c ** 2).toFixed(2);
}

export function task2() {
  const r = +prompt("Enter a number:", 1);
  const c = 2 * Math.PI * r;
  const s = Math.PI * r**2;

  console.log(`C = ${c.toFixed(3)}; S = ${s.toFixed(3)}`);
}