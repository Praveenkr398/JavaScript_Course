// console.log('kumar')
// console.log("394")

// alert('new update')

// let userName = prompt("enter your name")
// console.log(prompt("enter your first name"))


// variable

// var , let, const

// var a = 12;
// var a = 34;
// console.log(a)

// let fname = "surya"
// let fname = "Mohit" // can't use again
// console.log(fname)

// const lName = "kant"
// const lName = "singh"
// console.log(lName)

// {
    // console.log(a)
//  const lName = "mohit"
// }

// data type
// primitive data type 
// number, string, null, symbol, boolean, undefined, bigint

// Number
let myNum = 24;
// console.log( typeof myNum, myNum)

// string
let mystr = "new code"
// console.log( typeof mystr, mystr)

// null 
let myNUll = null;
// console.log(typeof myNUll, myNUll)

// Boolean 
let myval = (10>5)
// console.log(myval) // true
let myval2 = (10<5)
// console.log(myval2) // false

let myNval = (null>=0)
// console.log(myNval)


// Symbol 
let mysym = Symbol ("myCode")
// console.log(typeof mysym, mysym)

let unknow ;
// console.log(typeof unknow, unknow)

// BigInt
let myBigNumber = 879243875934759347934759375938475398879243875934759347934759375938475398879243875934738759347593479347593759384753988792438759347593479347593759384753988792438759347387593475934793475937593847539887924387593475934793475937593847539887924387593473875934759347934759375938475398879243875934759347934759375938475398879243875934759347934759375938475398879243875934759347934759375938475398753n
// console.log( typeof myBigNumber, myBigNumber)


// Non primitive data type 
// object, array, function

// object
// let objectName = { }

let person1 = {
    // key : value ,
    firstName : "suryakant",
    lastName : "singh",
    age : 24,
}

// console.log(typeof person1, person1)
// console.log(person1.firstName)
// console.log(person1['lastName'])

// +++++++++++ stack & Heap memory +++++++++

// stack memory : primitive : copy 
let oldScore = 34;
let newScore = oldScore
newScore = 99
// console.log(oldScore)
// console.log(newScore)

// heap memory : non primitve : reff
let persone11 = {
    name: "surya",
    age : 34,
}
let person2 = persone11
person2.age = 25
// console.log(persone11)
// console.log(person2)