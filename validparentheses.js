/*
Создайте функцию, которая принимает строку, состоящую из скобок, и возвращает true, если все скобки закрыты правильно.

Примеры:
 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true
*/

function valid(str) {
    let wtf = str.includes('()');
    return wtf
}
let result = valid('(()))');
console.log(result)