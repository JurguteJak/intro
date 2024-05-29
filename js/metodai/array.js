/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log('\n Concat -------');
console.log([...marks].concat());                  // concat prideda i msasyvo gala
console.log([...marks].concat([1, 2, 3]));          // [10, 2, 8, 4, 6, 1, 2, 3]
console.log([...marks].concat(4, 5));
console.log([...marks].concat([1, 2, 3], 4, 5));    // [10, 2, 8, 4, 6, 1, 2, 3, 4, 5]
console.log([...marks].concat(4, 5, [1, 2, 3]));    // [10, 2, 8, 4, 6, 4, 5, 1, 2, 3]
console.log([...marks].concat(4, [1, 2, 3], 5));    // [10, 2, 8, 4, 6, 4, 1, 2, 3, 5]

//tas pats kaip su concat
console.log([...marks, 4, 5, ...[1, 2, 3]]);           // [10, 2, 8, 4, 6, 4, 5, 1, 2, 3]

console.log('\n copyWithin --------');             //kopijuoja save pati
console.log([...marks].copyWithin(2, 0, 1));       //[ 10, 2, 10, 4, 6 ]ty nuo 2 pozicijos nukopijuoja pirmas 2 reiksmes
console.log([...marks].copyWithin(3, 0, 3));       //[ 10, 2, 8, 10, 2 ]

console.log('\n fill ----------');             //nuresetina viska, arba dali ir pakeicia kita nurodyta reiksme
console.log([...marks].fill(999));
console.log([...marks].fill('', 2));           // [ 10, 2, '', '', '' ]
console.log([...marks].fill('', 1, 3));        // [ 10, '', '', 4, 6 ]

// const desimtZuikiu = [];

// for (let i = 0; i < 10; i++) {
//     desimtZuikiu.push('zuikis');
// }
// console.log(desimtZuikiu);

//fill panaudojimas kai reik naujo masyvo su 15 zuikiu
const penkiolikaZuikiu = new Array(15).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log('\n flat -------------');                    // islyginti per viena lygi
console.log([1, 2, 3].flat());                           // [ 1, 2, 3 ] ner ka lygint
console.log([1, [2, 4], 3].flat());                      // [ 1, 2, 4, 3 ]
console.log([1, [2, 4], 3, [5, 6]].flat());              // [ 1, 2, 4, 3, 5, 6 ]
console.log([1, [[2, 4], 3, [5, 6]], 7].flat());         // [ 1, [ 2, 4 ], 3, [ 5, 6 ], 7 ] atsikrato teviniu skliaustu
console.log([1, [[2, 4], 3, [5, 6]], 7].flat().flat());  // [ 1, 2, 4 , 3, 5, 6, 7 ]
console.log([1, [[2, 4], 3, [5, 6]], 7].flat(2));        // [ 1, 2, 4, 3, 5, 6, 7 ]    parasai kiek kartu flat

// pvz dvimates matricos suflatinimas

// const matrix = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
// ];
// console.log([1, 2, 3, 4].flat());

console.log('\n includes----------');                    // yra arba nera(grazina true/false)
console.log([...marks].includes(2));                     // true (nes yra toks pazymys)
console.log([...marks].includes(1));                     // false

console.log([[1], [2], [3], [4]].includes([2]));         // false  

const two = [2];
console.log([[1], two, [3], [4]].includes([two]));       // true randa, nes masyvas su 2

console.log('\n indexOf -----------');
console.log([...marks].indexOf('labas'));               // grazina -1, nes nera tokio skaiciaus
console.log([...marks].indexOf(10));                    // grazina 0, nes 10 yra 0-linis indexas
console.log([...marks].indexOf(6));                     // grazina 4, nes 6 yra 4-as indexas
console.log([...marks].indexOf(1311516));

console.log([...marks].indexOf(10, 2));                 // -1, nes nuo 2 pozicijos nera 10
console.log([...marks, 10].indexOf(10, 2));             // 5, nes pridejom 10 gale, nuo ziurint nuo 2 pozicijos yra 10

console.log('\n lastIndexOf -----------');              // atvirkscias, iesko tik is desines
console.log([...marks]);
console.log([...marks].lastIndexOf(10));               // 0
console.log([...marks].lastIndexOf(4));                // 3
console.log([...marks, 7, 9, 4, 3]);                   // [ 10, 2, 8, 4, 6, 7, 9, 4, 3 ]
console.log([...marks, 7, 9, 4, 3].join(', '));        // 10, 2, 8, 4, 6, 7, 9, 4, 3
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4));    // 7
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4, 5)); // 3 nes nuo 4-os pozicijos (is kaires) 5- as yra 3


console.log('\n join -----------');
console.log(abc);                                       // sutraukia i galutini stringa
console.log([...abc].join());                           // a,b,c,d,e surenka ir per kableli atskiria
console.log([...marks].join());                         // 10,2,8,4,6
console.log([...abc].join(', '));                       // a, b, c, d, e (su tarpu)
console.log([...abc].join(''));                         // abcde
console.log([...marks].join(''));                       // 102846

console.log('\n pop -----------');

const marks2 = [...marks];                      // pasalina po 1 nari nuo galo
console.log(marks2);                            // 6 rodo kad pasalino 
console.log(marks2.pop());                      // [ 10, 2, 8, 4 ]
console.log(marks2);
console.log(marks2.pop());                      // salina 4
console.log(marks2);                            // [ 10, 2, 8 ] jau be 4

console.log('\n push -----------');            // tuometinio masyvo nariu kiekis
const marks3 = [...marks];
console.log(marks3);                           // [ 10, 2, 8, 4, 6 ]
console.log(marks3.push(7));                   // 6 (nes pridejom 7 ty 6-aji nari)
console.log(marks3);
console.log(marks3.push(100));                 // 7

console.log('\n unshift -----------');
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0));                // 6
console.log(marks4);                           // [ 0, 10, 2, 8, 4, 6 ] ikele 0 i prieki
console.log(marks4.unshift(1));                // 7
console.log(marks4);                           // [ 1, 0, 10, 2, 8, 4, 6 ]

console.log('\n shift -----------');
const marks5 = [...marks];
console.log(marks5);                           // [ 10, 2, 8, 4, 6 ] pasalina is prieko reiksme
console.log(marks5.shift());                 // ismeta 10
console.log(marks5.shift());                 // ismeta 2
console.log(marks5.shift());                 // ismeta 8
console.log(marks5);                         // lieka [4,6]

console.log('\n reverse -----------');       // apsukti masyva is kito galo
console.log([...marks]);
console.log([...marks].reverse());          // [ 6, 4, 8, 2, 10 ]

const demo = ['Labas', 'rytas', ',', 'Lietuva', '!'];
console.log(demo);

demo.reverse();                    // apvercia paemes originalias reiksmes
console.log(demo);                 // [ '!', 'Lietuva', ',', 'rytas', 'Labas' ]

const reversedDemo2 = demo.toReversed();
console.log(reversedDemo2);