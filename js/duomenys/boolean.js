/*
BOOLEAN - logines reiksmes

- true
- false

Boolean ligikos operatoriai:
- && (and)
- || (or)
 - ! (not)

 kaip interpretuojami kiti duomenu tipai ir ju reiksmes, jei jos yra naudojamos lyg boolean'ai?

 Stringai:
 - jei tuscias - false
 - jei ne tuscias - true

 Number:
 - jei NaN - false
 - jei nulis - false
 - jei ne nulis - true
 - jei Infinity - true
 - jei -Infinity - true

 Array:
 - jei tuscias - true
 - jei ne tuscias - true

  Object:
 - jei tuscias - true
 - jei ne netuscias - true

   Undefined:
 - jei tuscias - false
 - jei null - false

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

console.log(false && false || true);
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

console.clear();

//tikrinimo pvz
const bbb = 4 + 2;

if (bbb === 7) {
    console.log(true);
} else {
    console.log(false);
}

// gali buti tik if (bbb) { }, o tada ziuret kaipinterpretuojami kiti duomenu tipai ir ju reiksmes, jei jos yra naudojamos lyg boolean'ai?