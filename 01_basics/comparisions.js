/*
 >
 <
 >=
 <=
 ==
 !=
*/

console.log("2">1); //automatically converts to number
console.log("02">1); //but preferabally should not compare

console.log(null>0); //false because comparision converts null to 0.
console.log(null==0);//false
console.log(null>=0);//true

/*
  comparision operators > < >= <= work differently
  from 
  equality operator 
*/

// === strict check => checks value and datatype also

console.log("2"==2); //true
console.log("2"===2);//false

