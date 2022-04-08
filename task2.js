// В этом задании вам необходимо посчитать силу слова. Сила слова определяется суммой показателей всех букв.
// А показатели букв определяются следующим образом: a = 1, b = 2, c = 3 ... z = 26 (используется английский алфавит).
//
// love = l + o + v + e = 54
// friendship = f + r + i + e + n + d + s + h + i + p = 108
// Таким образом дружба (friendship) в два раза сильнее любви (love)

function wordsToMarks(word){
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26};
    let sum = 0;
    for(let key in obj){
        for(let i = 0; i <= word.length; i++){
            if(word[i] == key){
                sum += obj[key]
            }
        }
    }
   console.log(sum)
}
wordsToMarks('knowledge')