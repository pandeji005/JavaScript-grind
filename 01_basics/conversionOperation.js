//type conversion
const score = 98

const score1 = "94niewvnisd"
let valueOfScore = Number(score)
let valueOfScore1 = Number(score1)

console.log(valueOfScore)

console.log(typeof valueOfScore)

console.log(valueOfScore1)
console.log(typeof valueOfScore1)

let n1 = null
let n2 = undefined

let sn1 = Number(n1)
let sn2 = Number(n2)

console.table([typeof sn1 , typeof sn2 , n1 , n2 , sn1 , sn2])

/*
true => 1
false => 0

"33abc" => NaN
null => 0
undefined => NaN
*/


let isBoolean = 1
let isBoolean1 = "" //value is false //"Amogh" value is true

let boolConvert = Boolean(isBoolean)
let boolConvert1 = Boolean(isBoolean1)


console.table([boolConvert , typeof boolConvert , boolConvert1])


let numberSome = 33
let Stringnum = String(numberSome)

console.table([Stringnum , typeof Stringnum])