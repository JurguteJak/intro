/*
BOOLEAN - logines reiksmes

- true
- false

Boolean ligikos operatoriai:
- && (and)
- || (or)
 - ! (not)
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI', true + true); 
// pliusas matematiskai veikia todel nenaudojamas booleanams

console.log('-----------')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = false;
const isYoung = false;
let isRich = true;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>', willIGoTo);

const willIGoTo1 = isBeautiful || isYoung || isRich;
console.log('>>>', willIGoTo1);

isRich = true;
 
console.log('-----------')

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------')
console.log(true && true && true);
console.log(true && true && false);

console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log('-----------')

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false|| true);
console.log(false && false || false);

console.clear();

console.log('-----------')

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.clear();

console.log(!true);
console.log(!false);
console.log(!!false);
// daugiau nei 2 sauktukai nerasyti
console.log(!!!false);
console.log(!!!false);

console.clear();

//ND
console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && true && false && false);

console.log(true && false && true && true);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(true && false && false && false);

console.log(false && true && true && true);
console.log(false && false && true && true);
console.log(false && true && false && true);
console.log(false && true && true && false);

console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && false);
console.log(false && false && false && false);

console.clear();

console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && true && false || false);

console.log(true && false && true || true);
console.log(true && false && true || false);
console.log(true && false && false || true);
console.log(true && false && false || false);

console.log(false && true && true || true);
console.log(false && false && true || true);
console.log(false && true && false || true);
console.log(false && true && true || false);

console.log(false && false && false || true);
console.log(false && false && true || false);
console.log(false && true && false || false);
console.log(false && false && false || false);

console.clear();

console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && true || false && false);

console.log(true && false || true && true);
console.log(true && false || true && false);
console.log(true && false || false && true);
console.log(true && false || false && false);

console.log(false && true || true && true);
console.log(false && false || true && true);
console.log(false && true || false && true);
console.log(false && true || true && false);

console.log(false && false || false && true);
console.log(false && false || true && false);
console.log(false && true || false && false);
console.log(false && false || false && false);

console.clear();

console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || true && false && false);

console.log(true || false && true && true);
console.log(true || false && true && false);
console.log(true || false && false && true);
console.log(true || false && false && false);

console.log(false || true && true && true);
console.log(false || false && true && true);
console.log(false || true && false && true);
console.log(false || true && true && false);

console.log(false || false && false && true);
console.log(false || false && true && false);
console.log(false || true && false && false);
console.log(false || false && false && false);

console.clear();

console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && true || false || false);

console.log(true && false || true || true);
console.log(true && false || true || false);
console.log(true && false || false || true);
console.log(true && false || false || false);

console.log(false && true || true || true);
console.log(false && false || true || true);
console.log(false && true || false || true);
console.log(false && true || true || false);

console.log(false && false || false || true);
console.log(false && false || true || false);
console.log(false && true || false || false);
console.log(false && false || false || false);

console.clear();

console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || true || false && false);

console.log(true || false || true && true);
console.log(true || false || true && false);
console.log(true || false || false && true);
console.log(true || false || false && false);

console.log(false || true || true && true);
console.log(false || false || true && true);
console.log(false || true || false && true);
console.log(false || true || true && false);

console.log(false || false || false && true);
console.log(false || false || true && false);
console.log(false || true || false && false);
console.log(false || false || false && false);

console.clear();

console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || true && false || false);

console.log(true || false && true || true);
console.log(true || false && true || false);
console.log(true || false && false || true);
console.log(true || false && false || false);

console.log(false || true && true || true);
console.log(false || false && true || true);
console.log(false || true && false || true);
console.log(false || true && true || false);

console.log(false || false && false || true);
console.log(false || false && true || false);
console.log(false || true && false || false);
console.log(false || false && false || false);

console.clear();

console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || true || false || false);

console.log(true || false || true || true);
console.log(true || false || true || false);
console.log(true || false || false || true);
console.log(true || false || false || false);

console.log(false || true || true || true);
console.log(false || false || true || true);
console.log(false || true || false || true);
console.log(false || true || true || false);

console.log(false || false || false || true);
console.log(false || false || true || false);
console.log(false || true || false || false);
console.log(false || false || false || false);
