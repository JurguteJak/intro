console.log('----------');
console.log('concat()');

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2);      //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

console.log(children);

console.log('Labas'.concat('rytas').concat('Lietuva'));     // LabasrytasLietuva
console.log('Labas'.concat(' ', 'rytas', ' ', 'Lietuva'));  // Labas rytas Lietuva
console.log('Labas' + ' ' + 'rytas' + ' ' + 'Lietuva');     // Labas rytas Lietuva

// stringas ir masyvas
const masyvas = ['Labas', 'rytas'];
const stringas = 'Lietuva';

const sujungtasStringas = masyvas.join(' ') + ' ' + stringas;

console.log(sujungtasStringas);        // "Labas rytas Lietuva"

console.log('----------');
console.log('join()');
// is masyvo elemntai sujungti i stringa
const masyv = ['Labas', 'rytas', 'Lietuva'];
const sujungtStringas = masyv.join(' ');
console.log(sujungtStringas);          // "Labas rytas Lietuva"

// const masyvas = ['Labas', 'rytas', 'Lietuva'];
// const sujungtasStringas = masyvas.join();
// console.log(sujungtasStringas);     // "Labas,rytas,Lietuva"

const skaiciai = [1, 2, 3, 4, 5];
const sujStringas = skaiciai.join(' - ');
console.log(sujStringas);              // "1 - 2 - 3 - 4 - 5"

console.log('labas'.endsWith('s'));    // true

// surasti didziausia skaiciu masyve
const a = [1, 25, 100, -54, 2, 0, -95, 3, 15, 47, -31];

function findNumber(arr) {
    let biggestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
}
console.log(findNumber(a));

function findNumb(arr) {
    let smallestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}
console.log(findNumb(a));

// surasti didziausia neigiama skaiciu

function largestNegativeNumber(arr) {
    let negativeNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] > negativeNumber) {
            negativeNumber = arr[i];
        }
    }
    return negativeNumber;
}
console.log(largestNegativeNumber(a));

// surasti didziausia skaiciu, kuris yra mazesnis uz 50

function bigNr(array) {
    let nr = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 50 && array[i] > nr) {
            nr = array[i];
        }
    }
    return nr;
}
console.log(bigNr(a));

// suskaiciuoti  kiek turime teigiamu skaiciu

function count(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum++
        }
    }
    return sum;
}
console.log(count(a));

// suskaiciuoti teigiamu skaiciu suma

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];                    // prideda kiekviena rasta nari
        }
    }
    return sum;
}
console.log(arrSum(a));

// suskaiciuoti neigiamu skaiciu kvadratu (skaiciu pakeltu kvadratu) suma

function quater(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            sum += array[i] ** 2;
        }
    }
    return sum;
}
console.log(quater(a));

// suskaiciuoti kiek skaiciu patenka i intervala (imtinai) 25-75

function interval(array) {
    let range = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 25 && array[i] <= 75) {
            range++;
        }
    }
    return range;
}
console.log(interval(a));

//suskaiciuoti kiek skaiciu yra nuliniai

function nuls(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            number++
        }
    }
    return number;
}
console.log(nuls(a));

// suskaiciuoti kiek skaiciu be liekanos dalijasi is 3

function liekana(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            count++
        }
    }
    return count;
}
console.log(liekana(a));

// suskaiciuoti neigiamu skaiciu vidurki

function average(array) {
    let nr = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            nr++;
            sum += array[i];
        }
    }
    return (sum / nr).toFixed(2);
}
console.log(average(a));



function differenceInAges(ages) {
    let biggestAge = ages[0];
    let smallestAge = ages[0];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > biggestAge) {
            biggestAge = ages[i];
        }
        if (ages[i] < smallestAge) {
            smallestAge = ages[i];
        }
    }
    let difference = biggestAge - smallestAge;

    return [smallestAge, biggestAge, difference];
}
console.log(differenceInAges([82, 15, 6, 38, 35]));

// galima taip su metodais

function differenceInAges(ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
    diff = max - min

    return [min, max, diff]
}
console.log(differenceInAges([82, 15, 6, 38, 35]));

// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
    let ats = [];
    for (const n of arr1) {
        if (!ats.includes(n))
            ats.push(n)
    }
    for (const n of arr2) {
        if (!ats.includes(n)) {
            ats.push(n)
        }
        ats.sort((a, b) => a - b)
    }
    return ats
}

console.log(mergeArrays([1, 5, 3, 4], [8, 6, 7, 5]));

function invert(array) {
    if (invert > 0) {
        return -invert;
    }
}

console.log(parseInt('87'));

