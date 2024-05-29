/*
Spread operatorius (padeda perkopijuoti masyvus ir objektus, bei kopijuojant sukurti naujus juos ispleciant)
Destruktorizavimas
*/

// Value by reference
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44;         //lendam i masyva ir suteikiam pirmam indeksui nauja reiksme
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);

//skaiciai, stringai ir boolean nekeiciami taip, kad dalintis atminti

const e = [1, 2, 3];
const f = [...e];              //... reiskia, kad lenda i masyva e ir sukelia reiksmes e
console.log(e, f);

e[0] = 111;
console.log(e, f);

f[2] = 9999;
console.log(e, f);

const g = [0, ...e, ...e, 4, 5];         //pridet galima naujus
console.log(g);

//spread object
const obj1 = { name: 'Jonas', age: 99 };
const obj2 = obj1;

obj1.name = 'Maryte';
console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: '80' };
const obj4 = { ...obj3 };
console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 'S40';   //pasikeicia tik kopijoje esanti info
console.log(obj3);
console.log(obj4);

//pvz. su objektais. paskutine reiksme rodoma, gali keisti todel
const person = {
    name: 'Petras',
    age: 77,
};
const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
};
const fullPersonDetails = {
    id: 111111,
    phone: 872726266,
    ...person,
    ...address,
    name: 'Ona',                      //galima keisti, nes laimi paskutine reiksme
    number: 666,
};
console.log(fullPersonDetails);       // viska istraukia
console.log(fullPersonDetails.id);
console.log(fullPersonDetails.name);  //istraukia tik varda

const str = 'abc';
const arr = ['a', 'b', 'c'];
const obj = { 0: 'a', 1: 'b', 2: 'c' };

console.log(str[0], arr[0], obj[0]);  // bus a a a
// objekte ima indeksus kaip arejuj (ismeta nr.)


const k = [1, 2, 3];
const l = { name: 'Ona', age: 66 };

//ar galima ispredinti is objekto i masyva ? ne
// const o = [...k, ...l];
// console.log(o);

//ar galima ispredinti is masyvo i objektus ? taip
const p = { ...k, ...l };
console.log(p);