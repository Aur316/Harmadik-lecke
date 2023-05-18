const RealMadrid = require ('./RealMadrid')

const Barcelona = require ('./Barcelona')

//console.log (RealMadrid)
//console.log (Barcelona)

let csapatok = [RealMadrid, Barcelona]

const LaLiga = {

    nev: "LaLiga",
    orszag: "spanyol",
    elnok: "Tebas",
    csapatok: csapatok,

}

//console.log(LaLiga)

// kiirni a Real Madrid kozeppalyasait - modositom a RealMadrid.js-t

//console.log("A Real Madrid középpályásai: ",RealMadrid.keret.poziciok.kozeppalyasok)

// ird ki : "Kroos kora 33 ev, és a real mdrid jatekosa"

/*console.log(RealMadrid.keret.poziciok.kozeppalyasok[0].nev, "kora", RealMadrid.keret.poziciok.kozeppalyasok
[0].kor, "és a ", RealMadrid.KlubNev, "jatekosa")*/ //haha, poziciokba nnincs mar [5]... 


// Ha benzema idősebb mint kounde, akkor irjuk ki a realmadrid eredmenyeit, ha nem idosebb, akkor pedig hogy benzema az oregebb

/*if (RealMadrid.keret.poziciok.csatarok[1].kor > Barcelona.keret.poziciok.vedok[0].kor) {
   
    console.log(RealMadrid.eredmenyek)
} else {
    console.log (RealMadrid.keret.poziciok.csatarok[1].nev, "nem oregebb, mint ", Barcelona.keret.poziciok.vedok[0].nev)
}˛*/

// ird ki a Barcelona csatarait
let i=0

for (i=0; i<10; i++ ) {

    console.log(Barcelona.keret.poziciok.csatarok[i])

}

