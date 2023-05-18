// legyen klubfoci, azon belül 1 bajnokság, azon belül 2csapat, majd minden csapatnak 4 poszt, a posztokban 3 ember, az embereknek neve, kora, mezszáma

const ev = " ev"
const kapus = " kapus"
const vedo = " vedo"
const kozeppalyas = " kozeppalyas"
const csatar = " csatar"
const nemzetiseg = "nemzetisege "

const posztok = [
    kapus,
    vedo,
    kozeppalyas,
    csatar,
]


const jatekos1 = {

    nev: "Courtois",
    kor: 30 + ev,
    mezszám: 1,
    poszt: posztok [0],
}

const jatekos2 = {

    nev: "Lunin",
    kor: 24 + ev,
    mezszam: 13,
    poszt: posztok[0],
}

const jatekos3 = {

    nev: "Rüdiger",
    kor: 30 + ev,
    mezszam: 22,
    poszt: posztok[1],
}

const jatekos4 = {

    nev: "Alaba",
    kor:30 + ev,
    mezszam: 4,
    poszt: posztok [1],
}

const jatekos5 = {

    nev: "Modric",
    kor: 37 + ev,
    mezszam: 10,
    poszt: posztok [2],
}

const jatekos6 = {

    nev: "Kroos",
    kor: 33 + ev,
    mezszam: 8, 
    poszt: posztok [2],

}

const jatekos7 = {

    nev: "Vinicius",
    kor: 22 +ev,
    mezszam: 20,
    poszt: posztok[3],
}

const jatekos8 = {

    nev: "Benzema",
    kor: 35 + ev,
    mezszam: 9,
    posztok: posztok[3],

}

//it a Foci.js elso modositasa

let csatarok = [jatekos7, jatekos8]
let kozeppalyasok = [jatekos6, jatekos5]
let vedok = [jatekos4, jatekos3]
let kapusok= [jatekos2, jatekos1]

const poziciok = {
    kapusok:kapusok,
    vedok:vedok,
    kozeppalyasok:kozeppalyasok,
    csatarok:csatarok, 
}//eddig!!!

/*const jatekosok = [
    jatekos1,
    jatekos2,
    jatekos3,
    jatekos4,
    jatekos5,
    jatekos6,
    jatekos7,
    jatekos8,
]*/

const edzo = {

    nev: "Ancelotti",
    nemzetiseg: "olasz",
}

const eredmenyek = {

    SpanyolBajnoksag: 35,
    KiralyKupa: 20,
    BL:14,

}
/*let RealMadrid= {

    KlubNev: "Real Madrid",
    eredmenyek:eredmenyek,
    edzo: edzo,
    //keret: poziciok,

}*/
//console.log(RealMadrid)




// ird ki a teljes keretet

const RealMadridKeret= {poziciok:poziciok}

 const RealMadrid= {

    KlubNev: "Real Madrid",
    eredmenyek:eredmenyek,
    edzo: edzo,
    keret: RealMadridKeret,

}

module.exports = (RealMadrid);
//console.log(RealMadridKeret.poziciok)