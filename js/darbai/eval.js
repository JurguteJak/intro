function calc(a, operation, b) {
    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        return a / b;
    }
}

console.log((calc(7, '+', 5)));
console.log((calc(7, '-', 5)));
console.log((calc(7, '*', 5)));
console.log((calc(7, '/', 5)));

// skaiciuokle 
function calcObj(n1, operation, n2) {
    const mathFunctions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    return mathFunctions[operation](n1, n2);
}


console.log((calcObj(7, '+', 5)));
console.log((calcObj(7, '-', 5)));
console.log((calcObj(7, '*', 5)));
console.log((calcObj(7, '/', 5)));