/*
STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: ' (vienguba), " (dviguba)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

//Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

//Dviguba (") kabute.
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';                       // du tekstai sujnungti pagamina istisa teksta, todel reikia tarpo
const personSurname = 'Noris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

//Vienguba (') ir dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir" + ' dviguba (") kabutes';
console.log(kabutes12);

//Vienguba (') ir dviguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\') ir dviguba (\") kabutes.";

console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/
const pinigai1 = 0;
const turinys1 = 'Pinigines turinys:';
const money1 = turinys1 + ' ' + pinigai1 + ';';
console.log(money1);

const papildymas = 10;
const veiksmas = 'Pinigine papildyta:';
const krepselis = veiksmas + ' ' + papildymas + ';';
console.log(krepselis);

const pinigai2 = 10;
const turinys2 = 'Pinigines turinys:';
const money2 = turinys2 + ' ' + pinigai2 + ';';
console.log(money2);

const papildymas2 = 90;
const veiksmas2 = 'Pinigine papildyta:';
const krepselis2 = veiksmas2 + ' ' + papildymas2 + ';';
console.log(krepselis2);

const pinigai3 = 100;
const turinys3 = 'Pinigines turinys:';
const money3 = turinys3 + ' ' + pinigai3 + ';';
console.log(money3);


console.clear();

const txt1 = "Pinigines turinys:";
const txt2 = "Pinigine papildyta:";
let x = 0;

console.log(txt1, x, ";");
x += 10;
console.log(txt2, x, ";");
console.log(txt1, x, ";");
x += 90;
console.log(txt2, x - 10, ";");
console.log(txt1, x, ";");

