/*
ARRAY - masyvas, sąrašas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;

console.log(average1);

//              0, 1, 2, 3, 4, .......
const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.clear();

//10, 2, 8, 4, 6
let sum3 = 0;
let index = 0;

//index = 0 -> 1
sum3 += marks[index++];    //istraukia pirma pozicija ty 10 kitaip sakant masyve esanti skaiciu
sum3 += marks[index++];    //istraukia pirma pozicija ty 2
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];;

console.log(sum3);

console.log(marks[52222]);

//? = 30 + undefined = NaN

console.clear();

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Vidurkis: nera pazymiu.';
    }

    let sum = 0;

    // yra bent 1 pazymys



    return 'Vidurkis: ' + (sum / marks.length);
}

const jonoPazymiai = [];
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));
