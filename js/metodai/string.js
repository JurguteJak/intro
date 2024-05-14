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

console.log('----------');
console.log('split()');