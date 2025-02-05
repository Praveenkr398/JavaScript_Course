// day - 7 : functions & IIFE

// simple 
// function funName (){
//     // code
// }

// Arrow function
// ()=>{
//     //code
// }

// console.log("a")
// console.log("b")
// console.log("w")
// console.log("e")
// console.log("f")
// console.log("s")

// function MultiTime (){
//     console.log("a")
//     console.log("b")
//     console.log("w")
//     console.log("e")
//     console.log("f")
//     console.log("s")
// }

// console.log(MultiTime())
// console.log(MultiTime())
// console.log(MultiTime())


function calculation (){
    // console.log("math calculation")
}

// let result = calculation()
// console.log(result)

function Addition (num1,num12){
//  let result = num1 + num12
//  return result

    return num1 ** num1
}
let add = Addition(10,12)
// console.log(add)
// console.log(Addition(14,92))

// arrow function
let sum = (sum1 , sum2 )=>{
    return sum1 * sum2
}
// console.log(sum(20,5))

function userLogedIn (login){
    if(login == undefined){
        // code
        console.log("please enter your name")
        return
    }
    // console.log(`${login}! you are just loged in`)
}
// userLogedIn("Surya")
// userLogedIn('surya')

function something (){
    console.log("something")
    console.log("nothing")
    return
    console.log(123456)
}
// console.log(something())

function userKart (...value){  
  return value
}

let kart = userKart(100,200,344,666,800,100)
// console.log(kart)


// object in function
let newUser = {
    fname : "suryakant",
    dob : "12/3/2003"
}

function user (anyUser){
    // console.log(`${anyUser.fname}! you are most welcome`)
    // console.log(`${anyUser['dob']} it's your birthday today`)
}
user({
    fname : "mohit",
    dob : "3nd jan"
})

// array in function
 let somNum = [10,20,30,40,50]
 function somenum (sum){
    return sum[4]
 }
// console.log(somenum(somNum))
// console.log(somenum([10,20,30,40,50]))

// IIFE
// (code )()

(function person1 (name){
    // console.log(`first visitor, ${name}`)
})("MOhit");

(function person1 (name){
    // console.log(`Second visitor, ${name}`)
})("SOhit") ;

(function person1 (name){
    // console.log(`Second visitor, ${name}`)
})("Rahul")

