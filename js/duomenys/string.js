/*
STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: ' (vienguba), " (dviguba), ` (backtick)

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

// \r -return
// \n - new line
// \t - tab
const HTML = '\
<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<nav>\r\n\
</header>';

console.log(HTML);

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;
const backtick2 = "Backtikine (`) kabute.";
const backtick3 = 'Backtikine (`) kabute.';

// tekstas per kelias eilutes su `` puikiai veikia
const HTML2 = `<header>             
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    <nav>
</header>`;

console.log(HTML2);

const a = 7;
const b = 5;
const c = a + b;

// 1 paprastas variantas
const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);

// 2 variantas parašyti su backtick
const ats2 = `${a} + ${b} = ${c}`;    //variantas
console.log(ats2);

// 1 variantas uzrasymo
const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 = 'Skaičių intervale tarp ' + start + ' ir '
    + finish + ', besidalijančių be liekanos iš ' + step +
    'yra ' + answer + ' vienetai.';


console.log(mini1);

//  2 variantas sudetingiasniam/ilgiasniam tekstui, kai naudoji ` ir $
const mini2 = `Skaičių intervale tarp ${start} ir ${finish}, 
besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;
console.log(mini2);

console.log(mini1.length);        // ilgi ismatuoja
console.log(mini1[0]);             // simboli kai norime gauti


console.log('' + true);
// arba variantas
console.log(true.toString);