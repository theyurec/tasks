// Есть две группы враждующих букв — левые и правые.
// Вам необходимо написать функцию, которая принимает строку fight, состоящую только из маленьких букв, и возвращает, кто выиграл бой. Выигрывает бой та сторона, мощность которой оказалась больше. Если побеждает левая сторона, функция должна вернуть "Left side wins!", а если побеждает правая сторона, функция должна вернуть "Right side wins!", в противном случае функция вернёт "Let's fight again!".
//
// Левая сторона букв и их мощность:
// w - 4
// p - 3
// b - 2
// s - 1
// Правая сторона букв и их мощность:
//     m - 4
// q - 3
// d - 2
// z - 1
// Остальные буквы не имеют силы и являются жертвами.

function alphabetWar(fight){
    let leftSide = {w: 4, p: 3, b: 2, s: 1};
    let rightSide = {m: 4, q: 3, d: 2, z: 1};
    let sumLeft = 0;
    let sumRight = 0;
    for(let key in leftSide){
        for(let i = 0; i <= fight.length; i++){
            if(key == fight[i]){
                sumLeft += leftSide[key];
            }
        }
    }

    for(let key in rightSide){
        for(let i = 0; i <= fight.length; i++){
            if(key == fight[i]){
                sumRight += rightSide[key];
            }
        }
    }

    if(sumLeft > sumRight){
        console.log('Left side wins!')
    } else if(sumRight > sumLeft) {
        console.log('Right side wins!')
    } else {
        console.log('Equal!')
    }

}
alphabetWar('wwwwww')