//dvigubinam
function double(list) {
    const result = [];
    for (const item of list) {
        result.push(item * 2);
    }
    return result;
}

// trigubinimas
function triple(list) {
    const result = [];
    for (const item of list) {
        result.push(item * 3);
    }
    return result;
}

const a1 = [1, 2, 3];
console.log(a1, triple(a1));

const a2 = [10, 2, 8, 4, 6];
console.log(a2, triple(a2));

function map(list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }
    return result;
}

console.log(map(a1, n => n * 2));
console.log(map(a2, n => n * 3));      //trigubinam

console.log(map(a2, n => 0));         //nurodom grazinti 0
console.log(map(a2, n => n + 1));     // prie gauto skaiciaus pridedam 1
console.log(map(a2, n => (2 * n + 1) % 10));     // prie gauto skaiciaus pridedam 1

console.log('-----------------');
console.log(a1);
console.log(a1.map(n => n * 2));

console.log(a2);
console.log(a2.map(n => n * 2));     //mapina ty map(irasom ka norim padaryti)

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

//supaprastintas vaizdas
const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

console.clear();

const marks = [10, 2, 8, 4, 6];

// const updateMarks = marks.map(n => n + 1 > 10 ? 10 : n + 1);
// console.log(updateMarks);

function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }
    return mark + 1;
}

const updateMarks2 = marks.map(increaseMarks);
console.log(updateMarks2);

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];

const positiveNumbers = randomNumbers.filter(n => n >= 0);
// randomNumbers.filter() eina per nurodyta masyva ir filtruoja. (true arba false) 
console.log(positiveNumbers);

const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);

const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);

const randomData = [0, 10, -3, 'labas', 3.14, -3.14, true, NaN, Infinity, 5, [], 777, -13, {}, undefined, -2.727];

//teigiami sveikieji skaiciai (visi isskyrus 0)
//ne neigiami sveikieji skaiciai (su nuliu)
const tss = randomData
    .filter(n => true)
    .filter(n => Number.isInteger(n))
    .filter(n => n > 0);

console.log(tss);

const tss2 = randomData
    .filter(n => typeof n === "number")
    .filter(n => !isNaN(n))     // same .filter(n => !Number.isNaN(n))
    .filter(n => isFinite(n))  // ismeta NaN ir begalybe
    .filter(n => n >= 0)
    .filter(n => n % 1 === 0);

console.log(tss2);

//greitas rezultatas, naudojantis maziau resursu
const tss3 = randomData
    .filter(n => Number.isInteger(n) && n >= 0);

console.log(tss3);

// SORT tinkamas zodziams, o skaiciams tai reikia idet funkcija
const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);

dictionary.sort();
console.log(dictionary);

const jonasmarks = [10, 111, 2, 8, 201, 4, 6, 1];
console.log(jonasmarks);

// neigiamas skaicius -> a eina i prieki
//                  0 -> a ir b lieka savo vietose
// teigiamas skaicius -> a eina i gala

//(5, 7) => neigiamas
//(7, 5) => teigiamas
//(7, 7) => 0
//(a, b) => a-b >>> ???


// isrykiuojama didejimo tvarka
jonasmarks.sort((a, b) => a - b);
console.log(jonasmarks);
console.log(jonasmarks[0]);
console.log(jonasmarks.at(-1));

// isrykiuojama mazejimo tvarka
jonasmarks.sort((a, b) => b - a);
console.log(jonasmarks);

// SORT galima naudoti objektui, bet reik iterpt funcija
const students = [
    { name: 'Jonas', marks: 7 },
    { name: 'Maryte', marks: 10 },
    { name: 'Petras', marks: 4 },
    { name: 'ona', marks: 2 },
];
students.sort((a, b) => a.marks - b.marks);
console.log(students);
console.log('Maziausias vidurkis:', students[0].marks);
console.log('Maziausio autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).marks);
console.log('Didziausio autorius:', students.at(-1).name);
