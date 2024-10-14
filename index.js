/* 1er EXEMPLE*/
/* let monCanard = "donald";
const nombreDePate = 2;
const nombreDAile = 2;
 */

/* ici les paramètres ne servent à rien car on ne s'en sert pas dans la fonction, et le += concatène les string*/
/* function canard(nombreDePate,nombreDAile) {
    let maCanette = "daisy";
    let mesCanards = maCanette += monCanard;
    return mesCanards;
};

console.log(canard()); 
affichera dans la console de l'inspection : daisydonald
*/

/* 2e EXEMPLE*/

/* let monCanard = "donald";

function canard(nombreDePate,nombreDAile) {
    let maCanette = "daisy";
    let mesCanards = maCanette += monCanard;
    return nombreDePate += nombreDAile;
};

console.log(canard(2,1));
 */
/* affichera dans la console de l'inspection : 3 et le += ne concatène pas les nombre mais les additionne,
pour qu'il les concatène et ainsi avoir 21 il aurait fallu mettre les nombres en string avec "" soit : console.log(canard("2","1"));
 */


/* 3e EXEMPLE*/

/* let monCanard = "donald";
let x = 1;
function f() {
    let x = 2;
    console.log(x);
}

console.log(x);
f();
 */
/* affichera dans la console de l'inspection : 1 pour le console.log(x) et 2 pour le f() car le 
second let de let x = 2 et déclaré juste dans la fonction et n'a donc pas de portée globale,
donc le console.log affichera la première déclaration de x soit 1 ;
pour ce qui est de f(), on appelle la fonction donc avec let x = 2 et le console.log dans la fonction;
le fait de déclarer let x = 2 dans la fonction alors qu'il est déjà déclaré est possible car 
le fait de déclarer à l'intérieur de la fonction crée un autre espace mémoire différent du 1er */


/* 4e EXEMPLE GENERATEUR DE PLAQUES D'IMMATRICULATION*/

/* const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
let plaque = "";

for(let i=0; i<2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
    }

plaque += "-";
    
for(let i=0; i<3; i++) {
    plaque += nombre.charAt(Math.floor(Math.random()*nombre.length));
    }

plaque += "-";

for(let i=0; i<2; i++) {
    plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
    }
            
console.log(plaque); */



/* 5e EXEMPLE OPTIMISATION EN SUPPRIMANT LES REPETITIONS DES BOUCLES A L'AIDE DE FONCTIONS*/

/* const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
let plaque = "";

function generateLetter() {
    for(let i=0; i<2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
        }
}

function generateNumber() {
    plaque += "-"
    for(let i=0; i<3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random()*nombre.length));
        }
        plaque += "-"
}

generateLetter()
generateNumber()
generateLetter()
console.log(plaque);
 */


/* 6e EXEMPLE DETERMINER UN NOMBRE DE PLAQUES A GENERER*/

/* const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
let plaque = "";

function generateLetter() {
    for(let i=0; i<2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
        }
}

function generateNumber() {
    plaque += "-"
    for(let i=0; i<3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random()*nombre.length));
        }
        plaque += "-"
}
 *//* 
generateLetter()
generateNumber()
generateLetter()
console.log(plaque);


 */
/* function generatePlaques() {
    let i =10;
    while(i>0) {
        plaque="";
        generateLetter();
        generateNumber();
        generateLetter();
        console.log(plaque);
        i--;
        }    
}

generatePlaques();
 */

            
/* 7e EXEMPLE PLAQUE DEJA EXISTANTE LA REMPLACER EN EN GENERANT UNE NOUVELLE*/

const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nombre = "0123456789";
let plaque = "";

function generateLetter() {
    for(let i=0; i<2; i++) {
        plaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
        }
}

function generateNumber() {
    plaque += "-"
    for(let i=0; i<3; i++) {
        plaque += nombre.charAt(Math.floor(Math.random()*nombre.length));
        }
        plaque += "-"
}
/* 
generateLetter()
generateNumber()
generateLetter()
console.log(plaque);


 */
function generatePlaques() {
    let i =10;
    while(i>0) {
        plaque="";
        generateLetter();
        generateNumber();
        generateLetter();
        console.log(plaque);
        i--;
        }
        return plaque;    
}

/* PAS BON  
generatePlaques();
 */



/* PAS BON
const parcDesPlaques = [];
for (let i = 0;i<20; i++){
    parcDesPlaques.push(generatePlaques());
}
console.log(parcDesPlaques); */

const parcDesPlaques = [];
for (let i = 0; i < 20; i++) {
    let newPlaque;
    do {
        newPlaque = generatePlaques();
    } while (!estUnique(newPlaque));
    parcDesPlaques.push(newPlaque);
}
console.log(parcDesPlaques);

function estUnique(plaque) {
    for (let i = 0; i < parcDesPlaques.length; i++) {
        if (plaque === parcDesPlaques[i]) {
            return false;
        }
    }
    return true;
}


/* 2 POSSIBILITES : SI PAS DE RETURN DANS LA FONCTION  FAIRE 
generatePlaques()
estUnique(plaque)  

SINON FAIRE
 */
/* PAS BON 
estUnique(generatePlaques()); */
//soit est unique est true alors push 
///ou autre methode on stocke resultat estuniqu dans varialble qu on verifie ensuite



function rajoutPlaqueUniqueDansParc(plaque) {
    if (estUnique(plaque)) {
        parcDesPlaques.push(plaque);
    }
    return plaque;
}

rajoutPlaqueUniqueDansParc(plaque);
console.log(parcDesPlaques);

































/* 7e EXEMPLE VERIFICATION SI PLAQUE EXISTE DEJA NE PAS AFFICHER*/












/* affichera dans la console de l'inspection :                 */


