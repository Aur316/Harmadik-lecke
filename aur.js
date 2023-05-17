const korhazBajmok = require ('./database');

//console.log(korhazBajmok.doktorok[1].paciensek[0].nev);

//bertalan masodik paciense /sulya

//console.log("Bertalan masodik paciensei",korhazBajmok.doktorok[0].paciensek[1].suly)

// masodik doktor
//console.log(korhazBajmok.doktorok[1]);

// osszes pacienset rakjuk be egy variansba es kiirjuk

const osszespaciens = [
    
    korhazBajmok.doktorok[0].paciensek,
    korhazBajmok.doktorok[1].paciensek
]

//console.log(osszespaciens)

//igy kulon irja ki a pacienseket, egybe irjuk ki oket

const pac = [
    
    korhazBajmok.doktorok[0].paciensek[0],
    korhazBajmok.doktorok[0].paciensek[1],
    korhazBajmok.doktorok[0].paciensek[2],
    korhazBajmok.doktorok[0].paciensek[3],
    korhazBajmok.doktorok[1].paciensek[0],    
    korhazBajmok.doktorok[1].paciensek[1],
    korhazBajmok.doktorok[1].paciensek[2],
    korhazBajmok.doktorok[1].paciensek[3],
]

//console.log (pac);

//paciensek sulyarol legyen egy lista

const sulyok = [
    korhazBajmok.doktorok[0].paciensek[0].suly,
    korhazBajmok.doktorok[0].paciensek[1].suly,
    korhazBajmok.doktorok[0].paciensek[2].suly,
    korhazBajmok.doktorok[0].paciensek[3].suly,
    korhazBajmok.doktorok[1].paciensek[0].suly,    
    korhazBajmok.doktorok[1].paciensek[1].suly,
    korhazBajmok.doktorok[1].paciensek[2].suly,
    korhazBajmok.doktorok[1].paciensek[3].suly,

]

//console.log(sulyok)

//ugyanez tisztabban:

const doktorok = korhazBajmok.doktorok

const sulyok1 = [
    doktorok[0].paciensek[0].suly,
doktorok[0].paciensek[1].suly,
doktorok[0].paciensek[2].suly,
doktorok[0].paciensek[3].suly,
doktorok[1].paciensek[0].suly,    
doktorok[1].paciensek[1].suly,
doktorok[1].paciensek[2].suly,
doktorok[1].paciensek[3].suly,

]

//console.log(sulyok1)

//nyomtassuk ki: Az orvos neve {nev}, paciense {pnev}, kora {kora}

console.log("A doktor neve",doktorok[0].nev, "Paciens neve", doktorok[0].paciensek[0].nev, "Paciens kora:",doktorok[0].paciensek[0].kor )
