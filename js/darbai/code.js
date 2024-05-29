
// pateikta kintamaji iskaidau i atskirus komponentus ir ištraukiu pirmas raides bei padaro mazosiomis

function inc(name) {
    const [fName, lName] = name.split(' ');
    return `${fName[0].toLowerCase()}.${lName[0].toLowerCase()}`;
}
console.log(inc("Sam Harris"));

// pateikta kintamaji iskaidau i atskirus komponentus ir ištraukiu pirmas raides bei padaro didziosiomis

function inc2(name) {
    const [fName, lName] = name.split(' ');
    return `${fName[0].toUpperCase()}.${lName[0].toUpperCase()}.`;
}
console.log(inc2("Jon Tomson"));

/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3, 4]));


//ISSIAISKINT reduce

// function find_average(array) {
//     return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
// }
// console.log(find_average([1, 1, 1]));

