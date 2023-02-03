alert('Este codigo Esta coectado…');


function myFunction() {
  alert("elemento quimico");
  console.log("Has tocado a un Elemeto Quimico…")

  const img = document.createElement("img");

 


  img.src = "";

  document.body.appendChild(img);
}

function myFunction2() {
  alert("Numero Atomico");
  console.log("Has tocado a un Numero Atomico…")
  document.body.style.backgroundColor = "white";
}


var Alcalinos = "#FE9D15"

var Alcalinoterreos  = "#FE9D15"
 
var MetalesDetransicion = "#FE9D15"

var  Metaloides = "#FE9D15"

var OtrosMetales = "#FE9D15"

var NoMetales = "#FE9D15"

var Halogenos = "#FE9D15"

var GasesNobles = "#FE9D15"

var  Lantanidos = "#FE9D15"

var Actindos = "#FE9D15"

var eDesconocidos = "#FE9D15"




var listaElementos = [ ];

var e0 = { 
           Na : '1',
           Sim : 'H',
           Nom : 'Hidrogeno',
           elecn: '',
           val: '',
           col: NoMetales,
        
          };

   
           
 listaElementos.push(e0)
console.log(listaElementos)


var blanco = { Ma : '',
               Na : '', 
               Sim : '',
               Nom : '',
               elecn: '',
               val: '',
               col: '',
            
              }
               

for ( var i = 0; i > 16; i++) {
	listaElementos.push(blanco)
}



var e17 = { Ma: '4,002',
           Na : '2',
           Sim : 'He',
           Nom : 'Helio',
           elecn : '',
           val: '',
           col : gasesnobles,
         
          }
          listaElementos.push(e17)



          var e18 = { 
          Na : '2',
          Sim : 'Li',
          Nom : 'Litio',
          elecn: '',
          val: '',
          col: Alcalinos,
         };

         listaElementos.push(e18)
        
         

         var e19 = { 
           Na : '4',
           Sim : 'Be',
           Nom : 'Berilio',
           elecn: '',
           val: '',
           col: Alcalinoterreos,
          };

          listaElementos.push(e19)



          for ( var i = 0; i > 10; i++) {
            listaElementos.push(blanco)
          }


          var e30 = { 
           Na : '10',
           Sim : 'Bo',
           Nom : 'Boro',
           elecn: '',
           val: '',
           col: Metaloides,
          };
          listaElementos.push(e30)


          var e31 = { 
           Na : '6',
           Sim : 'C',
           Nom : 'Carbono',
           elecn: '',
           val: '',
           col: NoMetales,
          
          }
          listaElementos.push(e31)
          

          var e32 = { 
           Na : '7',
           Sim : 'N',
           Nom : 'Nitrogeno',
           elecn: '',
           val: '',
           col: NoMetales,
          };

          listaElementos.push(e32)

          var e33 = { 
           Na : '8',
           Sim : 'O',
           Nom : 'Oxigeno',
           elecn: '',
           val: '',
           col: NoMetales,
          }
       
          listaElementos.push(e33)

          var e34 = { 
           Na : '9',
           Sim : 'F',
           Nom : 'Fluor',
           elecn: '',
           val: '',
           col: Halogenos,
          };

          listaElementos.push(34)

          var e36 = { 
            Na : '10',
            Sim : 'Ne',
            Nom : 'Neon',
            elecn: '',
            val: '',
            col: GasesNobles,
           };
 
           listaElementos.push(e35)

          var e37 = { 
           Na : '11',
           Sim : 'Na',
           Nom : 'Sodio',
           elecn: '',
           val: '',
           col: OtrosMetales,
          };

          listaElementos.push(e36)

          var e38 = { 
           Na : '12',
           Sim : 'Mg',
           Nom : 'Magnesio',
           elecn: '',
           val: '',
           col: Alcalinoterreos,
          };
      
          listaElementos.push(e37)
          

          
          var e49 = { 
           Na : '13',
           Sim : 'Al',
           Nom : 'Aluminio',
           elecn: '',
           val: '',
           col: OtrosMetales,
          };

          listaElementos.push(e49)

          var e50 = { 
           Na : '14',
           Sim : 'Si',
           Nom : 'silicio',
           elecn: '',
           val: '',
           col:  Metaloides,
          };
          
          listaElementos.push(e50)

          var e51 = { 
           Na : '15',
           Sim : 'P',
           Nom : 'Fosforo',
           elecn: '',
           val: '',
           col: NoMetales,
          };

          listaElementos.push(e51)

          var e52 = { 
           Na : '16',
           Sim : 'S',
           Nom : 'Azufre',
           elecn: '',
           val: '',
           col: NoMetales,
          };

          listaElementos.push(e52)

          var e53 = { 
           Na : '17',
           Sim : 'Cl',
           Nom : 'Cloro',
           elecn: '',
           val: '',
           col: Halogenos,
          };

          listaElementos.push(e53)

          var e54 = { 
           Na : '18',
           Sim : 'Ar',
           Nom : 'Argon',
           elecn: '',
           val: '',
           col: GasesNobles,
          };

          listaElementos.push(e54)

          var e55 = { 
           Na : '19',
           Sim : 'K',
           Nom : 'potasio',
           elecn: '',
           val: '',
           col: MetalesDetransicion,
          };

          listaElementos.push(e55)

          var e56 = { 
          Na : '20',
          Sim : 'Ca',
          Nom : 'Calcio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };

         listaElementos.push(e56)

         var e57 = { 
          Na : '21',
          Sim : 'Sc',
          Nom : 'Escandio',
          elecn: '',
          val: '',
          col: MetalesDetransicion,
         };
         listaElementos.push(e57)


         listaElementos.push(e59)
         var e60 = { 
          Na : '24',
          Sim : 'Ti',
          Nom : 'Titanio',
          elecn: '',
          val: '',
          col: MetalesDetransicion,
         };
         listaElementos.push(e60)

         var e61 = { 
          Na : '25',
          Sim : 'V',
          Nom : 'Vanadio',
          elecn: '',
          val: '',
          col: OtrosMetales,
         };
         listaElementos.push(e61)
         var e62 = { 
          Na : '26',
          Sim : 'Nb',
          Nom : 'Niobio',
          elecn: '',
          val: '',
          col: MetalesDetransicion,
         };
         listaElementos.push(e62)
         var e63 = { 
          Na : '27',
          Sim : 'Cr',
          Nom : 'Cromo',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e63)
         var e64 = { 
          Na : '28',
          Sim : 'Mn',
          Nom : 'Manganeso',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e64)
         var e65 = { 
          Na : '29',
          Sim : 'Fe',
          Nom : 'Hierro',
          elecn: '',
          val: '',
          col: OtrosMetales,
         };
         listaElementos.push(e65)
         var e66 = { 
          Na : '30',
          Sim : 'Co',
          Nom : 'Cobalto',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e66)
         var e67 = { 
          Na : '31',
          Sim : 'Sc',
          Nom : 'Escandio',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e67)
         var e68 = { 
          Na : '32',
          Sim : 'Ni',
          Nom : 'Niquel',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e68)
         var e69 = { 
          Na : '33',
          Sim : 'Cu',
          Nom : 'Cobre',
          elecn: '',
          val: '',
          col: MetalesDetransicion,
         };
         listaElementos.push(e69)
         var e70 = { 
          Na : '34',
          Sim : 'Zn',
          Nom : 'Zinc',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e70)
         var e71 = { 
          Na : '35',
          Sim : 'Ga',
          Nom : 'Galio',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e71)
         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: OtrosMetales,
         };
         listaElementos.push(e72)
         var e73 = { 
          Na : '37',
          Sim : 'As',
          Nom : 'Arsénico',
          elecn: '',
          val: '',
          col: Lantanidos,
         };
         listaElementos.push(e73)
         var e74 = { 
          Na : '38',
          Sim : 'Se',
          Nom : 'Selenio',
          elecn: '',
          val: '',
          col: NoMetales,
         };
         listaElementos.push(e74)

         var e75 = { 
          Na : '39',
          Sim : 'Br',
          Nom : 'Bromo',
          elecn: '',
          val: '',
          col: Halogenos,
        };
        listaElementos.push(e75)
      
        var e76 = { 
          Na : '40',
          Sim : 'Kr',
          Nom : 'Kripton',
          elecn: '',
          val: '',
          col: GasesNobles,
         };
         listaElementos.push(e76)

         for ( var i = 0; i > 10; i++) {
           listaElementos.push(blanco)
         }

         for (let filas = 76; filas < array.length; filas++) {
          const element = array[filas];
          
         }

         for (let colum = 3; colum < array.length; colum++) {
          const element = array[colum];
          
         }

         var e72 = { 
          Na : '35',
          Sim : 'Rb',
          Nom : 'Rubidio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '37',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Metaloides,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '38',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '39',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '40',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)

         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)



         var e72 = { 
          Na : '36',
          Sim : 'Ge',
          Nom : 'Germanio',
          elecn: '',
          val: '',
          col: Alcalinoterreos,
         };
         listaElementos.push(e72)






      var tabla = document.getElementById("TablaP");
     
      var contenido = "table" 