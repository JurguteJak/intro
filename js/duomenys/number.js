/*
NUMBERS
- sveikieji / desimtainiai
- teigiami / neigiami
- normalus / ne normalus

"Ne normalus":
    - Infinity
    - -Infinity
    - NaN (not-a-number)

Matematiniai operatoriai:
- aritmetiniai: +, -, /, *, **, %, ++, --
- priskyrimo: +=, -=, /=, *=, **=, %=

*/

const pirmas = 5;
const antras = 7;
const trecias = -2.727;
const nulis = 0;
const asd = 99999999;

console.log(pirmas);
console.log(antras);

const suma = pirmas + antras;
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const dalmuo1 = pirmas / antras;
console.log(dalmuo1);

const dalmuo2 = antras / pirmas;
console.log(dalmuo2);

const sandauga = pirmas * antras;
console.log(sandauga);

const laipsnis1 = pirmas ** antras;     //kelis laipsniu
console.log(laipsnis1);

const laipsnis2 = antras ** pirmas;
console.log(laipsnis2);

console.log(2 ** 2, 2 * 2);            //gali buti daugiau reiksmiu atskirtu kableliu
console.log(2 ** 3, 2 * 2 * 2);
console.log(2 ** 4, 2 * 2 * 2 * 2);

const liekana1 = pirmas % antras;                   // % liekana
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(antras, '%', pirmas, '=', liekana2);

console.clear();

let pinigine = 0;
console.log(pinigine);
console.log(pinigine);
console.log(pinigine);

pinigine = 10;
console.log(pinigine);
console.log(pinigine);
console.log(pinigine);

pinigine = 50;                 //prisimena paskutine pateikta reiksme
console.log(pinigine);
console.log(pinigine);
console.log(pinigine);

console.clear();

let money = 0;
console.log(money);

money = 5;
console.log(money);

// 5+1  pinigines papildymas +1                           
money = money + 1;
console.log(money);

//6+2  paskutine reiksme t.y 6 papildoma + 2 
money = money + 2;
console.log(money);

// = 8+3 ir tt
money = money + 3;
console.log(money);

let greitukas = 13;
console.log(greitukas);

greitukas = greitukas + 3;
console.log(greitukas);

greitukas = 2 * greitukas - 1;     // galima ir kitus veiksmus daryti
console.log(greitukas);

greitukas = greitukas % 10;
console.log(greitukas);

greitukas = greitukas ** 1000000;
console.log(greitukas);

greitukas = 69;
console.log(greitukas);

console.clear();

let x = 1;

x += 1;                         //sutrumpinimas x = x + 1
console.log(x);

x *= 20;
console.log(x);

x /= 5;
console.log(x);

x %= 3;
console.log(x);

x **= 10;
console.log(x);

console.clear();

let y = 10;
console.log(y);

y += 10 + 10 + 10;                //40
console.log(y);

y -= 5 * 4;                   // 40-20=20
console.log(y);

y -= 10 + 5 * 4;             // 20- 30 (nes suskaiciuoja pirma viska kas desineje)
console.log(y);

let makaronai = 2;
console.log(makaronai);

makaronai = makaronai + 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

makaronai++;
console.log(makaronai);

++makaronai;
++makaronai;
++makaronai;
++makaronai;
++makaronai;
console.log(makaronai);

let g = 6;

console.log(g);
// pirmiau spausdina, po to padidina
console.log(g++);
// pirmiau padidina, po to spausdina
console.log(++g);

console.log(g);

let t = 9;
console.log(t);
console.log(++t);
console.log(t);
