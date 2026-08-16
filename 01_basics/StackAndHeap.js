//Call by value done in primitive data types
//all variables and primitives are stored in stack memory

let myName = "Amogh" //stack memory 

let anotherName = myName //stack memory copy of myName value is stored in anotherName

console.log(myName)
console.log(anotherName) 

anotherName = "Deshpande" //change is done in copy so original is not changed

console.log(myName)
console.log(anotherName) 


//call by reference done in non-primitive data types
//references are called so original value is changed.

let obj1 = {name: "Amogh", age: 22} //stored in heap memory

let obj2 = obj1 //copy of reference is stored in obj2

console.log(obj1)
console.log(obj2)

obj2.name = "Deshpande" //change is done in reference so original is changed

console.log(obj1)
console.log(obj2)