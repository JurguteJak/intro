/*
kita forma pateiktas if
*/

const diena = 8;

if (diena === 1) {
    console.log('Pirmadienis');
} else if (diena === 2) {
    console.log('Antradienis');
} else if (diena === 3) {
    console.log('Treciadienis');
} else if (diena === 4) {
    console.log('Ketvirtadienis');
} else if (diena === 5) {
    console.log('Penktadienis');
} else if (diena === 6) {
    console.log('Sestadienis');
} else if (diena === 7) {
    console.log('Sekmadienis');
} else {
    console.log('ERROR');
}

// tas pats tik su SWITCH
const day = 7;
switch (day) {
    case 1:
        console.log('Pirm');
        break;
    case 2:
        console.log('Antr');
        break;
    case 3:
        console.log('Trec');
        break;
    case 4:
        console.log('Ketv');
        break;
    case 5:
        console.log('Penk');
        break;
    case 6:
        console.log('Ses');
        break;
    case 7:
        console.log('Sekm');
        break;
    default:
        console.log('ERROR: switch')
        break;
}

//jei isimtum break tai veiktu, tai susrinktu visus case pvz nuo 4 ir daugiau.

/*situacija kai nereik break, isvardija visas stoteles kurios liko.
jei nori jog rodytu tik iki marsruto pabaigos, tai po paskutines stoteles idet break

autobusas -> marsrutas -> a->b; b->a
*/
const stop = 'Tremtiniu';
switch (stop) {
    case 'N. Vilnia':
        console.log('N. Vilnia');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'K. Mindaugo':
        console.log('K. Mindaugo');
    case 'Z. Tiltas':
        console.log('Z. Tiltas');
        break;
    case 'Lvovo':
        console.log('Lvovo');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Rudens':
        console.log('Rudens');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'N. Vilnia':
        console.log('N. Vilnia');

    // default:
    //     break;
}