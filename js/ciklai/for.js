/*
FOR - pagrindinis ciklas (en. loop)
*/

console.log('START');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('FINISH');

console.log('START');

for (let i = 3; i < 8; i++) {
    console.log(i);
}

console.log('FINISH');

console.log('START');

for (let i = 3; i < 8; i+=2) {   // I+=2 DIDINI DVIEM
    console.log(i);
}
console.log('FINISH');

console.log('START');

for (let i = 0; i > 8; i++) {     // NIEKO NERODYS NES i >0, SAME i < 0
    console.log(i);
}

console.log('FINISH');    

// JOKIU BUDU NEDARYTI let i =; i >0; i++ NESUSTOS NIEKAD

console.log('START');

for (let i = 20; i > 10; i--) {    
    console.log(i);
}
console.log('FINISH');


console.log('START');

for (let i = 200; i > 100; i-= 23) {   // 
    console.log(i / 10);
}
console.log('FINISH');

console.clear();

const colors = ['white', 'black', 'red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

for (let i = 0; i < 5; i++) {
    console.log(i, colors[i]);
}