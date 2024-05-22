/*
Duomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius) pvz +,-,*,/,

*/
function empty() {

}

console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'Labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);

// Kai norite patikrinti ar tai yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('---------------');

//Kai noriu patikrinti ar dirbu su Null, irasyti vietoj tikrinimo dalyko

const tikrinimasDalykas = null;
if (tikrinimasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}

// console.clear();

//pirma tikrinti ar tai object, tada ar null, taad array, jei ne tada jis objektas

//Typeof naudojimas. 

const a = 1111;
console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:');
}

if (typeof a !== 'string') {
    console.log('As dirbu ne su STRING');   //sukeiciami vietom, nes klausi ar nelygu
} else {
    console.log('As dirbu su STRING:');
}
// LOGIKA
const x = 'FFGHJH';
const y = 7;

// if (typeof x !== 'number') {
//     console.log('ERROR: x');
// } else if (typeof y !== 'number') {
//     console.log('ERROR: y');
// } else {
//     console.log('VISKAS OK');
// }

//nustatineji tik vieno kintamojo tipa, ne taip, nes bus sunku paaiskinti kodel rezultatas toks
//if (typeof (x && y) !== 'number') {
//   console.log();
//} else {
//   console.log('OK');
//}

//PVZ kaip rasyti su struktura
let hh = 7;

if (true) {
    hh = 5;
}

//galima rasyti taip, bet nereikia kol kas mandravot

if (true) hh = 5;