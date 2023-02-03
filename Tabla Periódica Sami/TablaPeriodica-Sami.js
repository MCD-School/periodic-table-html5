var lista = new Array();

var Alcalino = '#F4A84C'
var Alcalinoterreos = '#F3DB65'
var Lantanidos = '#FD729A'
var Actinido = '#74E1FB'
var Metal_Transicion = '#F5B98E'
var Otros_metales = '#8EECF5'
var Semimetal = '#57F8C2'
var No_Metales = '#9EFF93'
var Gases_Nobles = '#F893FF'
var Desconocidos = '#E9DBEA'
var espaciosBlancos = '#fef5e7'

//fila 1
var e0 = 
{
    ma: "1,008",
    na: "1",
    sim: "H",
    nom: "Hidrógeno",
    elecn: "2,20",
    val: "-1,1",
    col: No_Metales,
    clase: 'td-norm'
}
lista.push(e0)

//console.log(lista, 'Elemento Hidógeno')

var blanco =
{
    ma: "",
    na: "",
    sim: "",
    nom: "",
    col: espaciosBlancos,
    clase: 'td-blanco'
}

for (var i = 0; i < 16; i++) {
    lista.push(blanco)
    
}
//console.log(lista, 'blancos')

var e17 = 
{
    ma: "4,0026",
    na: "2",
    sim: "He",
    nom: "Helio",
    elecn: "N/A",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm'
}
lista.push(e17)

//console.log(lista, 'Elemento Helio')

//fila 2
var e18 = 
{
    ma: "6,94",
    na: "3",
    sim: "Li",
    nom: "Litio",
    elecn: "0,98",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}

lista.push(e18)

//console.log(lista, 'Elemento Litio')

var e19 = 
{
    ma: "9,0122",
    na: "4", 
    sim: "Be",
    nom: "Berilio",
    elecn: "1,57",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e19)

//console.log(lista, 'Elemento Berilio')

for (var i = 0; i < 10; i++) {
    lista.push(blanco)
    
}
//console.log(lista, 'blancos')

var e30 = 
{
    ma: "10,81",
    na: "5", 
    sim: "Bo",
    nom: "Boro",
    elecn: "2,04",
    val: "3",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e30)

//console.log(lista, 'Elemento Boro')

var e31 = 
{
    ma: "12,011",
    na: "6", 
    sim: "C",
    nom: "Carbono",
    elecn: "2,55",
    val: "-4,2,4",
    col: No_Metales,
    clase: 'td-norm',

}

lista.push(e31)

//console.log(lista, 'Elemento Carbono')

var e32 = 
{
    ma: "14,007",
    na: "7", 
    sim: "N",
    nom: "Nitrógeno",
    elecn: "3,04",
    val: "-3,1,2,3,4,5",
    col: No_Metales,
    clase: 'td-norm',

}

lista.push(e32)

//console.log(lista, 'Elemento Nitrógeno')

var e33 = 
{
    ma: "15,999",
    na: "8", 
    sim: "O",
    nom: "Oxígeno",
    elecn: "3,04",
    val: "-3,1,2,3,4,5",
    col: No_Metales,
    clase: 'td-norm',
}

lista.push(e33)

//console.log(lista, 'Elemento Oxígeno')

var e34 = 
{
    ma: "18,998",
    na: "9", 
    sim: "F",
    nom: "Flúor",
    elecn: "3,98",
    val: "-1, 1",
    col: No_Metales,
    clase: 'td-norm',
}

lista.push(e34)

//console.log(lista, 'Elemento Flúor')

var e35 = 
{
    ma: "20,180",
    na: "10", 
    sim: "Ne",
    nom: "Neón",
    elecn: "N/A",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm',

}

lista.push(e35)

//console.log(lista, 'Elemento Neón')

//fila 3
var e36 = 
{
    ma: "22,990",
    na: "11",
    sim: "Na",
    nom: "Sodio",
    elecn: "0,93",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}

lista.push(e36)

//console.log(lista, 'Elemento Sodio')

var e37 = 
{
    ma: "24,305",
    na: "12", 
    sim: "Mg",
    nom: "Magnesio",
    elecn: "1,31",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e37)

//console.log(lista, 'Elemento Magnesio')

for (var i = 0; i < 10; i++) {
    lista.push(blanco)
    
}
//console.log(lista, 'blancos')

var e48 = 
{
    ma: "26,982",
    na: "13", 
    sim: "Al",
    nom: "Aluminio",
    elecn: "1,61",
    val: "3",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e48)

//console.log(lista, 'Elemento Aluminio')

var e49 = 
{
    ma: "28,085",
    na: "14", 
    sim: "Si",
    nom: "Silicio",
    elecn: "1,90",
    val: "-4,4",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e49)

//console.log(lista, 'Elemento Silicio')

var e50 = 
{
    ma: "30,974",
    na: "15", 
    sim: "P",
    nom: "Fósforo",
    elecn: "2,19",
    val: "-3,3,5",
    col: No_Metales,
    clase: 'td-norm',
}

lista.push(e50)

//console.log(lista, 'Elemento Fósforo')

var e51 = 
{
    ma: "32,06",
    na: "16", 
    sim: "S",
    nom: "Azufre",
    elecn: "2,58",
    val: "-2,2,4,6",
    col: No_Metales,
    clase: 'td-norm',
}

lista.push(e51)

//console.log(lista, 'Elemento Azufre')

var e52 = 
{
    ma: "35,45",
    na: "17", 
    sim: "Cl",
    nom: "Cloro",
    elecn: "3,16",
    val: "-1,1,3,5,7",
    col: No_Metales,
    clase: 'td-norm',
}

lista.push(e52)

//console.log(lista, 'Elemento Cloro')

var e53 = 
{
    ma: "39,948",
    na: "18", 
    sim: "Ar",
    nom: "Argón",
    elecn: "N/A",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm',
}

lista.push(e53)
//Fila 3
var e54 = 
{
    ma: "39,098",
    na: "19",
    sim: "K",
    nom: "Potasio",
    elecn: "0,82",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}

lista.push(e54)

var e55 = 
{
    ma: "40,078",
    na: "20", 
    sim: "Ca",
    nom: "Calcio",
    elecn: "1,0",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e55)

var e56 = 
{
    ma: "44,956",
    na: "21", 
    sim: "Sc",
    nom: "Escandio",
    elecn: "1,36",
    val: "3",
    col: Metal_Transicion,
    clase: 'td-norm'
}

lista.push(e56)

var e57 = 
{
    ma: "47,867",
    na: "22", 
    sim: "Ti",
    nom: "Titanio",
    elecn: "1,54",
    val: "4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e57)

var e58 = 
{
    ma: "50,942",
    na: "23", 
    sim: "V",
    nom: "Vanadio",
    elecn: "1,63",
    val: "2,3,4,5",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e58)

var e59 = 
{
    ma: "51,996",
    na: "24", 
    sim: "Cr",
    nom: "Cromo",
    elecn: "1,66",
    val: "2,3,6",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e59)

var e60 = 
{
    ma: "54,938",
    na: "25", 
    sim: "Mn",
    nom: "Manganeso",
    elecn: "1,55",
    val: "2,3,4,6,7",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e60)

var e61 = 
{
    ma: "55,845",
    na: "26", 
    sim: "Fe",
    nom: "Hierro",
    elecn: "1,83",
    val: "2,3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e61)

var e62 = 
{
    ma: "58,933",
    na: "27", 
    sim: "Co",
    nom: "Cobalto",
    elecn: "1,88",
    val: "2,3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e62)

var e63 = 
{
    ma: "58,693",
    na: "28", 
    sim: "Ni",
    nom: "Níquel",
    elecn: "1,91",
    val: "2,3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e63)

var e64 = 
{
    ma: "63,546",
    na: "29", 
    sim: "Cu",
    nom: "Cobre",
    elecn: "1,90",
    val: "1,2,3,4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e64)

var e65 = 
{
    ma: "65,38",
    na: "30", 
    sim: "Zn",
    nom: "Zinc",
    elecn: "1,65",
    val: "2",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e65)


var e66 = 
{
    ma: "69,723",
    na: "31", 
    sim: "Ga",
    nom: "Galio",
    elecn: "1,81",
    val: "3",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e66)


var e67 = 
{
    ma: "72,630",
    na: "32", 
    sim: "Ge",
    nom: "Germanio",
    elecn: "2,01",
    val: "2,4",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e67)

var e68 = 
{
    ma: "74,922",
    na: "33", 
    sim: "As",
    nom: "Arsénico",
    elecn: "2,18",
    val: "-3,3,5",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e68)


var e69 = 
{
    ma: "78,971",
    na: "34", 
    sim: "Se",
    nom: "Selenio",
    elecn: "2,55",
    val: "-2,2,4,6",
    col: No_Metales,
    clase: 'td-norm'
}

lista.push(e69)

var e70 = 
{
    ma: "79,904",
    na: "35", 
    sim: "Br",
    nom: "Bromo",
    elecn: "2,96",
    val: "-1,1,3,5",
    col: No_Metales,
    clase: 'td-norm'
}

lista.push(e70)

var e71 = 
{
    ma: "83,798",
    na: "36", 
    sim: "Kr",
    nom: "Kriptón",
    elecn: "3,0",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm'
}

lista.push(e71)
//fila 5
var e72 = 
{
    ma: "85,468",
    na: "37", 
    sim: "Rb",
    nom: "Rubidio",
    elecn: "0,82",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}


lista.push(e72)


var e73 = 
{
    ma: "87,62",
    na: "38", 
    sim: "Sr",
    nom: "Estroncio",
    elecn: "0,95",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e73)

var e74 = 
{
    ma: "88,906",
    na: "39", 
    sim: "Y",
    nom: "Itrio",
    elecn: "1,22",
    val: "3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e74)

var e75 = 
{
    ma: "91,224",
    na: "40", 
    sim: "Zr",
    nom: "Circonio",
    elecn: "1,33",
    val: "4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e75)

var e76 = 
{
    ma: "92,906",
    na: "41", 
    sim: "Nb",
    nom: "Niobio",
    elecn: "1,6",
    val: "2,3,4,5",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e76)


var e77 = 
{
    ma: "95,95",
    na: "42", 
    sim: "Mo",
    nom: "Molibdeno",
    elecn: "2,16",
    val: "2,3,4,5,6",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e77)

var e78 = 
{
    ma: "(98)",
    na: "43", 
    sim: "Te",
    nom: "Tecnecio",
    elecn: "1,9",
    val: "4,7",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e78)


var e79 = 
{
    ma: "101,07",
    na: "44", 
    sim: "Ru",
    nom: "Rutenio",
    elecn: "2,2",
    val: "2,3,4,6,8",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e79)

var e80 = 
{
    ma: "102,91",
    na: "45", 
    sim: "Rh",
    nom: "Rodio",
    elecn: "2,28",
    val: "3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e80)

var e81 = 
{
    ma: "106,42",
    na: "46", 
    sim: "Pd",
    nom: "Paladio",
    elecn: "2,20",
    val: "1,2,4,6",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e81)

var e82 = 
{
    ma: "107,87",
    na: "47", 
    sim: "Ag",
    nom: "Plata",
    elecn: "1,93",
    val: "1,2,3,4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e82)

var e83 = 
{
    ma: "112,41",
    na: "48", 
    sim: "Cd",
    nom: "Cadmio",
    elecn: "1,69",
    val: "1,2",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e83)

var e84 = 
{
    ma: "114,82",
    na: "49", 
    sim: "In",
    nom: "Indio",
    elecn: "1,78",
    val: "3",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e84)

var e85 = 
{
    ma: "118,71",
    na: "50", 
    sim: "Sn",
    nom: "Estaño",
    elecn: "1,96",
    val: "2,4",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e85)

var e86 = 
{
    ma: "121,76",
    na: "51", 
    sim: "Sb",
    nom: "Antimonio",
    elecn: "2,05",
    val: "-3,3,5",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e86)

var e87 = 
{
    ma: "127,60",
    na: "52", 
    sim: "Te",
    nom: "Telurio",
    elecn: "2,1",
    val: "-2,2,4,6",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e87)


var e88 = 
{
    ma: "126,90",
    na: "53", 
    sim: "I",
    nom: "Yodo",
    elecn: "2,66",
    val: "-1,1,3,5",
    col: No_Metales,
    clase: 'td-norm'
}

lista.push(e88)


var e89 = 
{
    ma: "131,29",
    na: "54", 
    sim: "Xe",
    nom: "Xenón",
    elecn: "2,6",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm'
}

lista.push(e89)

var e90 = 
{
    ma: "132,91",
    na: "55", 
    sim: "Cs",
    nom: "Cesio",
    elecn: "0,79",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}

lista.push(e90)


var e91 = 
{
    ma: "137,33",
    na: "56", 
    sim: "Ba",
    nom: "Bario",
    elecn: "0,89",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e91)

////////////////////////////////////////////////////////////////////////////////////////////////
var e109 = 
{
    ma: "",
    na: "", 
    sim: "",
    nom: "",
    elecn: "",
    val: "",
    col: Lantanidos,
    clase: 'td-norm'
}

lista.push(e109)
///////////////////////////////////////////////////////////////////////////////////////////////

var e92 = 
{
    ma: "178,49",
    na: "72", 
    sim: "Hf",
    nom: "Hafnio",
    elecn: "1,3",
    val: "2,3,4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e92)


var e93 = 
{
    ma: "180,95",
    na: "73", 
    sim: "Ta",
    nom: "Tántalo",
    elecn: "1,5",
    val: "5",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e93)

var e94 = 
{
    ma: "183,84",
    na: "74", 
    sim: "W",
    nom: "Wolframio",
    elecn: "2,36",
    val: "4,6",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e94)

var e95 = 
{
    ma: "186,21",
    na: "75", 
    sim: "Re",
    nom: "Renio",
    elecn: "1,9",
    val: "4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e95)

var e96 = 
{
    ma: "190,23",
    na: "76", 
    sim: "Os",
    nom: "Osmio",
    elecn: "2,2",
    val: "4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e96)

var e97 = 
{
    ma: "192,22",
    na: "77", 
    sim: "Ir",
    nom: "Iridio",
    elecn: "2,20",
    val: "3,4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e97)

var e98 = 
{
    ma: "195,08",
    na: "78", 
    sim: "Pt",
    nom: "Platino",
    elecn: "2,28",
    val: "2,4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e98)

var e99 = 
{
    ma: "196,97",
    na: "79", 
    sim: "Au",
    nom: "Oro",
    elecn: "2,54",
    val: "1,3",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e99)

var e100 = 
{
    ma: "200,59",
    na: "80", 
    sim: "Hg",
    nom: "Mercurio",
    elecn: "2,0",
    val: "1,2",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e100)

var e101 = 
{
    ma: "204,38",
    na: "81", 
    sim: "Tl",
    nom: "Talio",
    elecn: "1,62",
    val: "1,3",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e101)

var e102 = 
{
    ma: "207,2",
    na: "82", 
    sim: "Pb",
    nom: "Plomo",
    elecn: "2,33",
    val: "2,4",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e102)


var e103 = 
{
    ma: "208,98",
    na: "83", 
    sim: "Bi",
    nom: "Bismuto",
    elecn: "2,02",
    val: "-3,3,5",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e103)

var e104 = 
{
    ma: "(209)",
    na: "84", 
    sim: "Po",
    nom: "Polonio",
    elecn: "2,0",
    val: "-2,2,4",
    col: Otros_metales,
    clase: 'td-norm'
}

lista.push(e104)

var e105 = 
{
    ma: "(210)",
    na: "85", 
    sim: "At",
    nom: "Ástato",
    elecn: "2,2",
    val: "-1,1",
    col: Semimetal,
    clase: 'td-norm'
}

lista.push(e105)

var e106 = 
{
    ma: "(222)",
    na: "86", 
    sim: "Rn",
    nom: "Radón",
    elecn: "N/A",
    val: "N/A",
    col: Gases_Nobles,
    clase: 'td-norm'
}

lista.push(e106)

var e107 = 
{
    ma: "(223)",
    na: "87", 
    sim: "Fr",
    nom: "Francio",
    elecn: "0,7",
    val: "1",
    col: Alcalino,
    clase: 'td-norm'
}

lista.push(e107)

var e108 = 
{
    ma: "(226)",
    na: "88", 
    sim: "Ra",
    nom: "Radio",
    elecn: "0,9",
    val: "2",
    col: Alcalinoterreos,
    clase: 'td-norm'
}

lista.push(e108)

var e109 = 
{
    ma: "",
    na: "", 
    sim: "",
    nom: "",
    elecn: "",
    val: "",
    col: Actinido,
    clase: 'td-norm'
}

lista.push(e109)


////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

var e109 = 
{
    ma: "(267)",
    na: "104", 
    sim: "Rf",
    nom: "Rutherfordio",
    elecn: "N/A",
    val: "4",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e109)


var e110 = 
{
    ma: "(268)",
    na: "105", 
    sim: "Db",
    nom: "Dubnio",
    elecn: "N/A",
    val: "5",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e110)

var e111 = 
{
    ma: "(269)",
    na: "106", 
    sim: "Sg",
    nom: "Seaborgio",
    elecn: "N/A",
    val: "6",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e111)

var e112 = 
{
    ma: "(270)",
    na: "107", 
    sim: "Bh",
    nom: "Bohrio",
    elecn: "N/A",
    val: "7",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e112)




var e113 = 
{
    ma: "(277)",
    na: "108", 
    sim: "Hs",
    nom: "Hasio",
    elecn: "N/A",
    val: "N/A",
    col: Metal_Transicion,
    clase: 'td-norm'
    
}

lista.push(e113)

var e114 = 
{
    ma: "(278)",
    na: "109", 
    sim: "Mt",
    nom: "Meitnerio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e114)


var e115 = 
{
    ma: "(281)",
    na: "110", 
    sim: "Ds",
    nom: "Darmstation",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e115)


var e116 = 
{
    ma: "(282)",
    na: "111", 
    sim: "Rg",
    nom: "Roentgenio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e116)


var e117 = 
{
    ma: "(285)",
    na: "112", 
    sim: "Cn",
    nom: "Copernicio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e117)

var e118 = 
{
    ma: "(286)",
    na: "113", 
    sim: "Nh",
    nom: "Nihonio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e118)

var e119 = 
{
    ma: "(289)",
    na: "114", 
    sim: "Fl",
    nom: "Flerovio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e119)


var e120 = 
{
    ma: "(290)",
    na: "115", 
    sim: "Mc",
    nom: "Moscovio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e120)


var e121 = 
{
    ma: "(293)",
    na: "116", 
    sim: "Lv",
    nom: "Livermorio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e121)


var e122 = 
{
    ma: "(294)",
    na: "117", 
    sim: "Ts",
    nom: "Tenesio",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e122)


var e123 = 
{
    ma: "(294)",
    na: "118", 
    sim: "Og",
    nom: "Oganesón",
    elecn: "N/A",
    val: "N/A",
    col: Desconocidos,
    clase: 'td-norm'
}

lista.push(e123)


var contador = 0

var tabla = document.getElementById('tablaP')

var contenido = '<table id="test1">';

for (var fila = 0; fila < 7; fila++) {
    contenido+= '<tr>'
    //console.log(fila,'FILA')




    for (var colu = 0; colu < 18; colu++) {
      //  console.log(colu,'COLUMNA')
            console.log(lista[contador], contador)
       contenido+= '<td class = '+lista[contador].clase +'><div class = "caja-id" style ="background-color:'+lista[contador].col+'"><div class="caja-top"><div class="caja-top-left"><div class="caja-top-left-top"><p>'+lista[contador].ma+'</p></div><div class="caja-top-left-bottom"><div class="caja-top-left-bottom-left"><p>'+lista[contador].elecn+'</p></div><div class="caja-top-left-bottom-right"> <p>'+lista[contador].val+'</p></div></div></div><div class="caja-top-right"><p>'+lista[contador].na+'</p></div></div><div class="caja-bottom"><div class="caja-bottom-left"><div class="caja-bottom-left-top"><p>'+lista[contador].sim+'</p></div><div class="caja-bottom-left-bottom"><p>'+lista[contador].nom+'</p></div></div><div class="caja-bottom-right"></div></div></div></td>'
        
        contador++;
       // console.log(
        //console.log(contador,'CONTADOR'),'CONTADOR')
    
    }

    contenido += '</tr>';

}

contenido += '</table>';

tabla.innerHTML = contenido;





var lista2 = new Array();

var blanco2 =
{
    ma: "",
    na: "",
    sim: "",
    nom: "",
    col: espaciosBlancos,
    clase: 'td-blanco'
}

for (var i = 0; i < 22; i++) {
    lista2.push(blanco2)
    
}

var e124 = 
{
    ma: "138,91",
    na: "57", 
    sim: "La",
    nom: "Lantano",
    elecn: "0,7",
    val: "3,4",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e124)

var e125 = 
{
    ma: "140,12",
    na: "58", 
    sim: "Ce",
    nom: "Cerio",
    elecn: "1,12",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e125)

var e126 = 
{
    ma: "140,91",
    na: "59", 
    sim: "Pr",
    nom: "Praseodimio",
    elecn: "1,13",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e126)

var e127 = 
{
    ma: "144,24",
    na: "60", 
    sim: "Nd",
    nom: "Neodimio",
    elecn: "1,14",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e127)

var e128 = 
{
    ma: "(144)",
    na: "61", 
    sim: "Pm",
    nom: "Prometio",
    elecn: "N/A",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e128)

var e129 = 
{
    ma: "150,36",
    na: "62", 
    sim: "Sm",
    nom: "Samario",
    elecn: "1,17",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e129)

var e130 = 
{
    ma: "151,96",
    na: "63", 
    sim: "Eu",
    nom: "Europio",
    elecn: "N/A",
    val: "2, 3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e130)

var e131 = 
{
    ma: "157,25",
    na: "64", 
    sim: "Gd",
    nom: "Gadolinio",
    elecn: "1,20",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e131)

var e132 = 
{
    ma: "158,93",
    na: "65", 
    sim: "Tb",
    nom: "Terbio",
    elecn: "N/A",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e132)

var e133 = 
{
    ma: "162,50",
    na: "66", 
    sim: "Dy",
    nom: "Disprosio",
    elecn: "1,22",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e133)

var e134 = 
{
    ma: "164,93",
    na: "67", 
    sim: "Ho",
    nom: "Holmio",
    elecn: "1,23",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e134)

var e135 = 
{
    ma: "167,26",
    na: "68", 
    sim: "Er",
    nom: "Erbio",
    elecn: "1,24",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e135)

var e136 = 
{
    ma: "168,93",
    na: "69", 
    sim: "Tm",
    nom: "Tulio",
    elecn: "1,25",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}

lista2.push(e136)

var e137 = 
{
    ma: "173,05",
    na: "70", 
    sim: "Yb",
    nom: "Iterbio",
    elecn: "N/A",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}
lista2.push(e137)

lista2.push(e138)
for (var i = 0; i < 4; i++) {
    lista2.push(blanco2)
    
}

var e138 = 
{
    ma: "174,97",
    na: "71", 
    sim: "Lu",
    nom: "Lutecio",
    elecn: "1,27",
    val: "3",
    col: Lantanidos,
    clase: 'td-norm'
}



var e139 = 
{
    ma: "(227)",
    na: "89", 
    sim: "Ac",
    nom: "Actìnido",
    elecn: "1,1",
    val: "4",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e139)

var e140 = 
{
    ma: "232,04",
    na: "90", 
    sim: "Th",
    nom: "Torio",
    elecn: "1,3",
    val: "4",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e140)

var e141 = 
{
    ma: "231,04",
    na: "91", 
    sim: "Pa",
    nom: "Protactinio",
    elecn: "1,5",
    val: "5",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e141)

var e142 = 
{
    ma: "238,03",
    na: "92", 
    sim: "U",
    nom: "Uranio",
    elecn: "1,38",
    val: "6",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e142)

var e143 = 
{
    ma: "(237)",
    na: "93", 
    sim: "Np",
    nom: "Neptunio",
    elecn: "1,36",
    val: "5",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e143)

var e144 = 
{
    ma: "(244)",
    na: "94", 
    sim: "Pu",
    nom: "Plutonio",
    elecn: "1,28",
    val: "4",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e144)

var e145 = 
{
    ma: "(243)",
    na: "95", 
    sim: "Am",
    nom: "Americio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e145)

var e146 = 
{
    ma: "(247)",
    na: "96", 
    sim: "Cm",
    nom: "Curio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e146)

var e147 = 
{
    ma: "(247)",
    na: "97", 
    sim: "Bk",
    nom: "Berkelio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e147)

var e148 = 
{
    ma: "(251)",
    na: "98", 
    sim: "Cf",
    nom: "Californio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e148)

var e149 = 
{
    ma: "(252)",
    na: "99", 
    sim: "Es",
    nom: "Einstenio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e149)

var e150 = 
{
    ma: "(257)",
    na: "100", 
    sim: "Fm",
    nom: "Fermio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e150)

var e151 = 
{
    ma: "(258)",
    na: "101", 
    sim: "Md",
    nom: "Mendelecio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e151)

var e152 = 
{
    ma: "(259)",
    na: "102", 
    sim: "No",
    nom: "Nobelio",
    elecn: "1,3",
    val: "2",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e152)

var e153 = 
{
    ma: "(266)",
    na: "103", 
    sim: "Lr",
    nom: "Lawrencio",
    elecn: "1,3",
    val: "3",
    col: Actinido,
    clase: 'td-norm'
}

lista2.push(e153)







var contador2 = 0

var tabla2 = document.getElementById('tablaP')

var contenido2 = '<table id="test2">';

for (var fila = 1; fila < 3; fila++) {
    contenido2+= '<tr>'
    //console.log(fila,'FILA')




    for (var colu = 1; colu < 18; colu++) {
      //  console.log(colu,'COLUMNA')
      var id_celda = fila + "x" + colu
            console.log(lista2[contador2], contador2)
       contenido2+= '<td class = '+lista2[contador2].clase +'><div class = "caja-id" style ="background-color:'+lista2[contador2].col+'"><div class="caja-top"><div class="caja-top-left"><div class="caja-top-left-top"><p>'+lista2[contador2].ma+'</p></div><div class="caja-top-left-bottom"><div class="caja-top-left-bottom-left"><p>'+lista2[contador2].elecn+'</p></div><div class="caja-top-left-bottom-right"> <p>'+lista2[contador2].val+'</p></div></div></div><div class="caja-top-right"><p>'+lista2[contador2].na+'</p></div></div><div class="caja-bottom"><div class="caja-bottom-left"><div class="caja-bottom-left-top"><p>'+lista2[contador2].sim+'</p></div><div class="caja-bottom-left-bottom"><p>'+lista2[contador2].nom+'</p></div></div><div class="caja-bottom-right"></div></div></div></td>'
        
        contador2++;
       // console.log(
        //console.log(contador,'CONTADOR'),'CONTADOR')
    
    }

    contenido2 += '</tr>';

}

contenido2 += '</table>';


tabla2.innerHTML = contenido2;
