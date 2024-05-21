/*
ARROW FUNCTION - rodykline funkcija, lamba funkcija
*/

const n1 = 7;
const n2 = 5;

//function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function diff(a, b) {
//     return a - b;
// }
// console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

//kitoks, grazesnis variantas, 
//kai kintamajam priskiriama anonimine funkcija
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// function multi(a, b) {
//     return a * b;
// }
// console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

//dar vienas pvz kitokio pateikimo formato. pavadinimas iskeliamas pries ir sukuriama kintamajam priskirta logikos dalis
const multii = function (a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multii(n1, n2)}`);

// arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
// jeigu logikos bloke yra tik 1 procedura
// tai galima nerasyti {return} (jei yra ciklai ar if negalima trint)
const multis = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${multis(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra tik vienas parametras
//tai galima nerasyti ()
const square = n => n * n;
console.log(`${n1} * ${n1} = ${square(n1, n1)}`);

//senovinis variantas
// function sqr(n) {
//     return n * n;
// }
// console.log(`${n1} * ${n1} = ${sqr(n1)}`);
// console.log(`${n2} * ${n2} = ${sqr(n2)}`);

function hi(name) {
    //return 'Hi, my name is  ' + name + '!';
    return `Hi, my name is  ${name}!`;          // naujas geras variantas
}
console.log(hi('Jonas'));
console.log(hi('Maryte'));

//trumpas variantas
// const hi = name => `Hi, my name is  ${name}!`;   

// console.log(hi('Jonas'));
// console.log(hi('Maryte'));

// incialai bus tik ty pirmos raides vardo pavardes
// function abbr(firstname, lastname) {
//     return firstname[0] + '.' + lastname[0] + '.';
// }
// console.log(abbr('Chuck', 'Noris'));
// console.log(abbr('Jonas', 'Kazlauskas'));

//paturbinimas
const abbr = (a, b) => a[0] + '.' + b[0] + '.';
const abbr1 = (a, b) => `${a[0]}.${b[0]}.`;       // kitas budas

console.log(abbr('Chuck', 'Noris'));
console.log(abbr('Jonas', 'Kazlauskas'));

//SVARBU
//jei funkcija rasom, tai logiskumas nesvarbu
console.log(vienas());

function vienas() {
    return 'VIENAS';
}
console.log(vienas());

//jei rasai sutrumpinta varianta, tai eiliskumas butinas, kaip pvz console.log nerasom pirma sprendimo
// console.log(antras());

// const antras = () => 'ANTRAS';

// console.log(antras());

