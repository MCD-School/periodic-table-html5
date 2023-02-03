var listaElementos = new Array () 


var alcalino = 'f94144' ;   
var alcalinotérreos = 'f3722c' ;
var lantánidos = 'f8961e' ;  
var actínido = 'f9844a' ;  
var metalDeTransición = 'f9c74f' ;  
var metalDelBloqueP = 'f90be6d' ;  
var semimetal = 'f43aa8b' ;  
var otrosNoMetales = 'f4d908e' ;  
var gasesNobles = 'f577590' ;     
var eDesconocidos = 'f277da1' ;


var e0 = {
    class: 'td-norm',
    ma: '1.008',
    na: '1',
    sim: 'H',
    nom: 'Hidrógeno',
    elecn: '2.20',
    val: '1',
    col: otrosNoMetales
}

listaElementos.push(e0)

//console.log(listaElementos)


var blanco = {
    ma: '',
    na: '',
    sim: '',
    nom: '',
    elecn:'',
    val:'',
    col: 'white',
    class: 'td-blanco'
}

for( var i = 0; i < 16; i++){

listaElementos.push(blanco)

}

var e17 = {
    class: 'td-norm',
    ma: '4.0026',
    na: '2',
    sim: 'He',
    nom: 'Helio',
    elecn:'N/A',
    val:'0',
    col: gasesNobles
}

listaElementos.push(e17)

var e18 = {
    class: 'td-norm',
    ma: '6.94',
    na: '3',
    sim: 'Li',
    nom: 'Litio',
    elecn:'0.98',
    val:'1',
    col: alcalino
}

listaElementos.push(e18)

var e19 = {
    class: 'td-norm',
    ma: '9.0122',
    na: '4',
    sim: 'Be',
    nom: 'Berilio',
    elecn:'1.57',
    val:'2',
    col: alcalinotérreos
}

listaElementos.push(e19)


for( var i = 0; i < 10; i++){

listaElementos.push(blanco)

}

var e30 = {
    class: 'td-norm',
    ma: '10.81',
    na: '5',
    sim: 'B',
    nom: 'Boro',
    elecn:'1.57',
    val:'3',
    col: semimetal 
}

listaElementos.push(e30)

var e31 = {
    class: 'td-norm',
    ma: '12.011',
    na: '6',
    sim: 'C',
    nom: 'Carbono',
    elecn:'2.55',
    val:'4',
    col: otrosNoMetales
}

listaElementos.push(e31)

var e32 = {
    class: 'td-norm',
    ma: '14.007',
    na: '7',
    sim: 'N',
    nom: 'Nitrógeno',
    elecn:'3.04',
    val:'5',
    col: otrosNoMetales
}

listaElementos.push(e32)

var e33 = {
    class: 'td-norm',
    ma: '15.999',
    na: '8',
    sim: 'O',
    nom: 'Oxígeno',
    elecn:'3.44',
    val:'2',
    col: otrosNoMetales
}

listaElementos.push(e33)

var e34 = {
    class: 'td-norm',
    ma: '18.998',
    na: '9',
    sim: 'F',
    nom: 'Flúor',
    elecn:'3.98',
    val:'1',
    col: otrosNoMetales
}

listaElementos.push(e34)

var e35 = {
    class: 'td-norm',
    ma: '20.180',
    na: '10',
    sim: 'Ne',
    nom: 'Neón',
    elecn:'N/A',
    val:'0',
    col: gasesNobles
}

listaElementos.push(e35)

var e36 = {
    class: 'td-norm',
    ma: '22.99',
    na: '11',
    sim: 'Na',
    nom: 'Sodio',
    elecn:'0.93',
    val:'1',
    col: alcalino
}

listaElementos.push(e36)

var e37 = {
    class: 'td-norm',
    ma: '24.305',
    na: '12',
    sim: 'Mg',
    nom: 'Magnesio',
    elecn:'1.31',
    val:'2',
    col:alcalinotérreos
}

listaElementos.push(e37)



for(var i = 0; i < 10; i++){

listaElementos.push(blanco)

}

var e48 = {
    class: 'td-norm',
    ma: '26.982',
    na: '13',
    sim: 'Al',
    nom: 'Aluminio',
    elecn:'1.61',
    val:'3',
    col: metalDelBloqueP
}

listaElementos.push(e48)

var e49 = {
    class: 'td-norm',
    ma: '28.085',
    na: '14',
    sim: 'Si',
    nom: 'Silicio',
    elecn:'1.90',
    val:'4',
    col: semimetal
}

listaElementos.push(e49)

var e50 = {
    class: 'td-norm',
    ma: '30.974',
    na: '15',
    sim: 'P',
    nom: 'Fósforo',
    elecn:'2.19',
    val:'1,3,5',
    col: otrosNoMetales 
}

listaElementos.push(e50)

var e51 = {
    class: 'td-norm',
    ma: '32.06',
    na: '16',
    sim: 'S',
    nom: 'Azufre',
    elecn:'2.58',
    val:'2,4,6',
    col: otrosNoMetales 
}

listaElementos.push(e51)

var e52 = {
    class: 'td-norm',
    ma: '35.45',
    na: '17',
    sim: 'Cl',
    nom: 'Cloro',
    elecn:'3.16',
    val:'1,3,5,7',
    col: otrosNoMetales 
}

listaElementos.push(e52)

var e53 = {
    class: 'td-norm',
    ma: '39.948',
    na: '18',
    sim: 'Ar',
    nom: 'Argón',
    elecn:'N/A',
    val:'0',
    col: gasesNobles 
}

listaElementos.push(e53)

var e54 = {
    class: 'td-norm',
    ma: '39.098',
    na: '19',
    sim: 'K',
    nom: 'Potasio',
    elecn:'0.82',
    val:'1',
    col: alcalino
}

listaElementos.push(e54)

var e55 = {
    class: 'td-norm',
    ma: '40.078',
    na: '20',
    sim: 'Ca',
    nom: 'Calcio',
    elecn:'1.0',
    val:'2',
    col:  alcalinotérreos
}

listaElementos.push(e55)

var e56 = {
    class: 'td-norm',
    ma: '44.956',
    na: '21',
    sim: 'Sc',
    nom: 'Escandio',
    elecn:'1.36',
    val:'3',
    col: metalDeTransición
}

listaElementos.push(e56)

var e57 = {
    class: 'td-norm',
    ma: '47.867',
    na: '22',
    sim: 'Ti',
    nom: 'Titanio',
    elecn:'1.54',
    val:'2,3,4',
    col: metalDeTransición
}

listaElementos.push(e57)

var e58 = {
    class: 'td-norm',
    ma: '50.942',
    na: '23',
    sim: 'V',
    nom: 'Vanadio',
    elecn:'1.63',
    val:'2,3,4,5',
    col: metalDeTransición
}

listaElementos.push(e58)

var e59 = {
    class: 'td-norm',
    ma: '51.996',
    na: '24',
    sim: 'Cr',
    nom: 'Cromo',
    elecn:'1.66',
    val:'2,3,6',
    col: metalDeTransición
}

listaElementos.push(e59)

var e60 = {
    class: 'td-norm',
    ma: '54.938',
    na: '25',
    sim: 'Mn',
    nom: 'Manganeso',
    elecn:'1.55',
    val:'2,3,4,6,7',
    col: metalDeTransición
}

listaElementos.push(e60)

var e61 = {
    class: 'td-norm',
    ma: '55.845',
    na: '26',
    sim: 'Fe',
    nom: 'Hierro',
    elecn:'1.83',
    val:'2,3,6',
    col: metalDeTransición
}

listaElementos.push(e61)

var e62 = {
    class: 'td-norm',
    ma: '58.933',
    na: '27',
    sim: 'Co',
    nom: 'Cobalto',
    elecn:'1.88',
    val:'2,3,4',
    col: metalDeTransición
}

listaElementos.push(e62)

var e63 = {
    class: 'td-norm',
    ma: '58.693',
    na: '28',
    sim: 'Ni',
    nom: 'Níquel',
    elecn:'1.91',
    val:'2,3',
    col: metalDeTransición
}

listaElementos.push(e63)

var e64 = {
    class: 'td-norm',
    ma: '63.546',
    na: '29',
    sim: 'Cu',
    nom: 'Cobre',
    elecn:'1.90',
    val:'1,2',
    col: metalDeTransición
}

listaElementos.push(e64)

var e65 = {
    class: 'td-norm',
    ma: '65.38',
    na: '30',
    sim: 'Zn',
    nom: 'Zinc',
    elecn:'1.65',
    val:'2',
    col: metalDeTransición
}

listaElementos.push(e65)

var e66 = {
    class: 'td-norm',
    ma: '69.723',
    na: '31',
    sim: 'Ga',
    nom: 'Galio',
    elecn:'1.81',
    val:'3',
    col: metalDelBloqueP
}

listaElementos.push(e66)

var e67 = {
    class: 'td-norm',
    ma: '72.630',
    na: '32',
    sim: 'Ge',
    nom: 'Germanio',
    elecn:'2.01',
    val:'4',
    col: semimetal
}

listaElementos.push(e67)

var e68 = {
    class: 'td-norm',
    ma: '74.922',
    na: '33',
    sim: 'As',
    nom: 'Arsénico',
    elecn:'2.18',
    val:'3,5',
    col: semimetal
}

listaElementos.push(e68)

var e69 = {
    class: 'td-norm',
    ma: '78.971',
    na: '34',
    sim: 'Se',
    nom: 'Selenio',
    elecn:'2.55',
    val:'2,4,6',
    col: otrosNoMetales
}

listaElementos.push(e69)

var e70 = {
    class: 'td-norm',
    ma: '79.904',
    na: '35',
    sim: 'Br',
    nom: 'Bromo',
    elecn:'2.96',
    val:'1,3,5,7',
    col: otrosNoMetales
}

listaElementos.push(e70)

var e71 = {
    class: 'td-norm',
    ma: '83.798',
    na: '36',
    sim: 'Kr',
    nom: 'Kriptón',
    elecn:'3.0',
    val:'N/A',
    col: gasesNobles
}

listaElementos.push(e71)

var e72 = {
    class: 'td-norm',
    ma: '85.468',
    na: '37',
    sim: 'Rb',
    nom: 'Rubidio',
    elecn:'0.82',
    val:'1',
    col: alcalino
}

listaElementos.push(e72)

var e73 = {
    class: 'td-norm',
    ma: '87.62',
    na: '38',
    sim: 'Sr',
    nom: 'Estroncio',
    elecn:'0.95',
    val:'2',
    col: alcalinotérreos
}

listaElementos.push(e73)



var e74  = {
    class: 'td-norm',
    ma: '88.906',
    na: '39',
    sim: 'Y',
    nom: 'Itrio',
    elecn:'1.22',
    val:'3',
    col: metalDeTransición 
}

listaElementos.push(e74)

var e75  = {
    class: 'td-norm',
    ma: '91.224',
    na: '40',
    sim: 'Zr',
    nom: 'Zirconio',
    elecn:'1.33',
    val:'4',
    col: metalDeTransición 
}

listaElementos.push(e75)

var e76  = {
    class: 'td-norm',
    ma: '92.906',
    na: '41',
    sim: 'Nb',
    nom: 'Niobio',
    elecn:'1.6',
    val:'3,5',
    col: metalDeTransición 
}

listaElementos.push(e76)

var e77  = {
    class: 'td-norm',
    ma: '95.95',
    na: '42',
    sim: 'Mo',
    nom: 'Molibdeno',
    elecn:'2.16',
    val:'2,3,4,5,6',
    col: metalDeTransición 
}

listaElementos.push(e77)

var e78  = {
    class: 'td-norm',
    ma: '(98)',
    na: '43',
    sim: 'Tc',
    nom: 'Tecnecio',
    elecn:'1.9',
    val:'7',
    col: metalDeTransición 
}

listaElementos.push(e78)

var e79  = {
    class: 'td-norm',
    ma: '101.07',
    na: '44',
    sim: 'Ru',
    nom: 'Rutenio',
    elecn:'2.2',
    val:'2,3,4,6,8',
    col: metalDeTransición 
}

listaElementos.push(e79)

var e80  = {
    class: 'td-norm',
    ma: '102.91',
    na: '45',
    sim: 'Rh',
    nom: 'Rodio',
    elecn:'2.28',
    val:'4',
    col: metalDeTransición 
}

listaElementos.push(e80)

var e81  = {
    class: 'td-norm',
    ma: '106.42',
    na: '46',
    sim: 'Pd',
    nom: 'Paladio',
    elecn:'2.20',
    val:'4',
    col: metalDeTransición 
}

listaElementos.push(e81)

var e82  = {
    class: 'td-norm',
    ma: '107.87',
    na: '47',
    sim: 'Ag',
    nom: 'Plata',
    elecn:'1.93',
    val:'1',
    col: metalDeTransición 
}

listaElementos.push(e82)

var e83  = {
    class: 'td-norm',
    ma: '112.41',
    na: '48',
    sim: 'Cd',
    nom: 'Cadmio',
    elecn:'1.69',
    val:'2',
    col: metalDeTransición 
}

listaElementos.push(e83)

var e84  = {
    class: 'td-norm',
    ma: '114.82',
    na: '49',
    sim: 'In',
    nom: 'Indio',
    elecn:'1.78',
    val:'3',
    col: metalDelBloqueP 
}

listaElementos.push(e84)

var e85  = {
    class: 'td-norm',
    ma: '118.71',
    na: '50',
    sim: 'Sn',
    nom: 'Estaño',
    elecn:'118.71',
    val:'4',
    col: metalDelBloqueP 
}

listaElementos.push(e85)

var e86  = {
    class: 'td-norm',
    ma: '121.76',
    na: '51',
    sim: 'Sb',
    nom: 'Antimonio',
    elecn:'2.05',
    val:'3,5',
    col: semimetal
}

listaElementos.push(e86)

var e87  = {
    class: 'td-norm',
    ma: '127.60',
    na: '52',
    sim: 'Te',
    nom: 'Telurio',
    elecn:'2.1',
    val:'2,4,6',
    col: semimetal
}

listaElementos.push(e87)

var e88  = {
    class: 'td-norm',
    ma: '126.90',
    na: '53',
    sim: 'I',
    nom: 'Yodo',
    elecn:'2.66',
    val:'1,3,5,7',
    col: otrosNoMetales
}

listaElementos.push(e88)

var e89  = {
    class: 'td-norm',
    ma: '131.29',
    na: '54',
    sim: 'Xe',
    nom: 'Xenón',
    elecn:'2.6',
    val:'N/A',
    col: gasesNobles
}

listaElementos.push(e89)

var e90  = {
    class: 'td-norm',
    ma: '132.91',
    na: '55',
    sim: 'Cs',
    nom: 'Cesio',
    elecn:'0.79',
    val:'1',
    col: alcalino
}

listaElementos.push(e90)

var e91  = {
    class: 'td-norm',
    ma: '137.33',
    na: '56',
    sim: 'Ba',
    nom: 'Bario',
    elecn:'0.89',
    val:'2',
    col: alcalinotérreos 
}

listaElementos.push(e91)

var e92  = {
    class: 'td-norm',
    ma: '178.49',
    na: '72',
    sim: 'Hf',
    nom: 'Hafnio',
    elecn:'1.3',
    val:'4',
    col: metalDeTransición   
}

listaElementos.push(e92)

var e93 = {
    class: 'td-norm',
    ma: '180.95',
    na: '73',
    sim: 'Ta',
    nom: 'Tántalo',
    elecn:'1.5',
    val:'5',
    col: metalDeTransición  
}

listaElementos.push(e93)

var e94  = {
    class: 'td-norm',
    ma: '183.84',
    na: '74',
    sim: 'W',
    nom: 'Wolframio',
    elecn:'2.36',
    val:'2,3,4,5,6',
    col: metalDeTransición  
}

listaElementos.push(e94)

var e95  = {
    class: 'td-norm',
    ma: '186.21',
    na: '75',
    sim: 'Re',
    nom: 'Renio',
    elecn:'1.9',
    val:'3,4,5,6,7',
    col: metalDeTransición 
}

listaElementos.push(e95)

var e96  = {
    class: 'td-norm',
    ma: '190.23',
    na: '76',
    sim: 'Os',
    nom: 'Osmio',
    elecn:'2.2',
    val:'2,3,4,6,8',
    col: metalDeTransición  
}

listaElementos.push(e96)

var e97  = {
    class: 'td-norm',
    ma: '192.22',
    na: '77',
    sim: 'Ir',
    nom: 'Iridio',
    elecn:'2.20',
    val:'1,2,3,4',
    col: metalDeTransición  
}

listaElementos.push(e97)

var e98  = {
    class: 'td-norm',
    ma: '195.08',
    na: '78',
    sim: 'Pt',
    nom: 'Platino',
    elecn:'2.28',
    val:'2,4',
    col: metalDeTransición  
}

listaElementos.push(e98)

var e99  = {
    class: 'td-norm',
    ma: '196.97',
    na: '79',
    sim: 'Au',
    nom: 'Oro',
    elecn:'2.54',
    val:'1,3',
    col: metalDeTransición  
}

listaElementos.push(e99)

var e100  = {
    class: 'td-norm',
    ma: '200.59',
    na: '80',
    sim: 'Hg',
    nom: 'Mercurio',
    elecn:'2.0',
    val:'1,2',
    col: metalDeTransición 
}

listaElementos.push(e100)

var e101  = {
    class: 'td-norm',
    ma: '204.38',
    na: '81',
    sim: 'Tl',
    nom: 'Talio',
    elecn:'1.62',
    val:'1,3',
    col: metalDelBloqueP  
}

listaElementos.push(e101)

var e102  = {
    class: 'td-norm',
    ma: '207.2',
    na: '82',
    sim: 'Pb',
    nom: 'Plomo',
    elecn:'2.33',
    val:'2,4',
    col: metalDelBloqueP  
}

listaElementos.push(e102)

var e103  = {
    class: 'td-norm',
    ma: '208.98',
    na: '83',
    sim: 'Bi',
    nom: 'Bismuto',
    elecn:'2.02',
    val:'3,5',
    col: metalDelBloqueP  
}

listaElementos.push(e103)

var e104  = {
    class: 'td-norm',
    ma: '209',
    na: '84',
    sim: 'Po',
    nom: 'Polonio',
    elecn:'2.0',
    val:'2,4,5',
    col: metalDelBloqueP  
}

listaElementos.push(e104)

var e105  = {
    class: 'td-norm',
    ma: '210',
    na: '85',
    sim: 'At',
    nom: 'Astato',
    elecn:'2.2',
    val:'1,3,5,7',
    col: semimetal 
}

listaElementos.push(e105)

var e106  = {
    class: 'td-norm',
    ma: '222',
    na: '86',
    sim: 'Rn',
    nom: 'Radón',
    elecn:'N/A',
    val:'N/A',
    col: gasesNobles  
}

listaElementos.push(e106)

var e107  = {
    class: 'td-norm',
    ma: '223',
    na: '87',
    sim: 'Fr',
    nom: 'Francio',
    elecn:'0.7',
    val:'1',
    col: alcalino  
}

listaElementos.push(e107)

var e108  = {
    class: 'td-norm',
    ma: '226',
    na: '88',
    sim: 'Ra',
    nom: 'Radio',
    elecn:'0.9',
    val:'2',
    col: alcalinotérreos  
}

listaElementos.push(e108)

var e109  = {
    class: 'td-norm',
    ma: '267',
    na: '104',
    sim: 'Rf',
    nom: 'Rutherfordio',
    elecn:'N/A',
    val:'4',
    col: metalDeTransición  
}

listaElementos.push(e109)

var e110  = {
    class: 'td-norm',
    ma: '268',
    na: '105',
    sim: 'Db',
    nom: 'Dubnio',
    elecn:'N/A',
    val:'N/A',
    col: metalDeTransición  
}

listaElementos.push(e110)

var e111  = {
    class: 'td-norm',
    ma: '269',
    na: '106',
    sim: 'Sg',
    nom: 'Seaborgio',
    elecn:'N/A',
    val:'N/A',
    col: metalDeTransición   
}

listaElementos.push(e111)

var e112  = {
    class: 'td-norm',
    ma: '270',
    na: '107',
    sim: 'Bh',
    nom: 'Bohrio',
    elecn:'N/A',
    val:'N/A',
    col: metalDeTransición  
}

listaElementos.push(e112)

var e113  = {
    class: 'td-norm',
    ma: '277',
    na: '108',
    sim: 'Hs',
    nom: 'Hasio',
    elecn:'N/A',
    val:'N/A',
    col: metalDeTransición  
}

listaElementos.push(e113)

var e114  = {
    class: 'td-norm',
    ma: '278',
    na: '109',
    sim: 'Mt',
    nom: 'Meitnerio',
    elecn:'N/A',
    val:'N/A',
    col: eDesconocidos  
}

listaElementos.push(e114)

var e115  = {
    class: 'td-norm',
    ma: '281',
    na: '110',
    sim: 'Ds',
    nom: 'Darmstatio',
    elecn:'N/A',
    val:'6,1,1,6,7,4',
    col: eDesconocidos   
}

listaElementos.push(e115)

var e116  = {
    class: 'td-norm',
    ma: '282',
    na: '111',
    sim: 'Rg',
    nom: 'Roentgenio',
    elecn:'N/A',
    val:'1,3,5,3',
    col: eDesconocidos   
}

listaElementos.push(e116)

var e117  = {
    class: 'td-norm',
    ma: '285',
    na: '112',
    sim: 'Cn',
    nom: 'Copernicio',
    elecn:'N/A',
    val:'2,4',
    col: eDesconocidos  
}

listaElementos.push(e117)

var e118  = {
    class: 'td-norm',
    ma: '286',
    na: '113',
    sim: 'Nh',
    nom: 'Nihonio',
    elecn:'N/A',
    val:'N/A',
    col: eDesconocidos  
}

listaElementos.push(e118)

var e119  = {
    class: 'td-norm',
    ma: '289',
    na: '114',
    sim: 'Fl',
    nom: 'Flerovio',
    elecn:'N/A',
    val:'2,4',
    col: eDesconocidos  
}

listaElementos.push(e119)

var e120  = {
    class: 'td-norm',
    ma: '290',
    na: '115',
    sim: 'Mc',
    nom: 'Moscovio',
    elecn:'N/A',
    val:'N/A',
    col: eDesconocidos  
}

listaElementos.push(e120)

var e121  = {
    class: 'td-norm',
    ma: '293',
    na: '116',
    sim: 'Lv',
    nom: 'Livermorio',
    elecn:'N/A',
    val:'2,4',
    col: eDesconocidos  
}

listaElementos.push(e121)

var e122 = {
    class: 'td-norm',
    ma: '294',
    na: '117',
    sim: 'Ts',
    nom: 'Teneso',
    elecn:'N/A',
    val:'2,5',
    col: eDesconocidos  
}

listaElementos.push(e122)

var e123  = {
    class: 'td-norm',
    ma: '294',
    na: '118',
    sim: 'Og',
    nom: 'Oganesón',
    elecn:'N/A',
    val:'0',
    col: eDesconocidos  
}

listaElementos.push(e123)

/*var e124  = {
    class: 'td-norm',
    ma: '138.91',
    na: '57',
    sim: 'La',
    nom: 'Lantano',
    elecn:'1.10',
    val:'3',
    col: lantánidos
}

listaElementos.push(e124)

var e125  = {
    class: 'td-norm',
    ma: '140.12',
    na: '58',
    sim: 'Ce',
    nom: 'Cerio',
    elecn:'1.12',
    val:'3,4',
    col: lantánidos
}

listaElementos.push(e125)

var e126  = {
    class: 'td-norm',
    ma: '140.91',
    na: '59',
    sim: 'Pr',
    nom: 'Praseodimio',
    elecn:'1.13',
    val:'3,4',
    col: lantánidos 
}

listaElementos.push(e126)

var e127  = {
    class: 'td-norm',
    ma: '144.24',
    na: '60',
    sim: 'Nd',
    nom: 'Neodimio',
    elecn:'1.14',
    val:'3',
    col: lantánidos
}

listaElementos.push(e128)

var e128  = {
    class: 'td-norm',
    ma: '145',
    na: '61',
    sim: 'Pr',
    nom: 'Prometio',
    elecn:'N/A',
    val:'3',
    col: lantánidos  
}

listaElementos.push(e128)

var e129  = {
    class: 'td-norm',
    ma: '150.36',
    na: '62',
    sim: 'Sm',
    nom: 'Samario',
    elecn:'1.17',
    val:'3',
    col: lantánidos 
}

listaElementos.push(e129)

var e130  = {
    class: 'td-norm',
    ma: '151.96',
    na: '63',
    sim: 'Eu',
    nom: 'Europio',
    elecn:'N/A',
    val:'2,3',
    col: lantánidos 
}

listaElementos.push(e130)
*/

var contador = 0;
var tabla = document.getElementById("tablaP"); 
var contenido = '<table id="test1">';

for( var filas = 0; filas < 7; filas++){
    contenido += '<tr>';
  
    for(var columnas = 0; columnas < 18; columnas++)
        contenido += '<td class='+listaElementos[contador].class +'><div class="caja-id" style = background-color:'+listaElementos[contador].col +'><div class="caja-top"><div class="caja-top-left"><div class="caja-top-left-top">'+listaElementos[contador].ma +'</div><div class="caja-top-left-bottom"><div class="caja-top-left-bottom-left">'+listaElementos[contador].elecn +'</div><div class="caja-top-left-bottom-right">'+listaElementos[contador].val +'</div></div></div><div class="caja-top-right">'+listaElementos[contador].na +'</div></div><div class="caja-bottom"><div class="caja-bottom-left"><div class="caja-bottom-left-top">'+listaElementos[contador].sim +'</div><div class="caja-bottom-left-bottom">'+listaElementos[contador].nom +'</div</div><div class="caja-bottom-right"></div></div></div></td>';
          
};

contador++; 
contenido += '</tr>';
   

contenido += '</table>';
tabla.innerHTML = contenido;

