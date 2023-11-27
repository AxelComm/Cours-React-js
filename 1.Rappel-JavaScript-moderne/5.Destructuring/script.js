/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}

// const {userName, age, country} = userObj
// console.log(age , userName , country);



// Donner un nom différent aux constantes

// const {userName: mainName, age: exactAge, country: origin} = userObj


// Créer des constantes par défaut, au cas où les props n'existent pas.

const {country, sport = "football", beverage = "beer"} = userObj
console.log(country , sport, beverage);


// Combiner un nom différent et des valeurs par défaut.

const {userName: mainName = "Hanz"} = userObj
console.log(mainName);


// Affecter les props d'un objet attendu en paramètre




/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];

const [cat, dog] = animals

let animals1 , animals2
[animals1, animals2] = animals
console.log(animals1, animals2);




// valeur par défaut et ignorer des valeurs

const fruits = [" fraise ", "pomme", "bannane"]

const [ fraise, ,bannane] = fruits
console.log(fraise, pomme , bannane);

// affecter le reste d'un tableau


// Fonctionne aussi avec les strings
