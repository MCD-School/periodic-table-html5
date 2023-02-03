var listaElementos = []

console.log(listaElementos.length)
var alcalino ="#FF6262"
var alcalinoterreos ="#FF9462"
var lantanidos ="#CA6CFF"
var actinidos ="#6CD0FF"
var metalesDeTrancicion ="#6C82FF"
var otrosMetales ="#6CFF79"
var semiMetales ="#E681FF"
var otrosNoMetales ="52D8FF"
var halogenos ="#FAB0FF"
var gasesNobles ="#B52BFF"
var eDesconocidos ="#C6C6C6"

var e0 = {
    ma: "1,008", 
    na: "1",
    sim: "H",
    nom: "Hidrogeno",
    elecn: "2,2",
    val: "1",
    col:otrosNoMetales,
    
    }
 listaElementos.push(e0)

 var blanco ={  
 ma: "", 
 na: "",
 sim: "",
 nom: "",
 elecn: "",
 val:"",
 col:"",
}

for (var i = 0; i < 16; i++) {
     listaElementos.push(blanco)
    
}

var e17 = {
    ma: "4,002", 
    na: "2",
    sim: "He",
    nom: "Helio",
    elecn: "",
    val: "",
    col:gasesNobles,
}
listaElementos.push(e17)

var e18 = {
    ma: "6,941", 
    na: "3",
    sim: "Li",
    nom: "Litio",
    elecn: "0,98",
    val: "1",
    col:alcalino,
}
listaElementos.push(e18)


var e19 = {
    ma: "9,012", 
    na: "4",
    sim: "Be",
    nom: "Berilio",
    elecn: "1,57",
    val: "2",
    col:alcalinoterreos,
}
listaElementos.push(e19)

var blanco ={  
ma: "", 
na: "",
sim: "",
nom: "",
elecn: "",
val:"",
col:"",
}

for (var i = 0; i < 10; i++) {
    listaElementos.push(blanco)
   
}

var e30 = {
    ma: "10,81", 
    na: "5",
    sim: "B",
    nom: "Boro",
    elecn: "2,04",
    val: "3",
    col:semiMetales,
}
listaElementos.push(e30)

var e31 = {
    ma: "12,01", 
    na: "6",
    sim: "C",
    nom: "Carbono",
    elecn: "2,55",
    val: "4",
    col:otrosNoMetales,
}
listaElementos.push(e31)

var e32 = {
    ma: "14,00", 
    na: "7",
    sim: "N",
    nom: "Nitrógeno",
    elecn: "3,04",
    val: "5",
    col:otrosNoMetales,
}
listaElementos.push(e32)

var e33 = {
    ma: "15,99", 
    na: "8",
    sim: "O",
    nom: "Oxígeno",
    elecn: "3,44",
    val: "2",
    col:otrosNoMetales,
}
listaElementos.push(e33)

var e34 = {
    ma: "18,99", 
    na: "9",
    sim: "F",
    nom: "Flúor",
    elecn: "3,98",
    val: "-1",
    col:halogenos,
}
listaElementos.push(e34)

var e35 = {
    ma: "20,17", 
    na: "10",
    sim: "Ne",
    nom: "Neón",
    elecn: "",
    val: "0",
    col:gasesNobles,
}
listaElementos.push(e35)

//11/18/////////////////////////////////////

var e36 = {
    ma: "6,941", 
    na: "11",
    sim: "Na",
    nom: "Sodio",
    elecn: "0,93",
    val: "1",
    col:alcalino,
}
listaElementos.push(e36)

var e37 = {
    ma: "9,012", 
    na: "12",
    sim: "Mg",
    nom: "Magnesio",
    elecn: "1,31",
    val: "2",
    col:alcalinoterreos,
}
listaElementos.push(e37)

var blanco ={  
ma: "", 
na: "",
sim: "",
nom: "",
elecn: "",
val:"",
col:"",
}

for (var i = 0; i < 10; i++) {
    listaElementos.push(blanco)
   
}

var e48 = {
    ma: "10,81", 
    na: "13",
    sim: "Al",
    nom: "Aluminio",
    elecn: "1,61",
    val: "3",
    col:otrosMetales,
}
listaElementos.push(e48)

var e49 = {
    ma: "26,98", 
    na: "14",
    sim: "Si",
    nom: "Silicio",
    elecn: "1,9",
    val: "4",
    col:semiMetales,
}
listaElementos.push(e49)

var e50 = {
    ma: "30,97", 
    na: "15",
    sim: "P",
    nom: "Fósforo",
    elecn: "2,19",
    val: "4",
    col:otrosNoMetales,
}
listaElementos.push(e50)

var e51 = {
    ma: "32,06", 
    na: "16",
    sim: "S",
    nom: "Azufre",
    elecn: "2,58",
    val: "6",
    col:otrosNoMetales,
}
listaElementos.push(e51)

var e52 = {
    ma: "35,45", 
    na: "17",
    sim: "Cl",
    nom: "Cloro",
    elecn: "3,16",
    val: "7",
    col:halogenos,
}
listaElementos.push(e52)

var e53 = {
    ma: "39,94", 
    na: "18",
    sim: "Ar",
    nom: "Argón",
    elecn: "",
    val: "5",
    col:gasesNobles,
}
listaElementos.push(e53)

///////////////////////////////////////////////////////////////////

var e54 = {
    ma: "39,09", 
    na: "19",
    sim: "Na",
    nom: "Potasio",
    elecn: "0,93",
    val: "1",
    col:alcalino,
}
listaElementos.push(e54)

var e55 = {
    ma: "40,07", 
    na: "20",
    sim: "Ca",
    nom: "Calcio",
    elecn: "1",
    val: "2",
    col:alcalinoterreos,
}
listaElementos.push(e55)

var e56 = {
    ma: "44,95", 
    na: "21",
    sim: "Sc",
    nom: "Escandio",
    elecn: "1,36",
    val: "3",
    col:metalesDeTrancicion,
}
listaElementos.push(e56)

var e57 = {
    ma: "47,86", 
    na: "22",
    sim: "Ti",
    nom: "Titanio",
    elecn: "1,54",
    val: "4",
    col:metalesDeTrancicion,
}
listaElementos.push(e57)

var e58 = {
    ma: "50,94", 
    na: "23",
    sim: "V",
    nom: "Vanadio",
    elecn: "1,63",
    val: "5",
    col:metalesDeTrancicion,
}
listaElementos.push(e58)

var e59 = {
    ma: "51,99", 
    na: "24",
    sim: "Cr",
    nom: "Cromo",
    elecn: "1,66",
    val: "6",
    col:metalesDeTrancicion,
}
listaElementos.push(e59)

var e60 = {
    ma: "54,93", 
    na: "25",
    sim: "Mn",
    nom: "Manganeso",
    elecn: "1,55",
    val: "7",
    col:metalesDeTrancicion,
}
listaElementos.push(e60)

var e61 = {
    ma: "55,84", 
    na: "26",
    sim: "Fe",
    nom: "Hierro",
    elecn: "1,83",
    val: "2,3",
    col:metalesDeTrancicion,
}
listaElementos.push(e61)

var e62 = {
    ma: "58,93", 
    na: "27",
    sim: "Co",
    nom: "Cobalto",
    elecn: "1,88",
    val: "2,3",
    col:metalesDeTrancicion,
}
listaElementos.push(e62)

var e63 = {
    ma: "58,69", 
    na: "28",
    sim: "Ni",
    nom: "Níquel",
    elecn: "1,91",
    val: "2,3",
    col:metalesDeTrancicion,
}
listaElementos.push(e63)

var e64 = {
    ma: "63,54", 
    na: "29",
    sim: "Cu",
    nom: "Cobre",
    elecn: "1,9",
    val: "1,2",
    col:metalesDeTrancicion,
}
listaElementos.push(e64)

var e65 = {
    ma: "65,38", 
    na: "30",
    sim: "Zn",
    nom: "Zinc",
    elecn: "1,65",
    val: "2",
    col:metalesDeTrancicion,
}
listaElementos.push(e65)

var e66 = {
    ma: "69,72", 
    na: "31",
    sim: "Ga",
    nom: "Galio",
    elecn: "1,81",
    val: "3",
    col:otrosMetales,
}
listaElementos.push(e66)

var e67 = {
    ma: "72,64", 
    na: "32",
    sim: "Ge",
    nom: "Germanio",
    elecn: "2,01",
    val: "4",
    col:semiMetales,
}
listaElementos.push(e67)

var e68 = {
    ma: "74,92", 
    na: "33",
    sim: "As",
    nom: "Arsénico",
    elecn: "2,18",
    val: "5",
    col:semiMetales,
}
listaElementos.push(e68)

var e69 = {
    ma: "78,96", 
    na: "34",
    sim: "Se",
    nom: "Selenio",
    elecn: "2,55",
    val: "6",
    col:otrosNoMetales,
}
listaElementos.push(e69)

var e70 = {
    ma: "79,9", 
    na: "35",
    sim: "Br",
    nom: "Bromo",
    elecn: "2,96",
    val: "7",
    col:halogenos,
}
listaElementos.push(e70)

var e71 = {
    ma: "83,79", 
    na: "36",
    sim: "Kr",
    nom: "Kriptón",
    elecn: "3",
    val: "0",
    col:gasesNobles,
}
listaElementos.push(e71)

/////////////////////////////////////////////////////////////////////

var e72 = {
    ma: "85.46", 
    na: "37",
    sim: "Rb",
    nom: "Rubidio",
    elecn: "0.82",
    val: "7",
    col:alcalino,
}
listaElementos.push(e72)

var e73 = {
    ma: "87.62", 
    na: "38",
    sim: "Sr",
    nom: "Estroncio",
    elecn: "0.95",
    val: "0",
    col:alcalinoterreos,
}
listaElementos.push(e73)

var e74 = {
    ma: "88.90", 
    na: "39",
    sim: "Y",
    nom: "Itrio",
    elecn: "1.22",
    val: "3",
    col:metalesDeTrancicion,
}
listaElementos.push(e74)

var e75 = {
    ma: "91.22", 
    na: "40",
    sim: "Zr",
    nom: "Circonio",
    elecn: "1.33",
    val: "4",
    col:metalesDeTrancicion,
}
listaElementos.push(e75)

var e76 = {
    ma: "92.90", 
    na: "41",
    sim: "Nb",
    nom: "Niobio",
    elecn: "1,6",
    val: "5",
    col:metalesDeTrancicion,
}
listaElementos.push(e76)

var e77 = {
    ma: "95.95", 
    na: "42",
    sim: "Mo",
    nom: "Molibdeno",
    elecn: "2.16",
    val: "6",
    col:metalesDeTrancicion,
}
listaElementos.push(e77)

var e78 = {
    ma: "98", 
    na: "43",
    sim: "Tc",
    nom: "Tecnecio",
    elecn: "1,9",
    val: "7",
    col:metalesDeTrancicion,
}
listaElementos.push(e78)

var e79 = {
    ma: "101.07", 
    na: "44",
    sim: "Ru",
    nom: "Rutenio",
    elecn: "2.2",
    val: "8",
    col:metalesDeTrancicion,
}
listaElementos.push(e79)

var e80 = {
    ma: "102.91", 
    na: "45",
    sim: "Rh",
    nom: "Rodio",
    elecn: "2.28",
    val: "6",
    col:metalesDeTrancicion,
}
listaElementos.push(e80)

var e81 = {
    ma: "106.42", 
    na: "46",
    sim: "Pd",
    nom: "Paladio",
    elecn: "2.20",
    val: "4",
    col:metalesDeTrancicion,
}
listaElementos.push(e81)

var e82 = {
    ma: "107.87", 
    na: "47",
    sim: "Ag",
    nom: "Plata",
    elecn: "1,93",
    val: "1",
    col:metalesDeTrancicion,
}
listaElementos.push(e82)

var e83 = {
    ma: "112.41", 
    na: "48",
    sim: "Cd",
    nom: "Cadmio",
    elecn: "1,69",
    val: "2",
    col:metalesDeTrancicion,
}
listaElementos.push(e83)

var e84 = {
    ma: "114.82", 
    na: "49",
    sim: "In",
    nom: "Indio",
    elecn: "1.78",
    val: "3",
    col:otrosMetales,
}
listaElementos.push(e84)

var e85 = {
    ma: "118.71", 
    na: "50",
    sim: "Sn",
    nom: "Estaño",
    elecn: "1,96",
    val: "2,4",
    col:otrosMetales,
}
listaElementos.push(e85)

var e86 = {
    ma: "121.76", 
    na: "51",
    sim: "Sb",
    nom: "Antimonio",
    elecn: "2.05",
    val: "5",
    col:semiMetales,
}
listaElementos.push(e86)

var e87 = {
    ma: "127.60", 
    na: "52",
    sim: "Te",
    nom: "Telurio",
    elecn: "2,1",
    val: "6",
    col:semiMetales,
}
listaElementos.push(e87)

var e88 = {
    ma: "126.90", 
    na: "53",
    sim: "I",
    nom: "Yodo",
    elecn: "2,66",
    val: "7",
    col:halogenos,
}
listaElementos.push(e88)

var e89 = {
    ma: "131.29", 
    na: "54",
    sim: "Xe",
    nom: "Xenón",
    elecn: "2.6",
    val: "0",
    col:gasesNobles,
}
listaElementos.push(e89)

//////////////////////////////////////////////////////////

var e90 = {
    ma: "132.90", 
    na: "55",
    sim: "Cs",
    nom: "Cesio",
    elecn: "0.79",
    val: "1",
    col:alcalino,
}
listaElementos.push(e90)

var e91 = {
    ma: "137.32", 
    na: "56",
    sim: "Ba",
    nom: "Bario",
    elecn: "0.89",
    val: "2",
    col:alcalinoterreos,
}
listaElementos.push(e91)

var e92 = {
    ma: "174.96", 
    na: "71",
    sim: "Lu",
    nom: "Lutecio",
    elecn: "1.27",
    val: "3",
    col:metalesDeTrancicion,
}
listaElementos.push(e92)

var e93 = {
    ma: "178.48", 
    na: "72",
    sim: "Hf",
    nom: "Hafnio",
    elecn: "1.3",
    val: "4",
    col:metalesDeTrancicion,
}
listaElementos.push(e93)

var e94 = {
    ma: "180.94", 
    na: "73",
    sim: "Ta",
    nom: "Tántalo",
    elecn: "1.5",
    val: "5",
    col:metalesDeTrancicion,
}
listaElementos.push(e94)

var e95 = {
    ma: "183.84", 
    na: "74",
    sim: "W",
    nom: "Wolframio",
    elecn: "2.36",
    val: "6",
    col:metalesDeTrancicion,
}
listaElementos.push(e95)

var e96 = {
    ma: "186.207", 
    na: "75",
    sim: "Re",
    nom: "Renio",
    elecn: "9",
    val: "7",
    col:metalesDeTrancicion,
}
listaElementos.push(e96)

var e97 = {
    ma: "190.23", 
    na: "76",
    sim: "Os",
    nom: "Osmio",
    elecn: "2.2",
    val: "8",
    col:metalesDeTrancicion,
}
listaElementos.push(e97)

var e98 = {
    ma: "192.217", 
    na: "77",
    sim: "Ir",
    nom: "Iridio",
    elecn: "2.20",
    val: "2",
    col:metalesDeTrancicion,
}
listaElementos.push(e98)

var e99 = {
    ma: "195.084", 
    na: "78",
    sim: "Pt",
    nom: "Platino",
    elecn: "2.28",
    val: "4",
    col:metalesDeTrancicion,
}
listaElementos.push(e99)

var e100 = {
    ma: "196.96", 
    na: "79",
    sim: "Au",
    nom: "Oro",
    elecn: "3",
    val: "1",
    col:metalesDeTrancicion,
}
listaElementos.push(e100)

var e101 = {
    ma: "200.59", 
    na: "80",
    sim: "Hg",
    nom: "Mercurio",
    elecn: "1,69",
    val: "2",
    col:metalesDeTrancicion,
}
listaElementos.push(e101)

var e102 = {
    ma: "204.38", 
    na: "81",
    sim: "Tl",
    nom: "Talio",
    elecn: "1.62",
    val: "3",
    col:otrosMetales,
}
listaElementos.push(e102)

var e103 = {
    ma: "207.2", 
    na: "82",
    sim: "Pb",
    nom: "Plomo",
    elecn: "2.33",
    val: "4",
    col:otrosMetales,
}
listaElementos.push(e103)

var e104 = {
    ma: "208.98", 
    na: "83",
    sim: "Bi",
    nom: "Bismuto",
    elecn: "2.2",
    val: "5",
    col:otrosMetales,
}
listaElementos.push(e104)

var e105 = {
    ma: "209", 
    na: "84",
    sim: "Po",
    nom: "Polonio",
    elecn: "2,0",
    val: "6",
    col:otrosMetales,
}
listaElementos.push(e105)

var e106 = {
    ma: "210", 
    na: "85",
    sim: "At",
    nom: "Ástato",
    elecn: "2,2",
    val: "",
    col:halogenos,
}
listaElementos.push(e106)

var e107 = {
    ma: "222", 
    na: "86",
    sim: "Rn",
    nom: "Radón",
    elecn: "",
    val: "0",
    col:gasesNobles,
}
listaElementos.push(e107)

//////////////////////////////////

var e108 = {
    ma: "223", 
    na: "87",
    sim: "Fr",
    nom: "Francio",
    elecn: "0.7",
    val: "1",
    col:alcalino,
}
listaElementos.push(e108)

var e109 = {
    ma: "226", 
    na: "88",
    sim: "Ra",
    nom: "Radio",
    elecn: "0.89",
    val: "2",
    col:alcalinoterreos,
}
listaElementos.push(e109)

var e110 = {
    ma: "266", 
    na: "103",
    sim: "Lr",
    nom: "Lawrencio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e110)

var e111 = {
    ma: "267", 
    na: "104",
    sim: "Rf",
    nom: "Rutherfordio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e111)

var e112 = {
    ma: "268", 
    na: "105",
    sim: "Db",
    nom: "Dubnio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e112)

var e113 = {
    ma: "269", 
    na: "106",
    sim: "Sg",
    nom: "Seaborgio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e113)

var e114 = {
    ma: "270", 
    na: "107",
    sim: "Bh",
    nom: "Bohrio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e114)

var e115 = {
    ma: "277", 
    na: "108",
    sim: "Hs",
    nom: "Hasio",
    elecn: "",
    val: "",
    col:metalesDeTrancicion,
}
listaElementos.push(e115)

var e116 = {
    ma: "278", 
    na: "109",
    sim: "Mt",
    nom: "Meitnerio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e116)

var e117 = {
    ma: "281", 
    na: "110",
    sim: "Ds",
    nom: "Darmstatio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e117)

var e118 = {
    ma: "282", 
    na: "111",
    sim: "Rg",
    nom: "Roentgenio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e118)

var e119 = {
    ma: "285", 
    na: "112",
    sim: "Cn",
    nom: "Copernicio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e119)

var e120 = {
    ma: "286", 
    na: "113",
    sim: "Nh",
    nom: "Nihonio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e120)

var e121 = {
    ma: "289", 
    na: "114",
    sim: "Fl",
    nom: "Flerovio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e121)

var e122 = {
    ma: "290", 
    na: "115",
    sim: "Mc",
    nom: "Moscovio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e123)

var e124 = {
    ma: "293", 
    na: "116",
    sim: "Lv",
    nom: "Livermorio",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e124)

var e125 = {
    ma: "294", 
    na: "117",
    sim: "Ts",
    nom: "Teneso",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e125)

var e126 = {
    ma: "294", 
    na: "118",
    sim: "Og",
    nom: "Oganesón",
    elecn: "",
    val: "",
    col:eDesconocidos,
}
listaElementos.push(e126)
















for(var filas=0; filas<7; filas++){

}

for(var columnas=0; columnas<18; columnas++){
    
}



