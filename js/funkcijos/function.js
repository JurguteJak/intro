/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}

console.log(giveMeSix());
console.log(giveMeFive());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!

Laba diena, as esu Maryte Marytaite!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!
*/

function intro (name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
    return 'Laba diena, as esu VARDAS PAVARDE!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marytaite'));
console.log(intro('Petras', 'Petraitis'));
console.log(intro('Ona', 'Onaityte'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply() {
    return 0;
}

console.log(multiply());

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(-2, 8));
console.log(multiply(3.14, 2));

//Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
//Mano vardas yra Maryte, man 88 metai ir as megstu balionus.
function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
    //return 'Mano vardas yra VARDAS, man XX metai ir as megstu DALYKUS';
}

console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Ona', 66, 'balionus'));
