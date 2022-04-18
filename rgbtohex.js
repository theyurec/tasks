/*

Напишите функцию для преобразования кода цвета из RGB в шестнадцатеричное значение.
Допустимые значения для RGB = (0 - 255). Шестнадцатеричный код должен состоять из 6-ти символов.

Примеры:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255));