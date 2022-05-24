/**
 * 1.Запросите у пользователя дату в формате
 * ДД.ММ.ГГГГ. Напишите программу, выводящую день
 * недели по введённой дате.
 * 2.Написать программу, которая выводит в консоль
 * количество минут, прошедшее с начала сегодняшнего
 * дня.
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

export function task1() {
  const inputStrData = prompt("Enter a date in format dd.mm.yyyy: ");
  const [day, month, year] = inputStrData.split(".");
  const date = new Date(`${year}-${month}-${day}`);

  alert(DAYS[date.getDay()]);
}
