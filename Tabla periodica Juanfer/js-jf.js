var listaElementos = Array();


var gases_nobles = "#D7FF33";
var otros_no_metales = "#1F6AFF";
var semimetales = "#1FFF7E";
var metales_del_bloquep = "#771FFF";
var metal_de_trancicion = "#F11F5C";
var lantanidos = "#7EF11F";
var actinido = "#15EFEF";
var alcalinoterreos = "#15EF1F";
var alcalino = "#E80000";
var eDesconocidos = "#E50000";

var e0 = {
    ma:'1,007',
    na:'1',
    sim:'H',
    nom:'Hidrogeno',
    elecn:'2,20',
    val:'-1.1',
    col: otros_no_metales,

}

listaElementos.push(e0)
console.log(listaElementos)

var blanco = {
    ma:'',
    na:'',
    sim:'',
    nom:'',
}

for (var i = 0; i < 16 ;i++) {
    listaElementos.push(blanco)
    
}
var e17 = {
    ma:'4,0026',
    na:'2',
    sim:'He',
    nom:'Helio',
    val:'N/A',
    elecn:'N/A',
    col:gases_nobles,

}
listaElementos.push(e17)

var e18 = {
    ma:'6,94',
    na:'3',
    sim:'Li',
    nom:'Litio',
    val:'1',
    elecn:'0,93',
    col:alcalino,

}
listaElementos.push(e18)

var e19 = {
    ma:'9,0122',
    na:'4',
    sim:'Be',
    nom:'Berilio',
    val:'2',
    elecn:'1,57',
    col: alcalinoterreos,
}
listaElementos.push(e19)

for (var i = 0; i < 10 ;i++) {
    listaElementos.push(blanco)
}
var e30 = {
    ma:'10,81',
    na:'5',
    sim:'B',
    nom:'Boro',
    val:'3',
    elecn:'2,04',
    col:semimetales,
}
listaElementos.push(e30)

var e31 = {
    ma:'12,011',
    na:'6',
    sim:'C',
    nom:'Carbono',
    val:'2,4',
    elecn:'2,55',
    col:otros_no_metales,
}
listaElementos.push(e31)

var e32 = {
    ma:'14,007',
    na:'7',
    sim:'N',
    nom:'Nitrógeno',
    val:'-3,1,2,3,4',
    elecn:'3,04',
    col:otros_no_metales,
    
}
listaElementos.push(e32)

var e33 = {
    ma:'15,999',
    na:'8',
    sim:'O',
    nom:'Oxígeno',
    val:'-2,-1',
    elecn:'3,44',
    col:otros_no_metales,
}
listaElementos.push(e33)

var e34 = {
    ma:'18,998',
    na:'9',
    sim:'F',
    nom:'Frúor',
    val:'-1',
    elecn:'3,98',
    col:otros_no_metales,
}
listaElementos.push(e34)

var e35 = {
    ma:'20,180',
    na:'10',
    sim:'Ne',
    nom:'Neón',
    val:'N/A',
    elecn:'N/A',
    col:gases_nobles,
}
listaElementos.push(e35)

var e36 = {
    ma:'22,990',
    na:'11',
    sim:'Na',
    nom:'Sodío',
    val:'1',
    elecn:'0,93',
    col:alcalino,
}
listaElementos.push(e36)

var e37 = {
    ma:'24,305',
    na:'12',
    sim:'Mg',
    nom:'Magnesio',
    val:'2',
    elecn:'1,31',
    col:alcalinoterreos,
}
listaElementos.push(e37)

for (var i = 0; i < 10 ;i++) {
    listaElementos.push(blanco)
}
var e48 = {
    ma:'26,982',
    na:'13',
    sim:'AI',
    nom:'Aluminio',
    val:'3',
    elecn:'1,61',
    col:metales_del_bloquep,
}
listaElementos.push(e48)

var e49 = {
    ma:'12,011',
    na:'14',
    sim:'Si',
    nom:'Silisio',
    val:'4',
    elecn:'1,90',
    col:semimetales,
}
listaElementos.push(e49)

var e50 = {
    ma:'30,974',
    na:'15',
    sim:'P',
    nom:'Fósforo',
    val:'-3,3,4,5',
    elecn:'2,19',
    col:otros_no_metales,
}
listaElementos.push(e50)

var e51 = {
    ma:'30,06',
    na:'16',
    sim:'S',
    nom:'Azufre',
    val:'-2,2,4,6',
    elecn:'2,58',
    col:otros_no_metales,
}
listaElementos.push(e51)

var e52 = {
    ma:'35,45',
    na:'17',
    sim:'Cl',
    nom:'Cloro',
    val:'-1,1,3,5',
    elecn:'3,16',
    col:otros_no_metales,
}
listaElementos.push(e52)

var e53 = {
    ma:'20,180',
    na:'18',
    sim:'Ar',
    nom:'Argón',
    val:'N/A',
    elecn:'N/A',
    col:gases_nobles,
}
listaElementos.push(e53)
var e54 = {
    ma:'39.098',
    na:'19',
    sim:'K',
    nom:'Potasio',
    val:'1',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e54)
var e55 = {
    ma:'40.078',
    na:'20',
    sim:'Ca',
    nom:'Calcio',
    val:'2',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e55)
var e56 = {
    ma:'44.956',
    na:'21',
    sim:'Sc',
    nom:'Escandio',
    val:'3',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e56)
var e57 = {
    ma:'47.867',
    na:'22',
    sim:'Ti',
    nom:'Titanio',
    val:'4',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e57)
var e58 = {
    ma:'50.942',
    na:'23',
    sim:'V',
    nom:'Vanadio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e58)
var e59 = {
    ma:'51.996',
    na:'24',
    sim:'Cr',
    nom:'Cromo',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e59)
var e60 = {
    ma:'54.938',
    na:'25',
    sim:'Mn',
    nom:'Manganeso',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e60)
var e61 = {
    ma:'55.845',
    na:'26',
    sim:'Fe',
    nom:'Hierro',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e61)
var e62 = {
    ma:'58.933',
    na:'27',
    sim:'Co',
    nom:'Cobalto',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e62)
var e63 = {
    ma:'58.693',
    na:'28',
    sim:'Ni',
    nom:'Níquel',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e63)
var e64 = {
    ma:'63.546',
    na:'29',
    sim:'Cu',
    nom:'Cobre',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e64)
var e65 = {
    ma:'65.38',
    na:'30',
    sim:'Zn',
    nom:'Zinc',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e65)
var e66 = {
    ma:'69.723',
    na:'31',
    sim:'Ga',
    nom:'Galio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e66)
var e67 = {
    ma:'72.630',
    na:'32',
    sim:'Ge',
    nom:'Germanio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e67)

var e68 = {
    ma:'74.922',
    na:'33',
    sim:'As',
    nom:'Arsénico',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e68)

var e69 = {
    ma:'78.971',
    na:'34',
    sim:'Se',
    nom:'Selenio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e69)
var e70 = {
    ma:'79.904',
    na:'35',
    sim:'Br',
    nom:'Bromo',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e70)
var e71 = {
    ma:'83.798',
    na:'36',
    sim:'Kr',
    nom:'Kriptón',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e71)
var e72 = {
    ma:'85.468',
    na:'37',
    sim:'Rb',
    nom:'Rubidio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e72)
var e73 = {
    ma:'87.62',
    na:'38',
    sim:'Sr',
    nom:'Estroncio',
    val:'N/A',
    elecn:'N/A',
    col:alcalino,
}
listaElementos.push(e73)
var e74 = {
    ma:'88.906',
    na:'39',
    sim:'Y',
    nom:'Itrio',
    val:'3',
    elecn:'1.22',
    col:metal_de_trancicion,
}
listaElementos.push(e74)
var e75 = {
    ma:'91.224',
    na:'40',
    sim:'Zr',
    nom:'Circonio',
    val:'4',
    elecn:'1,33',
    col:metal_de_trancicion,
}
listaElementos.push(e75)
var e76 = {
    ma:'92.906',
    na:'41',
    sim:'Nb',
    nom:'Niobio',
    val:'2,3,4,5',
    elecn:'1,6',
    col:metal_de_trancicion,
}
listaElementos.push(e76)
var e77 = {
    ma:'95.95',
    na:'42',
    sim:'Mo',
    nom:'Molibdeno',
    val:'2,3,4,5,6',
    elecn:'2,16',
    col:metal_de_trancicion,
}
listaElementos.push(e77)
var e78 = {
    ma:'98',
    na:'43',
    sim:'Tc',
    nom:'Tecnecio',
    val:'4,7',
    elecn:'1,9',
    col:metal_de_trancicion,
}
listaElementos.push(e78)
var e79 = {
    ma:'101.07',
    na:'44',
    sim:'Ru',
    nom:'Rutenio',
    val:'2,3,4,5,6,8',
    elecn:'2,2',
    col:metal_de_trancicion,
}
listaElementos.push(e79)
var e80 = {
    ma:'102.91',
    na:'45',
    sim:'Rh',
    nom:'Rodio',
    val:'3',
    elecn:'2,28',
    col:metal_de_trancicion,
}
listaElementos.push(e80)
var e81 = {
    ma:'106.42',
    na:'46',
    sim:'Pd',
    nom:'Paladio',
    val:'1,2,4,6',
    elecn:'2,20',
    col:metal_de_trancicion,
}
listaElementos.push(e81)
var e82 = {
    ma:'107.87',
    na:'47',
    sim:'Ag',
    nom:'Plata',
    val:'1,2,3,4',
    elecn:'1,93',
    col:metal_de_trancicion,
}
listaElementos.push(e82)
var e83 = {
    ma:'112.41',
    na:'48',
    sim:'Cd',
    nom:'Cadmio',
    val:'1,2',
    elecn:'1,69',
    col:metal_de_trancicion,
}
listaElementos.push(e83)
var e84 = {
    ma:'114.42',
    na:'49',
    sim:'In',
    nom:'Indio',
    val:'3',
    elecn:'1,78',
    col:metales_del_bloquep,
}
listaElementos.push(e84)
var e85 = {
    ma:'118.71',
    na:'50',
    sim:'Sn',
    nom:'Estaño',
    val:'2,4',
    elecn:'1,96',
    col:metales_del_bloquep,
}
listaElementos.push(e85)
var e86 = {
    ma:'121.76',
    na:'51',
    sim:'Sb',
    nom:'Antimonio',
    val:'-3,3,5',
    elecn:'2,05',
    col:semimetales,
}
listaElementos.push(e86)
var e87 = {
    ma:'127.60',
    na:'52',
    sim:'Te',
    nom:'Telurio',
    val:'-2,2,4,6',
    elecn:'2,1',
    col:semimetales,
}
listaElementos.push(e87)

var e88 = {
    ma:'126.90',
    na:'53',
    sim:'l',
    nom:'Yodo',
    val:'-1,1,3,5',
    elecn:'2,66',
    col:otros_no_metales,
}
listaElementos.push(e88)

var e89 = {
    ma:'131.29',
    na:'54',
    sim:'Xe',
    nom:'Xenón',
    val:'N/A',
    elecn:'2,6',
    col:gases_nobles,
}
listaElementos.push(e89)
var e90 = {
    ma:'132.91',
    na:'55',
    sim:'Cs',
    nom:'Cesio',
    val:'1',
    elecn:'0,79',
    col:alcalino,
}
listaElementos.push(e90)
var e91 = {
    ma:'137.33',
    na:'56',
    sim:'Ba',
    nom:'Bario',
    val:'2',
    elecn:'0,89',
    col:alcalinoterreos,
}
listaElementos.push(e91)
for (var i = 0; i < 19 ;i++) {
    listaElementos.push(blanco)
    
}
//desde qui confuso

var e92 = {
    ma:'178.486',
    na:'72',
    sim:'Hf',
    nom:'Halfnio',
    val:'2,3,4',
    elecn:'1,3',
    col:metal_de_trancicion,
}
listaElementos.push(e92)

var e93 = {
    ma:'180,94',
    na:'73',
    sim:'Ta',
    nom:'Tántalo',
    val:'5',
    elecn:'1,5',
    col:metal_de_trancicion,
}
listaElementos.push(e93)
var e94 = {
    ma:'183.84',
    na:'74',
    sim:'W',
    nom:'Wolframio',
    val:'4,6',
    elecn:'2,36',
    col:metal_de_trancicion,
}
listaElementos.push(e94)
var e95 = {
    ma:'186,21',
    na:'75',
    sim:'Re',
    nom:'Renio',
    val:'4',
    elecn:'1,9',
    col:metal_de_trancicion,
}
listaElementos.push(e95)
var e96 = {
    ma:'190,23',
    na:'76',
    sim:'Os',
    nom:'Osmio',
    val:'4',
    elecn:'2,2',
    col:metal_de_trancicion,
}
listaElementos.push(e96)

var e97 = {
    ma:'192,22',
    na:'77',
    sim:'Ir',
    nom:'Iridio',
    val:'3,4',
    elecn:'2,20',
    col:metal_de_trancicion,
}
listaElementos.push(e97)

var e98 = {
    ma:'195,08',
    na:'78',
    sim:'Pt',
    nom:'Platino',
    val:'2,4',
    elecn:'2,28',
    col:metal_de_trancicion,
}
listaElementos.push(e98)
var e99 = {
    ma:'196,97',
    na:'79',
    sim:'Au',
    nom:'Oro',
    val:'1,3',
    elecn:'2,54',
    col:metal_de_trancicion,
}
listaElementos.push(e99)
var e100 = {
    ma:'200,59',
    na:'80',
    sim:'Hg',
    nom:'Mercurio',
    val:'1,2',
    elecn:'2,0',
    col:metal_de_trancicion,
}
listaElementos.push(e100)
var e101 = {
    ma:'204,38',
    na:'81',
    sim:'Tl',
    nom:'Talio',
    val:'1,3',
    elecn:'1,62',
    col:metales_del_bloquep,
}
listaElementos.push(e101)
var e102 = {
    ma:'207,2',
    na:'82',
    sim:'Pb',
    nom:'Plomo',
    val:'2,4',
    elecn:'2,33',
    col:metales_del_bloquep,
}
listaElementos.push(e102)
var e103 = {
    ma:'208,98',
    na:'83',
    sim:'Bi',
    nom:'Bismuto',
    val:'-3,3,5',
    elecn:'2,02',
    col:metales_del_bloquep,
}
listaElementos.push(e103)
var e104 = {
    ma:'209',
    na:'84',
    sim:'Po',
    nom:'Polonio',
    val:'-2,2,4',
    elecn:'2,0',
    col:metales_del_bloquep,
}
listaElementos.push(e104)
var e105 = {
    ma:'210',
    na:'85',
    sim:'At',
    nom:'Ástato',
    val:'-1,1',
    elecn:'2,2',
    col:semimetales,
}
listaElementos.push(e105)
var e106 = {
    ma:'222',
    na:'86',
    sim:'Rn',
    nom:'radón',
    val:'N/A',
    elecn:'N/A',
    col:gases_nobles,
}
listaElementos.push(e106)
var e107 = {
    ma:'223',
    na:'87',
    sim:'Fr',
    nom:'Francio',
    val:'1',
    elecn:'0,7',
    col:alcalino,
}
listaElementos.push(e107)
var e108 = {
    ma:'226',
    na:'88',
    sim:'Ra',
    nom:'Radio',
    val:'2',
    elecn:'0,9',
    col:alcalinoterreos,
}
listaElementos.push(e108)
for (var i = 0; i < 19 ;i++) {
    listaElementos.push(blanco)
    
}
var e109 = {
    ma:'267',
    na:'104',
    sim:'Rf',
    nom:'Rutherfordio',
    val:'4',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e109)


var e110 = {
    ma:'268',
    na:'105',
    sim:'Db',
    nom:'Dubnio',
    val:'5',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e110)
var e111 = {
    ma:'269',
    na:'106',
    sim:'Sg',
    nom:'Seaborgio',
    val:'6',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e111)
var e112 = {
    ma:'270',
    na:'107',
    sim:'Bh',
    nom:'Bohrio',
    val:'7',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e112)
var e113 = {
    ma:'277',
    na:'108',
    sim:'Hs',
    nom:'Hasio',
    val:'8',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e113)
var e114 = {
    ma:'278',
    na:'109',
    sim:'Mt',
    nom:'Meitnerio',
    val:'N/A',
    elecn:'N/A',
    col:metales_del_bloquep,
}
listaElementos.push(e114)
var e115 = {
    ma:'281',
    na:'110',
    sim:'Ds',
    nom:'Darmstatio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e115)
var e116 = {
    ma:'282',
    na:'111',
    sim:'Rg',
    nom:'Roentgenio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e116)

var e117 = {
    ma:'285',
    na:'112',
    sim:'Cn',
    nom:'Copernicio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e117)
var e122 = {
    ma:'286',
    na:'113',
    sim:'Nh',
    nom:'Nihonio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e122)

var e118 = {
    ma:'289',
    na:'114',
    sim:'Fl',
    nom:'Flerovio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e118)
var e119 = {
    ma:'290',
    na:'115',
    sim:'Mc',
    nom:'Moscovio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e119)
var e120 = {
    ma:'293',
    na:'116',
    sim:'Lv',
    nom:'Livermorio',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e120)
var e121 = {
    ma:'294',
    na:'117',
    sim:'Ts',
    nom:'Teneso',
    val:'N/A',
    elecn:'N/A',
    col:eDesconocidos,
}
listaElementos.push(e121)
var e122 = {
    ma:'294',
    na:'118',
    sim:'Og',
    nom:'Oganesón',
    val:'N/A',
    elecn:'N/A',
    col:metal_de_trancicion,
}
listaElementos.push(e122)

//for (var filas = 0; filas < 7; filas++) {

//}

//for (var columnas = 0; columnas < 18; i++) {

//}









