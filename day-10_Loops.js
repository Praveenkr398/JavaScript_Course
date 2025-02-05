// day 10: Loops : for loop, while loop, foreach

// for loops

// let array = [1,2,3,4,5]
// console.log(array.length)

// let Realnum = 1
// for (let index = 1; index < 10; index++) {
//   let element = index
//   console.log(element)
//    if(Realnum = 5 ){
//     console.log("value of 5")
//    }
// }

// table
// let Realnum = 1
// for (let i = 1; i <= 10; i++) {
  
//   for (let j = 1; j <=10 ; j++) {
//     console.log( i + " * " + j + " = " + i * j)
//   }
   
// }

// Array    [0, 1, 2, 3, 4]
// let myArr = [10,'ramesh','mohit',40,50,60,70]
// // console.log(myArr.length) 
// for (let index = 0; index < myArr.length; index++) {
//     // const element = array[index];
//     console.log(myArr[index])
    
// }

// while loop
let realNum = 5
// while (realNum < 20) {
//     console.log(realNum)
//     realNum++
// }

// do {
//     console.log(realNum)
//     realNum++
// } while (realNum <10);

// _________ For of __________
// Array = [ 1,2,3 "sdf"]
// Array = [ {}, {} ,{}]

let myArray = ["html","css", "js"]
// for (let i = 0; i < myArray.length; i++){
//     console.log(`no.${i} : ${myArray[i]}`)
// }

// for (const i of myArray) {
//     console.log(i)
// }
// for (const i in myArray) {
//     console.log(i)
// }

// string

let mystr = "Surya Kant"
// for (let i = 0; i < mystr.length; i++){
//     console.log(mystr[i])
// }

// for (const i of mystr) {
//     console.log(i)
// }
// for (const i in mystr) {
//     console.log(i)
// }

// map 
let myMap = new Map;
myMap.set('zstate-1','mumbai')
myMap.set('state-2','delhi')
myMap.set('state-3','gujrat')
// console.log(myMap)

// for (const item of myMap) {
//     console.log(item)
// }

// for (const [key, value] of myMap) {
//     console.log(value)
// }
// for in for map not working 
// for (const item of myMap) {
//     console.log(item)
// }

let myObj = {
    first : 'lavel1',
    second : 'lavel2',
    third : 'lavel3',
    fourth : 'lavel4',
}
console.log(myObj.length)

// for can't access obj
// for (let index = 0; index < 5; index++) {
//     const element = myObj[index];
    
// } 

// not working
// for (const element of myObj) {
//     console.log(element)
// }

// working
// for (const element in myObj) {
//     console.log(element)
// }

for (const element in myObj) {
    // console.log(myObj.element) // cant use .
    // console.log(element , myObj[element])
}

// for (const [key, value,i] in myObj) {
//     console.log(i)
// }

// array [3,4,5,'akdf']
// [{}{}{}]

// forEach
let array = [1,2,"third",4,5]
// array.forEach(function (e){
//     console.log(e)
// })
// array.forEach( (e)=>{
//     console.log(e)
// })

let somval = function(arrValue){
    // console.log(arrValue)
}
array.forEach( somval )

let ArrTExt = ['first', 'second', 'third']
console.log(ArrTExt)
ArrTExt.forEach((value,index, array)=>{

    // console.log(value,index,array )
    console.log(index )
})

// [{}{}{}]

let ArrObj = [
    {
        first : 'lavel1',
        second : 'lavel2',
            },
    {
        second : 'lavel2',
        first : 'lavel1',
            },
    {
        third : 'lavel1',
        second : 'lavel2',
            }
]

let objFunc = function (item){
    console.log(item)
}

ArrObj.forEach(objFunc)