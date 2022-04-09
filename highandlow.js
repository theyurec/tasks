/*
Наибольшее и наименьшее

В этом задании вам дается строка чисел, разделенных пробелами,  вам необходимо написать функцию которая возвращает наибольшее и наименьшее число.

Пример:

highandlow("1 2 3 4 5") - вернёт "5 1"

highandlow("1 2 -3 4 5") - вернёт "5 -3"

highandlow("1 9 3 4 -5") - вернёт "9 -5"

highandlow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") - вернёт "42 -9"

Функция должна возвращать строку состоящую из двух чисел, разделённых пробелом, при этом наибольшее число должно быть первым.
*/
function highandlow(str) {
    let arr = (str.split(' '));
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return String(max) + ' ' + String(min);
}
let result = highandlow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
console.log(result)