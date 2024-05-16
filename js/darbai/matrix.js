const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

//n-matis masyvas
//nth
const students = [
    [10, 9, 8, 7],                        //jono pzymiai
    [9, 8, 7, 6, 5],                      //marytes pazymiai
    [7, 8, 9, 7, 8, 9, 7, 8, 9],
    [8, 8, 8, 8, 8, 8, 8],
];

//jonas(0)
const jonoPazymiai = students[0];   // paziuri Jono pazymius, nes rodo pirmo t.y. 0 indexas

//greitas variantas suzinoti visus pazymius pvz Jono
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai);
for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i]);
}

//marytes(1)
const marytesPazymiai = students[1];
console.log(marytesPazymiai);
console.log(marytesPazymiai[0]);
console.log(marytesPazymiai[1]);
console.log(marytesPazymiai[2]);
console.log(marytesPazymiai[3]);

// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

console.log('----');

//greitas variantas suzinoti visus pazymius
console.log(students[1]);
for (let i = 0; i < students[1].length; i++) {
    console.log('maryte', students[1][i]);
}

console.log(students);

console.log('----');

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [[8, 9, 10], [11, 12, 13, [14, 15]]],
];

console.log(gorila[1]);
console.log(gorila[1][0]);
console.log(gorila[1][1]);
console.log(gorila[1][1][0]);
console.log(gorila[1][1][1]);
console.log(gorila[1][2]);
