/*
Destrukturizavimas istraukia reiksmes (eiliskumas - is eiles)
gimininga 'siela' spread
... rest operatorius t.y. visi like
*/
const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);    //atpjauna nuo 2 indexo

console.log(first);
console.log(second);
console.log(rest);             // likusios reiksmes, nes paemem pirma 2 reiksmes

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau']; //struktura
const [word1, word2, ...restOfDict] = dict;                       // destrukturizavimas. ...restOfDict surenka visas likusias reiksmes

console.log(word1);                     // individualu istraukia
console.log(word2);                     // individualu istraukia
console.log(restOfDict);                //surenka likusius

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];                                //grazina masyva su 2 reiksmemis
}

const res1 = giveMeTwoNumbers();
console.log(res1, res1[0] + res1[1]);

const res2 = giveMeTwoNumbers();
// const n1 = res2[0];
// const n2 = res2[1];

//tas 2 eilutes pakeiciam i:
const [n1, n2] = res2;

console.log(res2, n1 + n2);

// sutrumpinimas:
// const [n1, n2] = giveMeTwoNumbers();
// console.log(n1 + n2);

const person = {
    name: 'Ona',
    age: 66,
    isMarried: true,
};
// const userName = person.name;
// const userAge = person.age;
// const userIsMarried = person.isMarried;

const { age, name } = person;    //eiliskumas nera svarbus objektu
console.log(age);
console.log(name);

//rest panaudojamas... funkcijose. jis dedamas paskutinis parametruose, pirma dedamos fiksuotos reiksmes
//paduodi pavienes reiksmias ir jas surenka i masyva
function drinks(...list) {
    return `Gerimu kiekis: ${list.length}.`
}
console.log(drinks('a', 'b', 'c', 'd'));

// jeigu nedesi ... (su ... paskutinio parametro) tai skaiciuos zodziu ilgius ir siuo atveju ziures antro paduodo zodzio ilgi
function iLike(name, ...list) {
    return `${name} megsta ${list.length} spalvas.`;
}
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));
console.log(iLike('Petras'));

// console.log(Math.max(10, 7));
// console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));

console.clear();

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

for (const { name, age, isMarried } of students) {
    const str = `Mano vardas ${name} ir man ${age} metu (${isMarried ? '' : 'ne '}vedes).`;
    console.log(str);
}