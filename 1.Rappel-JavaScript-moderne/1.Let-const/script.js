/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
*/

if (true) {
    var test = "hello world"
    let test2 = "test2"
    const test3 = "test3"
}

//console.log(test, test2, test3);

function foo() {
    var number = 10 
    let number2 = 99
}
//console.log(foo(number, number2));

/* 
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/

var animal
let animal2
const animal3 = "Lion"
//console.log(animal, animal2, animal3);


/*
   3. On peut redéclarer des variables var sans provoquer d'erreurs.
*/

var dog = "tobi"
var dog = "bob"

//console.log(dog);

/* 
    4. Une variable var se fait hoisted et peut être utilisée avant sa déclaration, car elle est initialisée à undefined.
    Let & const sont hoisted mais pas initialisées.
    
    Hoisting JavaScript
    Les déclarations de fonctions et de variables sont hissées en JavaScript. Cela signifie qu'elles sont stockées dans la mémoire du VO(Variables Object) du contexte d'exécution actuel et rendues disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence.
*/

//console.log(chien, chat);

var chien = 12 // undefined pour var 
let chat = 13 // erreur impossible d'acceder a la variable avant l'inisialisation

/* 
    5. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const peuvent se faire enregistrer globalement, mais sans être accessibles comme propriétés directes de window, elles sont inscrites dans l'environnement lexical de l'objet global (l'ensemble des déclarations accessibles par ce dernier).
*/

var user = "julien"
//console.log(window);