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

    nev: "ter Stegen",
    kor: 31 + ev,
    mezszám: 1,
    poszt: posztok [0],
}

const jatekos2 = {

    nev: "Arnau",
    kor: 21 + ev,
    mezszam: 36,
    poszt: posztok[0],
}

const jatekos3 = {

    nev: "Kounde",
    kor: 34 + ev,
    mezszam: 23,
    poszt: posztok[1],
}

const jatekos4 = {

    nev: "Araujo",
    kor:24 + ev,
    mezszam: 4,
    poszt: posztok [1],
}

const jatekos5 = {

    nev: "Gavi",
    kor: 18 + ev,
    mezszam: 30,
    poszt: posztok [2],
}

const jatekos6 = {

    nev: "Pedri",
    kor: 20 + ev,
    mezszam: 8, 
    poszt: posztok [2],

}

const jatekos7 = {

    nev: "Lewandowski",
    kor: 34 +ev,
    mezszam: 9,
    poszt: posztok[3],
}

const jatekos8 = {

    nev: "Dembele",
    kor: 26 + ev,
    mezszam: 7,
    posztok: posztok[3],

}

const kapusok =[jatekos1, jatekos2]
const vedok = [jatekos3, jatekos4]
const kozeppalyasok = [jatekos5, jatekos6]
const csatarok = [jatekos7, jatekos8]

const poziciok= {

    kapusok: kapusok,
    vedok: vedok,
    kozeppalyasok: kozeppalyasok,
    csatarok:csatarok,
}


const edzo = {

    nev: "Xavi",
    nemzetiseg: "spanyol",
}

const eredmenyek = {

    SpanyolBajnoksag: 27,
    KiralyKupa: 31,
    BL:5,

}
const BarcelonaKeret = {poziciok:poziciok}

const Barcelona= {

    Klubnev: "Barcelona",
    eredmenyek: eredmenyek,
    edzo: edzo,
    keret: BarcelonaKeret,

}

// Ird ki a keretet
 //console.log(Barcelona.keret.poziciok)

 // ird ki a teljes klubot

 //console.log(Barcelona.Klubnev,Barcelona.eredmenyek, Barcelona.edzo, Barcelona.keret.poziciok)

module.exports = (Barcelona);

//ird ki Lewandowski mezszamat és eletkorat

//console.log("Lewandowski mezszama: ", Barcelona.keret.poziciok.csatarok[0].mezszam, "Az eletkora pedig: ", Barcelona.keret.poziciok.csatarok[0].kor)