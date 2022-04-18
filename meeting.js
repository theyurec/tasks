/*

Джон пригласил на встречу друзей и записал их в список в таком формате:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Сделайте все буквы в строке заглавными и отсортируйте друзей по алфавиту.

Результат будет такой:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


*/

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
let result = s
    .split(';')
    .map(n=>n.split(':').reverse().join(':'))
    .sort()
    .map(n=>`(${n.split(':')[0]}, ${n.split(':')[1]})`.toUpperCase())
    .join``

console.log(result)
