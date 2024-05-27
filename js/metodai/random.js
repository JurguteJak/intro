console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function moneta() {
    if (Math.random() < 0.5) {
        // [0..0.5]
        return 'Skaicius';
    } else {
        // [0.5..1]
        return 'Herbas';
    }
}

const metimuKiekis = 12;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}
console.log('HERBU KIEKIS', herbai);
console.log('SKAICIU KIEKIS', metimuKiekis - herbai);

//jei norim suzinoti kiek iskrito herbu, tai iterpiam cikla.

// uzduotis: reik atsitiktines savaites dienos
const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penk', 'Ses', 'Sek'];

// [0step..1step] 1
// [1step..2step] 2
// [2step..3step] 3
// ...
// [6step..7step] 7

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);   //apvalinimas i apacia su floor
    console.log(week[index]);
}

// man reikia atsitiktinio skaiciaus intervale muo 1 iki 10 imtinai
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

// man reikia atsitiktinio skaiciaus intervale muo 23 iki 617 imtinai (ciklas nenaudojamas)
function ciklas(min, max) {
    return Math.floor((Math.random() * max - min) + 1);
}

console.log(ciklas(23, 617));