alert("Hello Professor Falken, shall we play a game ?");

 // function firstFunction(/*parameter*/){
//     alert("World");
// }

// firstFunction();

// integer,float,strong;boolean

// typeof let you know what kind of operator we are using

// let integer = 10;
// let float = 1.5;
// let string = "baguette";
// let boolean = true;

// console.log(typeof integer);
// console.log(typeof float);
// console.log(typeof string);
// console.log(typeof boolean);

let transformerEnMaj = "nous sommes l'avenir du dev";

console.log(transformerEnMaj)

let result = transformerEnMaj.toUpperCase(); 

console.log(result);

// the "." make the change to what is before the "."



// avec une function mettre en minuscule ! 

let textmin = transformerEnMaj.toLowerCase();

console.log(textmin);

// avec une function enlever les espaces !

let withoutSpace = transformerEnMaj.replaceAll(" ", "")

console.log(withoutSpace);

//  avec une function compter le nombre de characteres d'une string

console.log(textmin.length);

// avec une function vérifier si le mot "nous" est contenu dans la string

let contain = transformerEnMaj.includes("nous"); // .search ?

console.log(contain);


// Une fonction qui génère un chiffre aléatoirement entre 1 et 10.

let x = Math.floor((Math.random(1) * 10) + 1);

console.log(x);


//  corrigé :

let nombre = Math.random() * 9 + 1;

console.log(nombre);

// math round

let arrondi = Math.round(nombre);


console.log(arrondi);