//FUNKCIJOS
//1
function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

//2
function multiply(firstNumber, secondNumber) {
    const answer = firstNumber * secondNumber;
    return answer;
}

console.log(multiply(2, 2));
console.log(multiply(2, -2));
console.log(multiply(2, 3.1415));
console.log(multiply(2.727, 3.1415));
console.log(multiply(-2.727, 3.1415));
console.log(multiply(-2.727, -3.1415));

console.log(multiply(2, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(Infinity, -Infinity));

console.log(multiply(2, NaN));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, -NaN));

console.log('-------------');

//NETINKAMO TIPO REIKSMES. skirtingo tipo reiksmiu nereikia dauginti, isskyrus ilgis
console.log(multiply(5, 'Labas'));
console.log(multiply(5, 'Labas'.length));
console.log(multiply(5, []));
console.log(multiply(5, [].length));
console.log(multiply(5, [7]));
console.log(multiply(5, [7].length));
console.log(multiply(5, [7, 2]));
console.log(multiply(5, [7, 2].length)); //masyvo ilgis 2, nes 2 skaiciai ir suskaiciuoja 10

console.log(multiply(5, true));   // neturetu buti naudojama
console.log(multiply(5, false));  // neturetu buti naudojama

console.log(multiply(5, undefined));
console.log(multiply(5, null));
console.log(multiply(5, multiply));
console.log(multiply(5, multiply()));      //iskvietimas funkcijos multiply()
console.log(multiply(5, multiply(2, 4)));  //pirma skaiciuoja multiply(2, 4) ir tada (5, 8); GERAS, naudojamas
console.log(multiply(5, (2, 4)));          //negalima taip, nesamone skaiciuos
console.log(multiply(5));                  // duota viena reiksme todel gaunasi NAN, nes 5 dauginama is Undefined (nes neduota)


console.clear();
//PVZ

function multiply(a, b) {
    /*
    - jeigu, pirmas parametras nera skaicius
        - graziname klaidos pranesima
    - jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima   

    - Atskirame kintamajame issisaugojame sandaugos reiksme
    - Graziname sandaugos reiksme
    */
}



function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
    const answer = a * b;
    return answer;
}

console.log(multiply(2, 2));
console.log(multiply(5, 'Labas'.length));
console.log(multiply(5, undefined))
console.log(multiply(5, null));
