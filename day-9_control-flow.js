// day 9 : control flow : conditional statement topic

// if (true){
//     // code
// }

// let OurUser = 1000;
// if ( OurUser >= 500 ){
//     console.log("avaiable")
// }else{
//     console.log("less then 500")
// }

// <, >, <= , >=, == , != , === , !==

// multiple if else
// let UserAge = new Number(prompt("enter your age here"))
// console.log(typeof UserAge, UserAge)
// if (UserAge >= 18){
//     console.log("you are able to drive now")
// } else if (UserAge >= 10){
//     console.log("you are not able to drive now")
// } else if (UserAge > 60){
//     console.log('you are too old to drive')
// }
// else{
//     console.log('enjoy your life')
// }

// switch 
// let userinput = 'may' // 1 = jan , 12 = dec
// let month = Number.parseInt(userinput)

// let UserLogedIN = 'yes';
// let LogInfromGoogle = 'yes'
// if ( UserLogedIN && LogInfromGoogle ){
//     console.log("you are most welcome")
// }
// else{
//     console.log(' please log in')
// }


// let UserLogedIN = '';
// let LogInfromGoogle = 'yes'
// let LogInfromFacebook = ''

// if ( UserLogedIN || LogInfromGoogle ){
//     console.log("you are most welcome")
// }
// else{
//     console.log(' please log in')
// }

// ternary operator
// console.log(500 > 1000 ? 'true':'false' )

// let Fnum = '200';
// let Snum = 200;
// console.log(Fnum === Snum ? 'true' : 'false' )

// nullish  ;  undefined , null , 23,'rest'
// let numb1 = 10
// let numb2 = 20
// console.log(numb1 ?? numb2)

// let numb1 = 100
// let numb2 = null
// console.log(numb1 ?? numb2)

// let numb1 = 100
// let numb2 = undefined
// // console.log(numb1 ?? numb2)

// let someVal = 200
// if(someVal){
//     console.log('True')
// }else{
//     console.log('False')
// }

// truthy value 
// some values, array ,object, biging

// falsy value 
// 0, -0 , 0n , undifined

// let userout = {}
// if(Object.keys(userout).length){
//     console.log("value")
// } else{
//     console.log('nothing')
// }

let userout = []
if(userout.length){
    console.log("some value")
}
else{
    console.log("empty")
}
