/*
Destrukturizavimas 
... rest operatorius
*/
const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);             // likusios reiksmes, nes paemem pirma 2 reiksmes

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau']; //struktura
const [word1, word2, ...restOfDict] = dict;                                       // destrukturizavimas. imama is eiles 1 2 3


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
console.log(res2, res2[0 + res2[1]]);

const person = {
    name: 'Ona',
    age: 66,
    isMarried: true,
};
const userName = person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;

const { age, name } = person;
console.log(age);
console.log(name);

console.clear();

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