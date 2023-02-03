var listaElementos = new Array();


var alcalino = '#14E67A';

var Alcalinotérreos = '#143DE6';

var Lantánidos = '#14E6CD';

var Actínido = '#FBFF01';

var Metal_de_transición = '#FF0101';

var otros_metales =  '#FF01F0';

var Semimetal = '#C501FF';

var otros_no_metal = '#01FFA3';

var Gases_nobles = '#FF9F01';

var eDesconocidos = '#F100F1';

var Metal_del_bloque_P = '#A1EAF5'


var e0 = {
    ma: '1,008',
    na: '1',
    sim: 'H',
    nom: 'Hidrógeno',
    elecn: '2,20',
    val: '1,008',
    col: otros_no_metal

}

listaElementos.push(e0)

var blanco = {
    ma: '',
    na: '',
    sim: '',
    nom: '',

}
for (let i = 0; i < 16; i++) {
    listaElementos.push(blanco)
    
}

var e17 = { 
    ma: '4,0026',
    na: '2',
    sim: 'He',
    nom: 'Helio',
    elecn: 'N/A',
    val: '4,00',
    col: Gases_nobles
}
listaElementos.push(e17)

var e18 = {
    ma:'6,94',
    na:'3',
    sim:'Li',
    nom:'Litio',
    elecn:'0,98',
    val:'6,94',
    col: alcalino
}
listaElementos.push(e18)

var e19 = {
    ma:'9,0122',
    na:'4',
    sim:'Be',
    nom:'Berilio',
    elecn:'1,57',
    val:'9,01',
    col: Alcalinotérreos
}
listaElementos.push(e19)

for (let i = 0; i < 10; i++) {
    listaElementos.push(blanco)

}

var e30 = {
    ma:'10,81',
    na:'5',
    sim:'B',
    nom:'Boro',
    elecn:'2,04',
    val:'10,81',
    col: Semimetal
}
listaElementos.push(e30)

var e31 = {
    ma:'12,011',
    na:'6',
    sim:'C',
    nom:'Carbono',
    elecn:'2,55',
    val:'12,01',
    col: otros_no_metal
}
listaElementos.push(e31)
var e32 = {
    ma:'14,007',
    na:'7',
    sim:'N',
    nom:'Nitrógeno',
    elecn:'3,04',
    val:'14,01',
    col: otros_no_metal

}
listaElementos.push(e32)

var e33 = {
    ma:'15,999',
    na:'8',
    sim:'O',
    nom:'Oxígeno ',
    elecn:'3,44',
    val:'16,00',
    col: otros_no_metal
}
listaElementos.push(e33)

var e34 = {
    ma:'18,998',
    na:'9',
    sim:'F',
    nom:'Flúor ',
    elecn:'3,98',
    val:'19,00',
    col: otros_no_metal
}
listaElementos.push(e34)

var e35 = {
    ma:'20,180',
    na:'10',
    sim:'N',
    nom:'Neón',
    elecn:'N/A',
    val:'20,18',
    col: Gases_nobles

}
listaElementos.push(e35)

var e36 = {
    ma:'22,990',
    na:'11',
    sim:'Na',
    nom:'Sodio',
    elecn:'0,93',
    val:'22,99',
    col: alcalino
}
listaElementos.push(e36)

var e37 = {
    ma:'24,305',
    na:'12',
    sim:'Mg',
    nom:'Magnesio',
    elecn:'1,31',
    val:'24,31',
    col: Alcalinotérreos

}
listaElementos.push(e37)

for (let i = 0; i < 10; i++) {
    listaElementos.push(blanco)
    
}

var e48 = {
    ma:'26,982',
    na:'13',
    sim:'Al',
    nom:'Aluminio',
    elecn:'1,61',
    val:'26,98',
    col: otros_metales
}
listaElementos.push(e48)

var e49 = {
    ma:'28,085',
    na:'14',
    sim:'Si',
    nom:'Silicio',
    elecn:'1,90',
    val:'28,09',
    col: Semimetal
}
listaElementos.push(e49)

var e50 = {
    ma:'30,974',
    na:'15',
    sim:'P',
    nom:'Fósforo',
    elecn:'2,19',
    val:'30,97',
    col: otros_no_metal

}
listaElementos.push(e50)

var e51 = {
    ma:'32,06',
    na:'16',
    sim:'S',
    nom:'Azufre',
    elecn:'2,58',
    val:'32,06',
    col: otros_no_metal

}
listaElementos.push(e51)

var e52 = {
    ma:'35,45',
    na:'17',
    sim:'Cl',
    nom:'Cloro',
    elecn:'3,16',
    val:'35,45',
    col: otros_no_metal

}
listaElementos.push(e52)

var e53 = {
    ma:'39,948',
    na:'18',
    sim:'Ar',
    nom:'Argón',
    elecn:'N/A',
    val:'39,95',
    col: Gases_nobles

}
listaElementos.push(e53)

var e54 = {
    ma:'39,098',
    na:'19',
    sim:'Po',
    nom:'Potasio',
    elecn:'0,82',
    val:'39,10',
    col: alcalino
}
listaElementos.push(e54)

var e55 = {
    ma:'40,078',
    na:'20',
    sim:'Ca',
    nom:'Calcio',
    elecn:'1,0',
    val:'40,08',
    col: Alcalinotérreos
}
listaElementos.push(e55)

var e56 = {
    ma:'44,956',
    na:'21',
    sim:'Sc',
    nom:'Escandio',
    elecn:'1,36',
    val:'44,95',
    col: Metal_de_transición
}
listaElementos.push(e56)

var e57 = {
    ma:'47,867',
    na:'22',
    sim:'Ti',
    nom:'Titanio',
    elecn:'1,54',
    val:'47,90',
    col: Metal_de_transición
}
listaElementos.push(e57)

var e58 = {
    ma:'50,942',
    na:'23',
    sim:'V',
    nom:'Vanadio',
    elecn:'1,63',
    val:'50,94',
    col: Metal_de_transición
}
listaElementos.push(e58)

var e59 = {
    ma:'51,996',
    na:'24',
    sim:'Cr',
    nom:'Cromo',
    elecn:'166',
    val:'51,99',
    col: Metal_de_transición
}
listaElementos.push(e59)

var e60 = {
    ma:'54,938',
    na:'25',
    sim:'Mn',
    nom:'Manganeso',
    elecn:'1,55',
    val:'54,93',
    col: Metal_de_transición
}
listaElementos.push(e60)

var e61 = {
    ma:'55,845',
    na:'26',
    sim:'Fe',
    nom:'Hierro',
    elecn:'1,83',
    val:'55,84',
    col: Metal_de_transición
}
listaElementos.push(e61)

var e62 = {
    ma:'58,933',
    na:'27',
    sim:'Co',
    nom:'Cobalto',
    elecn:'1,88',
    val:'58,93',
    col: Metal_de_transición
}
listaElementos.push(e62)

var e63 = {
    ma:'58,693',
    na:'28',
    sim:'Ni',
    nom:'Níquel',
    elecn:'1,91',
    val:'58,69',
    col: Metal_de_transición
}
listaElementos.push(e63)

var e64 = {
    ma:'63,546',
    na:'29',
    sim:'Cu',
    nom:'Cobre',
    elecn:'1,90',
    val:'63,54',
    col: Metal_de_transición
}
listaElementos.push(e64)

var e65 = {
    ma:'65,38',
    na:'30',
    sim:'Zn',
    nom:'Zinc',
    elecn:'1,65',
    val:'65,37',
    col: Metal_de_transición
}
listaElementos.push(e65)

var e66 = {
    ma:'69,723',
    na:'31',
    sim:'Ga',
    nom:'Galio',
    elecn:'1,81',
    val:'69,72',
    col: Metal_del_bloque_P
}
listaElementos.push(e66)

var e67 = {
    ma:'72,630',
    na:'32',
    sim:'Ge',
    nom:'Germanio',
    elecn:'2,01',
    val:'72,63', 
    col: Semimetal
}
listaElementos.push(e67)

var e68 = {
    ma:'74,922',
    na:'33',
    sim:'As',
    nom:'Arsenico',
    elecn:'2,18',
    val:'74,92', 
    col: Semimetal
}
listaElementos.push(e68)

var e69 = {
    ma:'78,971',
    na:'34',
    sim:'Se',
    nom:'Selenio',
    elecn:'2,55',
    val:'78,96', 
    col: otros_no_metal
}
listaElementos.push(e69)

var e70 = {
    ma:'79,904',
    na:'35',
    sim:'Br',
    nom:'Bromo',
    elecn:'2,96',
    val:'79,90', 
    col:otros_no_metal
}
listaElementos.push(e70)

var e71 = {
    ma:'83,798',
    na:'36',
    sim:'Kr',
    nom:'Kripton',
    elecn:'3,0',
    val:'83,80', 
    col:Gases_nobles
}
listaElementos.push(e71)

var e272 = {
    ma:'85,468',
    na:'37',
    sim:'Ru',
    nom:'Rubidio',
    elecn:'0,82',
    val:'85,47',
    col: alcalino
}
listaElementos.push(e72)

var e73 = {
    ma:'87,62',
    na:'38',
    sim:'Sr',
    nom:'Estroncio',
    col: Alcalinotérreos
}
listaElementos.push(e73)

var e74 = {
    ma:'88,906',
    na:'39',
    sim:'Y',
    nom:'itrio',
    col: Metal_de_transición
}
listaElementos.push(74)

var e75 = {
    ma:'91,22',
    na:'40',
    sim:'Zr',
    nom:'Circonio',
    col: Metal_de_transición
}
listaElementos.push(75)

var e76 = {
    ma:'92,906',
    na:'41',
    sim:'Nb',
    nom:'Niobio',
    elecn:'1,6',
    val:'92,91', 
    col: Metal_de_transición
}
listaElementos.push(e76)

var e77 = {
    ma:'95,95',
    na:'42',
    sim:'Mo',
    nom:'Molibdeno',
    col: Metal_de_transición
}
listaElementos.push(e77)

var e78 = {
    ma:'98',
    na:'43',
    sim:'Tc',
    nom:'Tecnecio',
    col: Metal_de_transición
}
listaElementos.push(e78)

var e79 = {
    ma:'101,07',
    na:'44',
    sim:'Ru',
    nom:'Rutenio',
    col: Metal_de_transición
}
listaElementos.push(e79)

var e80 = {
    ma:'102,91',
    na:'45',
    sim:'Rh',
    nom:'Rodio',
    col: Metal_de_transición
}
listaElementos.push(e80)

var e81 = {
    ma:'106,42',
    na:'46',
    sim:'Pd',
    nom:'Paladio',
    col: Metal_de_transición
}
listaElementos.push(e81)

var e82 = {
    ma:'107,87',
    na:'47',
    sim:'Ag',
    nom:'Plata',
    col: Metal_de_transición
}
listaElementos.push(e82)

var e83 = {
    ma:'112,41',
    na:'48',
    sim:'Cd',
    nom:'Cadmio',
    col: Metal_de_transición
}
listaElementos.push(e83)

var e84 = {
    ma:'114,82',
    na:'49',
    sim:'In',
    nom:'Indio',
    elecn:'1,78',
    val:'114,8', 
    col: Metal_del_bloque_P
}
listaElementos.push(e84)

var e85 = {
    ma:'118,71',
    na:'50',
    sim:'Sn',
    nom:'Estaño',
    elecn:'1,96',
    val:'118,7', 
    col:Metal_del_bloque_P
}
listaElementos.push(e85)

var e86 = {
    ma:'121,76',
    na:'51',
    sim:'Sb',
    nom:'Antimonio',
    elecn:'2,05',
    val:'121,8', 
    col: otros_no_metal
}
listaElementos.push(e86)

var e87 = {
    ma:'127,60',
    na:'52',
    sim:'Te',
    nom:'Telurio',
    elecn:'2,1',
    val:'127,6', 
    col: Metal_del_bloque_P
}
listaElementos.push(e87)

var e88 = {
    ma:'12,90',
    na:'53',
    sim:'I',
    nom:'Yodo',
    elecn:'2,66',
    val:'126,9', 
    col: otros_no_metal
}
listaElementos.push(e88)

var e89 = {
    ma:'131,29',
    na:'54',
    sim:'Xe',
    nom:'Xe',
    elecn:'Xenon',
    val:'131,3', 
    col:Gases_nobles
}
listaElementos.push(e89)

var e90 = {
    ma:'132,91',
    na:'55',
    sim:'Cs',
    nom:'Cesio',
    col: alcalino
}
listaElementos.push(e90)

var e91 = {
    ma:'137,33',
    na:'56',
    sim:'Ba',
    nom:'Bario',
    col: Alcalinotérreos
}
listaElementos.push(e91)

var e92 = {
    ma:'178,49',
    na:'72',
    sim:'Hf',
    nom:'Hafnio',
    col: Metal_de_transición
}
listaElementos.push(e92)

var e93 = {
    ma:'180,95',
    na:'73',
    sim:'Ta',
    nom:'Tàntalo',
    col: Metal_de_transición
}
listaElementos.push(e93)

var e94 = {
    ma:'183,84',
    na:'74',
    sim:'W',
    nom:'Wolframio',
    col: Metal_de_transición
}
listaElementos.push(e94)

var e95 = {
    ma:'186,21',
    na:'75',
    sim:'Re',
    nom:'Renio',
    col: Metal_de_transición
}
listaElementos.push(e95)

var e96 = {
    ma:'190,23',
    na:'76',
    sim:'Os',
    nom:'Osmio',
    col: Metal_de_transición
}
listaElementos.push(e96)

var e97 = {
    ma:'192,22',
    na:'77',
    sim:'Ir',
    nom:'Iridio',
    col: Metal_de_transición
}
listaElementos.push(e97)

var e98 = {
    ma:'195,08',
    na:'78',
    sim:'Pt',
    nom:'Platino',
    col: Metal_de_transición
}
listaElementos.push(e98)

var e99= {
    ma:'196.97',
    na:'79',
    sim:'Au',
    nom:'Oro',
    col: Metal_de_transición
}
listaElementos.push(e99)

var e100 = {
    ma:'200,59',
    na:'80',
    sim:'Hg',
    nom:'Mercurio',
    col: Metal_de_transición
}
listaElementos.push(e100)

var e101 = {
    ma:'204,38',
    na:'81',
    sim:'Ti',
    nom:'Talio',
    elecn:'1,62',
    val:'204,4', 
    col: Metal_del_bloque_P
}
listaElementos.push(e101)

var e102 = {
    ma:'207,2',
    na:'82',
    sim:'Pb',
    nom:'Plomo',
    elecn:'2,33',
    val:'207,2', 
    col: Metal_del_bloque_P
}
listaElementos.push(e102)

var e103 = {
    ma:'208,98',
    na:'83',
    sim:'Bi',
    nom:'Bismuto',
    elecn:'2,02',
    val:'209', 
    col:Metal_del_bloque_P
}
listaElementos.push(e103)

var e104 = {
    ma:'209',
    na:'84',
    sim:'Po',
    nom:'Polonio',
    elecn:'2,02',
    val:'209', 
    col: Metal_del_bloque_P
}
listaElementos.push(e104)

var e105 = {
    ma:'210',
    na:'85',
    sim:'At',
    nom:'Astato',
    elecn:'2,2',
    val:'210', 
    col: Semimetal
}
listaElementos.push(e105)

var e106 = {
    ma:'222',
    na:'86',
    sim:'Rn',
    nom:'Radon',
    elecn:'N/A',
    val:'222', 
    col: Gases_nobles
}
listaElementos.push(e106)

var e107= {
    ma:'227',
    na:'87',
    sim:'Fr',
    nom:'Francio',
    col: alcalino
}
listaElementos.push(e107)

var e108= {
    ma:'226',
    na:'88',
    sim:'Ra',
    nom:'Radio',
    col: Alcalinotérreos
}
listaElementos.push(e108)

var e109 = {
    ma:'95,95',
    na:'42',
    sim:'Mo',
    nom:'Molibdeno',
    col: Metal_de_transición
}
listaElementos.push(e109)

var e110 = {
    ma:'267',
    na:'104',
    sim:'Rf',
    nom:'Rutherfordio',
    col: Metal_de_transición
}
listaElementos.push(e110)

var e111 = {
    ma:'268',
    na:'105',
    sim:'Db',
    nom:'Dubnio',
    col: Metal_de_transición
}
listaElementos.push(e111)

var e112 = {
    ma:'267',
    na:'106',
    sim:'S  g',
    nom:'Seaborgio',
    col: Metal_de_transición
}
listaElementos.push(e112)

var e113 = {
    ma:'268',
    na:'107',
    sim:'Bh',
    nom:'Bohrio',
    col: Metal_de_transición
}
listaElementos.push(e113)

var e114 = {
    ma:'277',
    na:'108',
    sim:'Hs',
    nom:'Hasio',
    col: Metal_de_transición
}
listaElementos.push(e114)

var e115 = {
    ma:'278',
    na:'109',
    sim:'Mt',
    nom:'Meitnerio',
    col: eDesconocidos
}
listaElementos.push(e115)

var e116 = {
    ma:'281',
    na:'110',
    sim:'Ds',
    nom:'Darmstatio',
    col: eDesconocidos
}
listaElementos.push(e116)

var e117 = {
    ma:'282',
    na:'111',
    sim:'Rg',
    nom:'Roentgenio',
    elecn:'N/A',
    val:'272', 
    col: eDesconocidos
}
listaElementos.push(e117)

var e118 = {
    ma:'285',
    na:'112',
    sim:'Cn',
    nom:'Copernicio',
    elecn:'N/A',
    val:'285', 
    col: eDesconocidos
}
listaElementos.push(e118)

var e119 = {
    ma:'286',
    na:'113',
    sim:'Nh',
    nom:'Nihonio',
    elecn:'N/A',
    val:'284', 
    col: eDesconocidos
}
listaElementos.push(e119)

var e120 = {
    ma:'289',
    na:'114',
    sim:'Fl',
    nom:'Flerovio',
    elecn:'N/A',
    val:'289', 
    col: eDesconocidos
}
listaElementos.push(e120)

var e121 = {
    ma:'290',
    na:'115',
    sim:'Mc',
    nom:'moscovio',
    elecn:'N/A',
    val:'288', 
    col: eDesconocidos
}
listaElementos.push(e121)

var e122 = {
    ma:'293',
    na:'116',
    sim:'Lv',
    nom:'Livemorio',
    elecn:'N/A',
    val:'292', 
    col: eDesconocidos
}
listaElementos.push(e122)

var e123 = {
    ma:'294',
    na:'117',
    sim:'Ts',
    nom:'Teneso',
    elecn:'N/A',
    val:'294', 
    col: 'eDesconocidos',
}
listaElementos.push(e123)

var e124 = {
    ma:'294',
    na:'118',
    sim:'Og',
    nom:'Oganeson',
    elecn:'N/A',
    val:'294', 
    col:eDesconocidos
}
    

for (var filas = 0; filas < 7; filas++) {

}

for (var columnas = 0; columnas < 18; columnas++) {

}