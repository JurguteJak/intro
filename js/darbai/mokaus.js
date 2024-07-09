//let labas = "labas123";

//function pavadinimas(a, b) {
//    return a + b;
// }

// console.log(pavadi/nimas(5,7));

// function arLyginis(skaicius) {
//     if (skaicius % 2 === 0) {
//         console.log(`${skaicius} yra lyginis`);
// } else {
//         console.log(`${skaicius} yra nelyginis`);
// }
// }

// arLyginis(6);

// function printNumber(kiekis) {
//     for (let i = 0; i <= kiekis; i++) {
//         console.log(i);
//     }
// }

// printNumber(10);

const array = [1, 5, 11, -1, 20, 32];

function biggestNumber(arr) {
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return console.log(biggest);
}
biggestNumber(array);

console.clear();

//surask didziausia skaicių
const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 100];

// function maxValue(arr) {
//     let biggestNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > biggestNumber) {
//             biggestNumber += arr[i];
//         }
//     }
//     return console.log(biggestNumber);
// }

// maxValue(A);

function maxValue(arr) {
    let smallestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            biggestNumber += arr[i];
        }
    }
    return console.log(smallestNumber);
}

maxValue(A);