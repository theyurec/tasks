/*

Ошибки принтера

Принтер использует цвета, которые обозначаются буквами от a до m (английский алфавит). Цвета, используемые принтером, записываются в строку. "Хорошей" строкой будет aaabbbbhaijjjm здесь используются только буквы от a до m. Иногда возникают проблемы и создается "Плохая" строка - aaaxbbbbyyhwawiwjjjwwm с буквами, которые не входят в промежуток от a до m.

Нужно написать функцию, которая примет строку и вернёт частоту ошибок принтера в виде строки, представляющей дробь, где числитель - количество ошибок, а знаменатель - длина строки. Не сокращайте дробь.

Пример:

s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz
printerError(s) - вернёт "3/56"

s="aaabbbbhaijjjm"
printer_error(s) - вернёт "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) - вернёт "8/22"

Строка имеет длину >=1 и содержит буквы от a до z.


*/
function printererror(colors) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    let error = 0;
    let length = colors.length;
    for(let i = 0; i < colors.length; i++) {
        if(arr.includes(colors[i]) == false) error++;
    }
    return error + '/' + length
}
let result = printererror('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz');
console.log(result)