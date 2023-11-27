/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1, 2 , 3]
console.log(...array);

const copie = [...array, 4, 5 ,6]
console.log(copie);

const obj = {
    name : "laura" ,
    age : 26
}

const copieObject = {...obj}
console.log(copieObject);
// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const copieObject2 = {...obj , name : "axel"}

// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
const copieStr = {...str}
console.log(copieStr);

