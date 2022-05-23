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
 * Создайте объект user, содержащий поле name со
 * значением ‘John’.
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением
 * ‘admin’.
 */
export function task2(obj) {
  const admin = {role: "admin", ...obj};
  return admin;
}
