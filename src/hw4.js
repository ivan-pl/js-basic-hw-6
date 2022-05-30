/**
 * Создайте объект user, содержащий поле name со
 * значением ‘John’.
 * 1.Запросить у пользователя ввод числа. Записать
 * введенное значение в поле age объекта user.
 */
export function task1() {
  const user = { name: "John" };
  user.age = prompt("Enter an age: ", 18);
  return user;
}

/**
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением
 * ‘admin’.
 */

export const task2 = (user) => ({ role: "admin", ...user });

/**
 * Записать все значения полей объекта admin в
 * отдельные переменные. Имена переменных
 * должны совпадать с названиями полей.
 */
export function task3(admin) {
  const { name, role } = admin;
  return [name, role];
}
