/*
OBJECT - objektas
*/

// const empty = {};
// console.log(empty);

// const stud1 = {
//     name: 'Jonas,',
//     age: 99,
//     isMarried: true,
// };

// console.log(stud1);

const stud2 = {               //gali buti vietom sumaisyta
    isMarried: false,
    name: 'Maryte,',
    age: 88,
};
//taip galime issitraukti kiekvieno reiksme
console.log(stud2);                         // pasieki visa objekto info   
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

// const students = [
//     { name: 'Jonas', age: 99, isMarried: true },
//     { name: 'Maryte', age: 88, isMarried: false },
//     { name: 'Petras', age: 77, isMarried: false },
//     { name: 'Ona', age: 66, isMarried: true },
// ];

// console.log(students[students.length - 1]);   //ilgas variantas
// console.log(students.at(- 1));                //trumpas variantas suzinot paskutini studenta atsiradusi
// // console.log(students.at(-1).name);            //paskutinio vardas
// // console.log(students.at[0].name);             //pirmutinio vardas

const stud3 = {
    name: 'Petras,',
    age: 77,
    isMarried: false,
};

//supaprastinta objekto sintakse
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

//standartine objekto sintakse
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

