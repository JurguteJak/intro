// KINTAMUJU INICIJAVIMAS

//1

const pirmas = 5;
const antras = 7;
const trecias = 9;

console.log(pirmas);
console.log(antras);
console.log(trecias);

//2

const gyvunas = 'kate';
const gyvunas2 = 'suo';
const gyvunas3 = 'lape';

console.log(gyvunas);
console.log(gyvunas2);
console.log(gyvunas3);

//3

const marks = [9, 3, 5, 7, 1];
const marks2 = [10, 2, 3, 4, 5];
const marks3 = [11, 2, 4, 5, 7];
console.log(marks);
console.log(marks2);
console.log(marks3);

//4

const wrd1 = 'labas';
const wrd2 = 'tau';
const wrd3 = 'sakau';
console.log(wrd1);
console.log(wrd2);
console.log(wrd3);

// Veiksmai su kintamaisiais

//1
const suma = pirmas + antras + trecias;
console.log(suma);

//2
const animal = gyvunas + ' ' + gyvunas2 + ' ' + gyvunas3;
console.log(animal);

//3

const sum = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
const sum2 = marks2[0] - marks2[1] + marks2[2] - marks2[3] + marks2[4];
const sum3 = marks3[0] - marks3[1] + marks3[2] - marks3[3] + marks3[4];
console.log(sum);
console.log(sum2);
console.log(sum3);

// arba

console.log(marks[0] - marks[1] + marks[2] - marks[3] + marks[4]);
console.log(marks2[0] - marks2[1] + marks2[2] - marks2[3] + marks2[4]);
console.log(marks3[0] - marks3[1] + marks3[2] - marks3[3] + marks3[4]);

//4

function hello(w1, w2, w3) {
    let sentence = 'Sakinys: ';
    sentence += w3;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w1;
    sentence += ', ';

    return sentence;
}

console.log(hello('labas', 'tau', 'sakau'));

// Kintamuju palyginimas

//1 

const obuolys = 2;
const kamuolys = 5;

if (obuolys > kamuolys) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (obuolys < kamuolys) {
    console.log('Pomidoras');
}

if (obuolys === kamuolys) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kita karta.')
}

if (obuolys !== kamuolys) {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kita karta.')
}

if (obuolys <= kamuolys) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (obuolys >= kamuolys) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

//2

const coins1 = [9, 3, 5];
const coins2 = [9, 3, 5, 6];
console.log(coins1);
console.log(coins2);

const sum5 = coins1[0] + coins1[1] + coins1[2];
const wallet1 = coins1.length;
console.log(sum5);

const sum6 = coins2[0] + coins2[1] + coins2[2] + coins2[3];
const wallet2 = coins2.length;
console.log(sum6);

//3

if (wallet1 < wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wallet1 > wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wallet1 === wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wallet1 !== wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wallet1 >= wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wallet1 <= wallet2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

//4

const fraze1 = ['labas', 'tau', 'sakau'];
console.log(fraze1);
const count = fraze1.length;

const fraze2 = ['labas', 'tau', 'sakau', 'as'];
console.log(fraze2);
const count2 = fraze2.length;

//5

if (count > count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (count < count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (count === count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (count !== count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (count >= count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (count <= count2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

//4 

