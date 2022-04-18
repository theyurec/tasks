/*

Простое сжатие

Вам дана строка, состоящая из повторяющихся символов. Создайте функцию, которая обработает эту строку и преобразует её в массив, состоящий из кортежей (число повторений, символ).

Примеры:
 string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
 output1='[26,"a",1,"b",18,"a"]'

 string="aaaaaaaabaaaa"
 compressed=[8,"a",1,"b",4,"a"]

*/
function simpleCortege(str) {
    let arr = [];
    let sum = 1;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === str[i+1]){
            sum++;
        }else{
            arr.push(sum,str[i]);
            sum = 1;
        }
    }
    return arr
}
let result = simpleCortege("aaaaaaaabaaaa");
console.log(result)