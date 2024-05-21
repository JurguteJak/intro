/*
As noriu pamatyti visas galimas laiko/laikrodzio kombinacijas valandos tikslumu.
Intervalas yra nuo 1 iki 12.
Pateikimo formatas: 1:00, 2:00
1:00
1:30
1:45
2:00
...
4:45
*/

//rodys laika kas valanda
// for (let i = 1; i < 12; i++) {
//     console.log(i + ':00');
// }

// for (let val = 1; val <= 4; val++) {
//     console.log('------');
//     let min = 0;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;

// }
//ciklas cikle, kad nekartoti + 15 min (kai zinom kiek kartu kartoti)
// for (let val = 1; val <= 4; val++) {
//     console.log('------');
//     let min = 0;
//     for (let i = 0; i < 4; i++) {
//         console.log(val + ':' + min);
//         min += 15;
//     }
// }

//jeigu nori, kad minutes butu 00, 
// for (let val = 1; val <= 4; val++) {
//     console.log('------');
//     let min = 0;
//     for (let val = 1; val <= 4; val++) {
//         if (min < 10) {
//             console.log(val + ':0' + min);
//         } else {
//             console.log(val + ':' + min);
//         }
//         min += 15;
//     }
// }


for (let val = 15; val <= 17; val++) {
    console.log('------');
    let min = 0;

    for (let i = 1; i < 4; i++) {
        let sek = 0;

        for (let j = 0; j < 3; j++) {
            console.log(val + ':' + min + ':' + sek);
            sek += 20;
        }
        min += 15;
    }
}

//visos imanomos kombinacijos nuo 15:00 iki 16:00, trumpas variantas uzrasymo
// for (let val = 15; val <= 15; val++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sek = 0; sek < 60; sek++) {
//             console.log(val + ':' + min + ':' + sek);
//         }
//     }
// }

console.clear();
// let h = 0;
// let m = 0;
// let s = 0;

function past(h, m, s) {

    for (let h = 0; h < 1; h++) {
        for (let m = 0; m < 60; m++) {
            for (let s = 0; s < 60; s++) {

                console.log(h + ':' + m + ':' + s);
            }
        }
    }
}
