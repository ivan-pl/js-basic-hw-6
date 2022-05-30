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
  const date = new Date(inputStrData);

  alert(DAYS[date.getDay()]);
}

/**
 * 2.Написать программу, которая выводит в консоль
 * количество минут, прошедшее с начала сегодняшнего
 * дня.
 */
export function task2() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const passedMinutes = hours * 60 + minutes;

  console.log(passedMinutes);
}

/**
 * 3.*В двух переменных хранятся даты рождения двух
 * пользователей в формате ДД.ММ.ГГГГ. Написать
 * программу, которая определяет более молодого
 * пользователя
 */
export function task3(birthdayStr1, birthdayStr2) {
  const birthdayDate1 = new Date(birthdayStr1);
  const birthdayDate2 = new Date(birthdayStr2);

  const result =
    birthdayDate1 > birthdayDate2
      ? "First user is younger"
      : "Second user is younger";

  alert(result);
}
