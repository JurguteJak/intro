/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

//Math bibliotekos metodai
console.log(Math.abs('\nAbs ------------'));
console.log(Math.abs(7));
console.log(Math.abs(-7));
console.log(Math.abs(-3.14));
console.log(Math.abs(-Math.PI));
console.log(Math.abs(Math.PI));

console.log('\n Cbrt ------------');    // kubine saknis
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

console.log('\n Ceil ------------');    // skaiciaus apvalinimas i virsu
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(3.14));
console.log(Math.ceil(-3.14));

console.log('\n Foor ------------');    // skaiciaus apvalinimas apacia
console.log(Math.floor(5));
console.log(Math.floor(0));
console.log(Math.floor(-5));
console.log(Math.floor(3.14));
console.log(Math.floor(-3.14));

console.log('\n Round ------------');    // matematinis apvalinimas
console.log(Math.round(5));
console.log(Math.round(0));
console.log(Math.round(-5));
console.log(Math.round(3.14));
console.log(Math.round(-3.14));

console.log(Math.round(3.00001));
console.log(Math.round(3.49999));
console.log(Math.round(3.5));
console.log(Math.round(3.50001));
console.log(Math.round(3.99999));

console.log(Math.round(-3.00001));
console.log(Math.round(-3.49999));
console.log(Math.round(-3.5));
console.log(Math.round(-3.50001));
console.log(Math.round(-3.99999));

console.log('\n Trunc ------------');    // matematinis apvalinimas
console.log(Math.trunc(5));
console.log(Math.trunc(0));
console.log(Math.trunc(-5));

console.log(Math.trunc(3.00001));        //apvalina ir neziuri po kablelio dalies
console.log(Math.trunc(3.49999));
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.50001));
console.log(Math.trunc(3.99999));

console.log('\n Exp ------------');
console.log(Math.exp(17));
console.log(Math.E ** 17);

console.log('\n Fround ------------');
console.log(Math.fround(5));
console.log(Math.fround(0));
console.log(Math.fround(-5));
console.log(Math.fround(3.14));
console.log(Math.fround(-3.14));
console.log(Math.fround(0.1));
console.log(Math.fround(-0.1));

/*
skirtas apskaičiuoti kvadratų sumos kvadratinę šaknį, ypač kai reikia apskaičiuoti atstumus
tarp taškų įvairiose dimensijose. Jis gali būti naudojamas su įvairiu skaičiumi parametrų,
įskaitant neigiamus skaičius ir nulius, todėl yra labai lankstus ir patogus matematiniams skaičiavimams.
*/
console.log('\n Hypot------------');
console.log(Math.hypot(3, 4));
console.log(Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(1, 1, 1, 1));

console.log('\n Imul------------');          // daugina, retai reikalingas
console.log(Math.imul(10, 17));

console.log('\n Max------------');           //randa didziausia skaiciu is to ka duodi
console.log(Math.max(1, 3,));
console.log(Math.max(-1, -3, 7, 10, 3.14));

console.log('\n Min------------');           //randa maziausia skaiciu, masyvui netinkamas naudoti
console.log(Math.min(1, 3,));
console.log(Math.min(-1, -3, 7, 10, 3.14));

console.log('\n Pow------------');          // pakelta laipsniu
console.log(Math.pow(2, 3));  // tas pats kaip console.log(Math.pow(2 ** 3));\

console.log('\n Random------------')                //generuoti atsitikti skaiciu tarp 0(imtinai) ir 1(neimtinai). Naudojamas tik kai turim daugiau reiksmiu
console.log('Intervale  nuo 0 iki 1 --> [0..1]');   // didziausias skaicius bus 0.99999999, bet ne 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log('\n Sing------------');
console.log(Math.sign(5));                  //grazina 1, tai reiskia teigimas skaicius
console.log(Math.sign(-5));                 // grazina -1 tai reiskia skaicius neigiamas
console.log(Math.sign(0));                  // 0 bus 0
console.log(Math.sign(-0));                 // 0 yr nulis tai bus -0
console.log(Math.sign(Infinity));           // 
console.log(Math.sign(-Infinity));

console.log('\n Sqrt------------');
console.log(Math.sqrt(4));                  // saknies traukimas
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(-4), '21');           // menamieji skaiciai pasiaiskint
console.log(Math.sqrt(-9), '31');
console.log(Math.sqrt(-21), '91');
// i*i = -1;
