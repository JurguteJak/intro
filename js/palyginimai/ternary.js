/*
UNARY - vienybė (a++, a--)
BINARY - dvejybė (a+b)
TERNARY- trejybė (a?b:c)
*/

let a = 0;

if (4 < 2) {
    a += 10;
} else {
    a -= 5;
}
console.log(a);

// sutrumpintas variantas if else
//      klausim   jei tenkina : jei netenkina salygos
const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 123 : 456;
console.log(c);

const d = 1 + 2 > 3 ? 4 : 5;   // ats 5
console.log(d);

const dd = 1 + (2 > 3 ? 4 : 5);   // ats 6
console.log(dd);

const f = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);

const g = 'pomidoras'[1 < 2 ? 0 : 5];  //istraukia pirma raide p
console.log(g);

const gg = 'pomidoras'[2 + (1 < 2 ? 0 : 5)];  //istraukia a, 8 raide(index 7)
console.log(gg);

// gali buti uzrasyta taip, kai pirma nurodai is kur istraukti ir tada 2-oj eilutej trauki
const gggIndex = 2 + (1 < 2 ? 0 : 5);
const ggg = 'pomidoras'[gggIndex];
console.log(ggg);

//salygas: jei skaicius teigiamas, tai ji sumuojame su savimi
//salyga: jei skaicius neigiamas, tai is jo atimame 10

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

// const n = 7;
// const ats = sum(n, n);
// console.log(ats);

const n = 7;
let ats = null;               //null tai nera reiksmes, bet ja duosime kai apskaiciuosime

if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}

console.log(ats);

//ternary variantas sutrumpintas

const ats2 = n > 0 ? sum(n, n) : diff(n, 10);
console.log(ats2);

/*
Jeigu, tekstas yra trumpas (t.y. iki 5 simboliu),
tai grazink pirma simboli, priesingu atveju, grazink paskutini.
*/

const first = s => s[0];
const last = s => s.at(-1);
// const last = s => s[s.length -1];

const text1 = 'Labas';
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

//Kitas variantas, kai pirma issiaiskini kurio nori ir tada kvieti funkcija

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);


