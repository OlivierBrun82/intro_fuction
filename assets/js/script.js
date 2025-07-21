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

// le "." make the change to what is before the "."



// avec une function mettre en minuscule ! 

let result2 = transformerEnMaj.toLowerCase();

console.log(result2)

// avec une function enlever les espaces !

let result3 = transformerEnMaj.replaceAll(" ", "")

console.log(result3);

//  avec une function compter le nombre de characteres d'une string

console.log(result2.length);

// avec une function vérifier si le mot "nous" est contenu dans la string

let result4 = transformerEnMaj.includes("nous"); // .search ?

console.log(result4);