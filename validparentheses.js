/*
Создайте функцию, которая принимает строку, состоящую из скобок, и возвращает true, если все скобки закрыты правильно.

Примеры:
 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true
*/

function valid(str) {
    let open = '(';
    let close = ')';
    let opensum = 0;
    let closesum = 0;
    for(let i = 0; i <= str.length; i++) {
        if(str[i] === open) opensum++;
        if(str[i] === close) closesum++;
    }
    return (opensum === closesum);
}
let result = valid('(()))');
console.log(result)