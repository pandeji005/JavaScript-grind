// primitive and non-primitive

//call by value //call by reference


/*
 primitive => String , Number , null , Boolean , Symbol , undefined , BigInt
 ==> called by value
 Reference(non-primitive) => Array , Objects , Functions
  ==> called by reference

 JavaScript is dynamically typed language
 we need not explicitly declare datatypes

*/

const id = Symbol('123') //returns Symbol type
// gives uniques => used in frontend react and all

//array
const hero = ["Ddc","Msrvel"] //object type

//object

let newObj = { //object type
    name: "Amogh",
    age: 22,
}
//function as variable
const MyFunction  = function(){ //object function type
    console.log("Hello! world");
}

// console.log(MyFunction);

