const words = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
// FOR
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(i, words[i]);
}

//FOR-OF kitoks uzrasymas(leciau veikia tik)
for (const word of words) {
    console.log(word);
}

// su objektu
const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

// indeksas reikalingas kai nori suzinoti vieta
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(i, students[i]);
}

// for-Of indekso(pozicijos) nerodo
for (const student of students) {
    console.log('--', students);
}

// kai nori matyti indekso pozicija
let forOfi2 = 0;
for (const student of students) {
    console.log('--', forOfi2++, students);
}

//WHILE //toliau visi pateikti 3 pvz vienodi
const words2 = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
let whileI = 0;
while (whileI < words2.length) {
    console.log('while:', whileI, words2[whileI]);
    whileI++;
}

for (let i = 0; i < words2.length; i++) {
    console.log('for:', i, words2[i]);
}

//vienas ir tas pats, tik kai issikeliam let i ir ++ nukeliam(kabletaskis lieka)

// let i = 0;
// for (; i < words2.length;) {
//     console.log('for:', i, words2[i]);
//     i++
// }

//begaliniam ciklui while tinka. PVZ. (idetas if break sustabdo nurodytoj vietoj, nes kitaip suksis begalo)
let whileI2 = 0;
while (true) {
    console.log(whileI2++);
    if (whileI2 > 10) {
        break;
    }
}

console.log('------');

const marks = [10, 2, 8, 4, 6];
for (let i = 0; i < marks.length; i++) {
    // console.log(marks[i]);               //paduodam spausdinti visus is eiles marks

    if (marks[i] === 4) {
        // console.log(i);       // idetas sis rodo, kuri 8 pozicija(jei reikia)
        break;
    }
}

console.log('------');

//break'ina tevini cikla stabdo (switch jei yra, arba cikla)
for (let h = 0; h <= 12; h++) {
    for (let m = 0; m <= 60; m += 5) {
        console.log(`${h}:${m}`);
        // if (m > 13) {
        //     break;
        // }
        switch (m) {
            case 15:
                console.log('Penkiolika');
                break;
        }
    }
}

//paskaiciavimas vidurkio kai turim nesamones. skaiciuojama kai yra negerai kazkas
const hackerMarks = [10, 'Desimt', 8, 2, -7, 6, 4, 3.14];
let sum = 0;
let count = 0;

for (const mark of hackerMarks) {
    if (typeof mark !== 'number'
        || mark > 10                  // jeigu pazymys didesnis nei 10
        || mark < 1                   // jeigu pazymys mazesnis nei 1
        || mark % 1 !== 0) {          // skaicius su kableliu
        continue;
    }
    sum += mark;
    count++;                          // susikuriam Count, kad skaiciuoti tik reikiamus pazymius
}
console.log(sum / count);

//ziurima per teigiama prizme. ar gautas pazymys yra geras
const hackerMarks2 = [10, 'Desimt', 8, 2, -7, 6, 4, 3.14];
let sum2 = 0;
let count2 = 0;

for (const mark of hackerMarks2) {
    if (typeof mark === 'number'
        && mark <= 10
        && mark >= 1
        && mark % 1 === 0) {
        sum2 += mark;
        count2++;
    }
}
console.log(sum2 / count2);