/*
OBJECT - objektas {}
*/

// const empty = {}; 
// console.log(empty);

const stud1 = {
    name: 'Jonas,',
    age: 99,
    isMarried: true,
};

console.log(stud1);

const stud2 = {               //gali buti vietom sumaisyta
    isMarried: false,
    name: 'Maryte',
    age: 88,
};
//taip galime issitraukti kiekvieno reiksme
console.log(stud2);                         // pasieki visa objekto info   
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

//  // Apjungimas daug objektu i masyva, bet turi tureti ta pati kieki savybiu t.y. ta pati struktura
const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

console.log(students.length);                  //suskaiciuoti kiek studentu
console.log(students[students.length - 1]);    //ilgas variantas suzinoti paskutinio studento info
console.log(students.at(- 1));                 //trumpas variantas suzinot paskutini studenta atsiradusi
// console.log(students.at(-1).name);            //paskutinio vardas
// console.log(students.at[0].name);             //pirmutinio vardas

const stud3 = {
    name: 'Petras,',
    age: 77,
    isMarried: false,
};

//supaprastinta objekto sintakse, kai istraukiam info turint paprastus duomenis
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

//standartine objekto sintakse naudojama kai nezinai ka reikes istraukti
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

console.clear();

function giveMe(data, key) {
    return data[key];               //raktas key
}
console.log(giveMe({ name: 'Jonas', age: 99 }, 'name'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'age'));
console.log(giveMe({ name: 'Svente', page: 1, size: 3 }, 'title')); //title neegzistuoja todel undefined


// // Sveiki, as VARDAS, man XX metu ir esu/nesu vedes.
// function introduction(studentData) {
//     if (studentData.isMarried === true) {
//         return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir esu vedes.`;
//     } else {
//         return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir nesu vedes.`;
//     }
// }

// console.log(introduction(students[0]));
// console.log(introduction(students[1]));

// // supaprastintas variantas
// function introduction(studentData) {
//     const status = studentData.isMarried ? 'esu' : 'nesu';
//     return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir ${status} vedes.`;

// }

// console.log(introduction(students[0]));
// console.log(introduction(students[1]));
// console.log(introduction(students[2]));
// console.log(introduction(students[3]));

// // variantas kad nereiktu iskonsolinti nauju studentu
// function introduction(studentData) {
//     const status = studentData.isMarried ? 'esu' : 'nesu';
//     return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir ${status} vedes.`;
// }
// for (let i = 0; i < students.length; i++)
//     console.log(introduction(students[i]));