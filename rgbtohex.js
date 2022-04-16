/*

Напишите функцию для преобразования кода цвета из RGB в шестнадцатеричное значение.
Допустимые значения для RGB = (0 - 255). Шестнадцатеричный код должен состоять из 6-ти символов.

Примеры:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/
function rgb(num1, num2, num3) {
    return (num1.toString(16) +  num2.toString(16) + num3.toString(16)).toUpperCase()
}
let result = rgb(255, 255, 255);
console.log(result)
