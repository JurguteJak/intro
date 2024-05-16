/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log('Labas rytas, Lietuva');

console.log(word[0]);
console.log('Labas rytas, Lietuva'[0]);

console.log(word.charAt(0));
console.log('Labas rytas, Lietuva'.charAt(0));

console.log(word.charCodeAt(0));

console.log('Labas'.concat('rytas', 'Lietuva'));         // sujungia kelis stringus
console.log('Labas'.concat('rytas').concat('Lietuva'));

console.log('----------');
console.log('endsWith()');
console.log('labas'.endsWith('s'));      //nustatyti ar baigiasi tekstas su ieskoma pabaiga
console.log('labas'.endsWith('gg'));
console.log('labas'.endsWith('as'));
console.log('labas'.endsWith('bas'));
console.log('labas'.endsWith('abas'));
console.log('labas'.endsWith('Labas'));    //false, nes l turi buti mazoji (turi buti identiski simboliai)

console.log('----------');
console.log('startsWith()');
console.log('labas'.startsWith('x'));
console.log('labas'.startsWith('gg'));
console.log('labas'.startsWith('l'));
console.log('labas'.startsWith('L'));

console.log('----------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('o'));
console.log('Pomidoras'.includes('mid'));

console.log('----------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));      //jei nerandi indexo tai -1
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('mido'));   //grazina rasto teksto pradzia tik
console.log('Pomidoras'.indexOf('o'));      //grazina tik pirmo rasto pozicija
console.log('Pomidoras'.indexOf('o', 2));   //jei norim rasti ir antros o pozicija

//nenaudoti neigiamu, NaN, null, undefind, Infinity, 
console.log('----------');
console.log('repeat()');
console.log('A'.repeat(10));                //duota teksta padaro nurodyta kartu didesni
console.log('Labas'.repeat(5));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(null));
console.log('Labas'.repeat(null));

console.log('----------');
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));  //abi o pakeicia
console.log('Pomidoras'.replace('omido', 'ukuo'));
console.log('Pomidoras'.replace('AA', 'BB'));

console.log('----------');
console.log('replaceAll()');
console.log('Pomidoras'.replaceAll('o', '_'));

console.log('----------');
console.log('slice()');
console.log('Pyragelis'.slice());          //nuo nurodytos pozicijos 
console.log('Pyragelis'.slice(2));
console.log('Pyragelis'.slice(2, 4));      //ima nuo 2 imtinai iki 4, tik 4 neima jau


const p = 'vasara';
console.log(p.slice(-3));             //paskutiniai nuo galo 3
console.log(p.slice(6));              // nuo pradzios
console.log(p.slice(p.length - 3));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis, dalis.length);          //bus 7

console.clear();
console.log('----------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';  //kadangi zodziu grandinele, tai norint juos atskirti, kerpam per tarpa '  ' ir gauni masyva su zodziais
const zodziai = sakinys.split(' ');
console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

const sakinys2 = 'bananas';           //kerpa pries kiekviena a ir po jos
const dalys = sakinys2.split('a');
console.log(dalys);

const sakinys3 = 'Pomidoras';         // kerpant visada gaunasi dvi dalys, pvz. pries 's' ir uz 's' (tuscias tekstas)
const dalys1 = sakinys3.split('s');
console.log(dalys1);

const sakinys4 = 'aaWaaWaawaaWaa';    //jei nurodai W tai nekreipia demesio i w mazaja
const daly2 = sakinys4.split('W');
console.log(daly2);

const sakinys5 = 'aawawawawawaa';    //jei nurodai W tai nekreipia demesio i w mazaja
const daly3 = sakinys5.split('a');
console.log(daly3);

const sakinys6 = 'Pomidora';         // kai nera kur kirpti, tai grazina pirmine reiksme
const dalys4 = sakinys6.split('x');
console.log(dalys4);

const sakinys7 = 'Pomidoris';         // kai nenurodai kur kirpti, karpo po raide (pries ir po ne)
const dalys5 = sakinys7.split('');
console.log(dalys5);

//sakinys => tuscias / ne tuscias
// split => tuscias / ne tuscias
// split => (ne) buvo kur kirpti

console.log('----------');
console.log('toLowerCase() toUpperCase()');
console.log('Pomidoras'.toLowerCase());           //visas raides i mazases padaro
console.log('Pomidoras'.toUpperCase());           //visas raides i didziasias padaro

console.log('----------');
console.log('trim ()');
console.log('"' + 'Pomidoras'.trim() + '"');             //nieko nedaro kol nera tarpu
console.log('"' + 'Pomidoras     '.trim() + '"');        //pasalina tarpus esancius gale 
console.log('"' + '    Storas   pomidoras     '.trim() + '"');    //pasalina tarpus esancius gale ir priekyje, bet ne per viduri

//console.log(''.trimEnd());
//console.log(''.trimStart());

// Kaip pasalinti sinbolius:
// const text = 'Labas rytas, Lietuva!';
// const dictionary = ['Labas', 'rytas', 'Lietuva'];
// const dictionary = text.replace(',', '').replace('!', '').split(' ');
// console.log(dictionary);

//Kai norim pasalinti visus simbolius:
const text = 'Labas rytas, Lietuva!, Kaip tu, mieloji, ten laikais?'
const dictionary = text.replaceAll(',', '').replaceAll('!', '').replaceAll('?', '').split(' ');
console.log(dictionary);