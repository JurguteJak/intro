/*Create a function that will return a string that combines all of the letters 
of the three inputed strings in groups. Taking the first letter of all of the inputs
and grouping them next to each other. Do this for every letter, see example below!
 */

function tripleTrouble(one, two, three) {

    let x = ''
    for (i = 0; i < one.length; i++) {
        x += one[i] + two[i] + three[i]
    }
    return x
}

console.log(tripleTrouble('aaa', 'bbb', 'ccc'));
console.log(tripleTrouble('Sea', 'urn', 'pms'));

/*
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S.Each array includes only integer numbers.Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

/*
Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description We need a function that can transform a string into a number. What 
ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid
 representation of an integral number.
 */

const stringToNumber = function (str) {
    return +str;
}

console.log(stringToNumber('1234'));

/*
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/javascript
*/
function paperwork(n, m) {
    if (n < 0 || m < 0);

    return n * m;
}

console.log(paperwork(5, 5));

//arba
function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}
console.log(paperwork(5, 5));


function numberToString(num) {
    return num + "";
}

console.log(numberToString(67));

function maps(x) {
    const maps = [];
    for (let i = 0; i < x.length; i++) {
        maps.push(x[i] * 2);
    }
    return maps;
}

console.log(maps([1, 2, 3,]));


function whatday(num) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (num >= 1 && num <= 7) {
        return weekdays[num - 1];
    } else {
        return "Wrong, please enter a number between 1 and 7";
    }
}

console.log(whatday(3));



