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
const gyvunas3 = 'lapinas';

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

const wrd1 = ['labas', 'tau', 'sakau'];
const wrd2 = ['ate', 'iki', 'ciau'];
const wrd3 = ['dekuj', 'aciu'];
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

//4
const wrd1Total = wrd1[2] + ', ' + wrd1[1] + ', ' + wrd1[0];
console.log(wrd1Total);

const wrd2Total = wrd2[2] + ', ' + wrd2[1] + ', ' + wrd2[0];
console.log(wrd2Total);

const wrd3Total = wrd3[1] + ', ' + wrd3[0];
console.log(wrd3Total);

// Kintamuju palyginimas
//1
console.log('..........');

if (pirmas > antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (pirmas < antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (pirmas === antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (pirmas !== antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (pirmas <= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (pirmas >= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

//2 

console.log(gyvunas, gyvunas.length);
console.log(gyvunas2, gyvunas2.length);
console.log(gyvunas3, gyvunas3.length);
console.log('          '.length);

//3

if (gyvunas.length > gyvunas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (gyvunas.length < gyvunas3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (gyvunas.length === gyvunas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (gyvunas.length !== gyvunas3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (gyvunas.length >= gyvunas3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

if (gyvunas.length <= gyvunas3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.')
}

//4

console.log(wrd1, wrd1.length);
console.log(wrd2, wrd2.length);
console.log(wrd3, wrd3.length);

//5

if (wrd1 > wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wrd1 < wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wrd1 === wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wrd1 !== wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wrd1 >= wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (wrd1 <= wrd3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.clear();

//CIKLAI

// destytojo trumpas variantas

function intevalSum(start, finish) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        answer += i;
    }
    return answer;

}
console.log(intevalSum(0, 0));
console.log(intevalSum(0, 4));
console.log(intevalSum(0, 100));
console.log(intevalSum(574, 815));
console.log(intevalSum(-50, 50));
console.log(intevalSum(-70, 30));

// mano variantas

let ckl = 0;

for (i = 0; i <= 0; i++) {
    ckl += i;
}
console.log(ckl);

let ckl1 = 0;
for (i = 0; i <= 4; i++) {
    ckl1 += i;
}
console.log(ckl1);

let ckl2 = 0;
for (i = 0; i <= 100; i++) {
    ckl2 += i;
}
console.log(ckl2);

let ckl3 = 0;
for (i = 574; i <= 815; i++) {
    ckl3 += i;
}
console.log(ckl3);

let ckl4 = 0;
for (i = -50; i <= 50; i++) {
    ckl4 += i;
}
console.log(ckl4);

let ckl5 = 0;
for (i = -70; i <= 30; i++) {
    ckl5 += i;
}
console.log(ckl5);

console.clear();

//2

//variantas testavimui, kai pats zinai ats

function reverse(text) {
    return text;
}
console.log(reverse('alus'), '-->', 'sula');

console.clear();

//destytojo Geras 1 ir kiti
function reverseString(text) {
    let answer = '';

    //for (let i = 0; i < text.length; i++) {
    //    answer += text[text.length - 1 - i];
    //}

    for (let i = 0; i < text.length; i++) {
        answer = text[i] + answer;
    }

    //for (let i = text.length - 1; i >= 0; i--) {
    //    answer = text[i] + answer;
    //}

    //for (let i = text.length - 1; i >= 0; i--) {
    //    answer = text[text.length - 1 - i] + answer;
    //}

    return answer;
}

console.log(reverseString('labas'), '--->', 'sabal');
console.log(reverseString('sula'), '--->', 'alus');

//3

function numberCount(start, finish, step) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        // jeigu, skaiciu dalinant is step liekana yra nulis, tai aswer didinam vienu vienetu
        if (i % step === 0) {
            answer++;
        }
    }

    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

console.clear();

//FUNKCIJA

function didziausiasSkaiciusSarase(count) {
    if (typeof count !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
        // } else if (typeof count == 'number') {
        //     console.log(didziausiasSkaiciusSarase(152));

        // }
    }

    console.log(didziausiasSkaiciusSarase());

// console.log(didziausiasSkaiciusSarase([]));

// console.log(didziausiasSkaiciusSarase(5125));
// console.log(didziausiasSkaiciusSarase(781));
// console.log(didziausiasSkaiciusSarase(370601234565));
// console.log(didziausiasSkaiciusSarase(true));
// console.log(didziausiasSkaiciusSarase("asd"));
// console.log(didziausiasSkaiciusSarase(NaN));

