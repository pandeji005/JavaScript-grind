const accountName = "John Doe";

let accountBalance = 1000; //only use let to declare a variable
var accountType = "Savings"; //do not prefer var to declare a variable

const account = "1234"
accountcity = "New York"; //not prefered because not good practice

let status; // only declared so value is undefined

/*
 var is not yet used.

 let is used to declare a variable
 const is used to declare a constant

 var is not used because of problem with block scope and function scope
*/


console.table({ accountName, accountBalance, accountType, accountcity ,account , status});


/*
┌────────────────┬────────────┐
│ (index)        │ Values     │
├────────────────┼────────────┤
│ accountName    │ 'John Doe' │
│ accountBalance │ 1000       │
│ accountType    │ 'Savings'  │
│ accountcity    │ 'New York' │
│ account        │ '1234'     │
│ status         │ undefined  │
└────────────────┴────────────┘
*/