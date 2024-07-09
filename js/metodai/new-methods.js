const text = 'Labas rytas';

console.log(text.repeat(2));

String.prototype.firstSymbol = function () {
    ; return this[0];
}
console.log(text[0]);
console.log(text.firstSymbol());

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toLocaleUpperCase();
}
console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());   // this yra siuo atveju abc

console.log(3.1415.toFixed(2));

Number.prototype.double = function () {
    return 5;
}
console.log((7).double());