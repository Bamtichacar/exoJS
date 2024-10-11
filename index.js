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

/* 2er EXEMPLE*/

let monCanard = "donald";

function canard(nombreDePate,nombreDAile) {
    let maCanette = "daisy";
    let mesCanards = maCanette += monCanard;
    return nombreDePate += nombreDAile;
};

console.log(canard(2,1));
/* affichera dans la console de l'inspection : 3 et le += ne concatène pas les nombre mais les additionne,
pour qu'il les concatène il aurait fallu mettre les nombres en string avec "" soit : console.log(canard("2","1"));
 */



