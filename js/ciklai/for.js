/*
FOR - pagrindinis ciklas (en. loop)
*/

console.log('START');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('FINISH');

console.log('START');

for (let i = 3; i < 8; i++) {
    console.log(i);
}

console.log('FINISH');

console.log('START');

for (let i = 3; i < 8; i += 2) {   // I+=2 DIDINI DVIEM
    console.log(i);
}
console.log('FINISH');

console.log('START');

for (let i = 0; i > 8; i++) {     // NIEKO NERODYS NES i > 0, SAME i < 0
    console.log(i);
}

console.log('FINISH');

// JOKIU BUDU NEDARYTI let i = 1; i >0; i++ NESUSTOS NIEKAD

console.log('START');

for (let i = 20; i > 10; i--) {
    console.log(i);
}
console.log('FINISH');


console.log('START');

for (let i = 200; i > 100; i -= 23) {   // paskaiciuoti, kad nerodytu daug skaiciu po kablelio
    console.log(i / 10);
}
console.log('FINISH');

console.clear();

console.log('..........');

//                 0       1        2      3        4
const colors = ['white', 'black', 'red', 'green', 'blue', 'violet'];

console.log('..........');

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log('..........');

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);

}

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[colors.length - 1 - i]);
}

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, '-->', marks[i]);
}

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

}
console.log(sum / marks.length);

console.log('.....')

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu.';
    }
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;

}
console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));

const text = 'Labas';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
