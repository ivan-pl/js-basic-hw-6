/**
 * Сверстать страницу и подключить к ней файл со
 * скриптом. На странице должны быть три текстовых
 * параграфа, поле ввода и кнопка. Напишите скрипт,
 * который будет выполнять следующие условия:
 *
 * 1.Кнопка скрыта, если в поле ввода нет значения.
 * 2.При клике на кнопку добавляется новый параграф,
 * содержащий текст из поля ввода.
 * 3.*Если параграфов становится больше 5, первый из
 * них удаляется.
 */

function inputEvent(e) {
  const button = document.querySelector("button");
  button.hidden = !e.target.value;
}

export function setBehavior() {
  const button = document.querySelector("button");
  const input = document.querySelector("input");

  button.hidden = true;
  input.addEventListener("input", inputEvent);
}
