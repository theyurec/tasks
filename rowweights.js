/*
Несколько человек стоят в ряд и длятся на две команды. Первый человек переходит в команду 1, второй переходит в команду 2,
третий переходит в команду 1 и так далее.

Вам даётся массив положительных целых чисел (вес людей), напишите функцию которая вернёт массив из двух целых чисел,
где первое - общий вес команды номер 1, а второе - общий вес команды номер 2.

Пример:

rowWeights([13, 27, 49]) - вернёт [62,27] (62 - общий вес команды номер 1(13+49), а 27 - общий вес команды номер2)

rowWeights([50,60,70,80]) - вернёт [120,140]

rowWeights([70,58,75,34,91]) - вернёт [236,92]

rowWeights([29,83,67,53,19,28,96]) - вернёт [211,164]

rowWeights([0]) - вернёт [0,0]
*/

function rowWeights(arr) {
    let weights = [];
    let weightFirst = 0;
    let weightSecond = 0;
    arr.forEach(function(item, index) {
        (index % 2 === 0) ? weightFirst += item : weightSecond += item;
    });
    weights.push(weightFirst, weightSecond);
    return weights
}
let result = rowWeights([29,83,67,53,19,28,96]);
console.log(result)

