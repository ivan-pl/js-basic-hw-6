/**
 * 3.*В двух переменных хранятся даты рождения двух
 * пользователей в формате ДД.ММ.ГГГГ. Написать
 * программу, которая определяет более молодого
 * пользователя
 */

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * 1.Запросите у пользователя дату в формате
 * ДД.ММ.ГГГГ. Напишите программу, выводящую день
 * недели по введённой дате.
 */
export function task1() {
  const inputStrData = prompt("Enter a date in format dd.mm.yyyy: ");
  const [day, month, year] = inputStrData.split(".");
  const date = new Date(`${year}-${month}-${day}`);

  alert(DAYS[date.getDay()]);
}

/**
 * 2.Написать программу, которая выводит в консоль
 * количество минут, прошедшее с начала сегодняшнего
 * дня.
 */
export function task2() {
  const currentDate = new Date(Date.now());
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const passedMinutes = hours * 60 + minutes;

  console.log(passedMinutes);
}
