function numberSize(n) {
    const nAsText = '' + n;     // '' + 2 = '2'
    if (typeof n !== 'number') {
        return 'Bolgas duomenu tipas.'
    }

    if (nAsText === 'NaN'                 // arba if(!isFinite(n)) {
        || nAsText === 'Infinity'                 //return 'Duok normalu skaiciu';
        || nAsText === '-Infinity') {             // }
        return 'Duok normalu skaiciu';
    }

    let size = nAsText.length;

    //desimtainis
    if (n % 1 !== 0) {
        size--;
    }
    //neigiamas
    if (n < 0) {
        size--;
    }
    return size;
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(3.1415), '-->', 5);
console.log(numberSize(-25), '-->', 2);
console.log(numberSize(-4895), '-->', 4);
console.log(numberSize(-3.14), '-->', 3);
console.log(numberSize(-3.1415), '-->', 5);

console.log(numberSize(NaN));
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));

console.log(numberSize());
console.log(numberSize(true));
console.log(numberSize(false));
console.log(numberSize('zodis belekoks, ka zinau'));
console.log(numberSize('pomidoras'));
console.log(numberSize(''));
console.log(numberSize([]));
console.log(numberSize([1]));
console.log(numberSize([1, 2]));
console.log(numberSize(['labas', 'rytas']));
console.log(numberSize(['labas', 'rytas', 'Lietuva']));
console.log(numberSize(undefined));
console.log(numberSize(null));
console.log(numberSize(numberSize));

// const a = 1452;
// console.log();
// console.log('' + a);           // 1 budas konvertuoti skaiciu i STRING
// console.log(a.toString());     // 2 budas konvertuoti skaiciu i STRING

// console.log(typeof a);
// console.log(typeof ('Labas' + a));
// console.log(typeof (a.toString()));

// console.log('' + 'Labas');
// console.log('' + true);
// console.log('' + false);
// console.log('' + []);
// console.log('' + [1, 2, 3]);
// console.log('' + numberSize);

console.log('------');
