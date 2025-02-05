// day - 5: Arrays and Methods

// array 

let myArr = [1,2,3,4,5 ,"text"]
// console.log(myArr)
// console.log( typeof myArr, myArr)
// console.log(myArr[0]) // get
// console.log(myArr[3])

myArr[3] = 40; // set
// console.log(myArr)
// console.log(myArr[3])

let myNumArr = [2,4,7,8,4,2,3]
// console.log( typeof myNumArr)
// console.log("original ", myNumArr)
// console.log(myNumArr.slice(3,))
// console.log("slice", myNumArr)
// console.log(myNumArr.splice(3))
// console.log("splice", myNumArr)

// console.log("original ", myNumArr)
// console.log("new", myNumArr.splice(3,1,24,"new text", 45)) // 1st: position, 2nd : remove, 3rd: add
// console.log("splice", myNumArr)

// pop push shift unshift 

let newArr = [ 2,4,5,7,9]
// console.log(newArr)
// console.log(newArr.pop())
// console.log(newArr)
// console.log(newArr.push(1,12))
// console.log(newArr) // new array for shift


// console.log(newArr.shift())
// console.log(newArr)

// console.log(newArr.unshift(99, 100))
// console.log(newArr)

let Arr1 = [1,2,3,4,5]
let Arr2 = [0,0,0,0,0]
let Arr3 = [11,21,31,41,51]

// console.log(Arr1.concat(Arr2).concat(Arr3))
// console.log (...Arr1,...Arr2,...Arr3)
// console.log(Arr1.toString())
// console.log(Arr1.join('@'))
// console.log(Arr1.includes(2)) // true
// console.log(Arr1.includes(20)) // false
// console.log(Arr1.indexOf(3))
// console.log(Arr1.indexOf(6)) // -1 bcz not avaiable

let bigNum = [2,4,69,45,29,30,1000,24,100,500]
// console.log(bigNum)
// console.log(bigNum.sort())

let Accend = function(a,b){
    return a - b
}
// console.log(bigNum.sort(Accend))

let decend = function(a,b){
    return b - a
}
// console.log(bigNum.sort(decend))

let ArrStr = "MOhit"
// console.log(Array.from(ArrStr))

// let frst = 10
// let snd = 20
// let sum = function (){
//     return frst + snd
// }

// console.log(sum())


// flat 
let somNumber = [2,3,4,4,[10,29,30],[3,44,33,['a','b','c'],0]]

// console.log(somNumber)
// console.log(somNumber.flat())
// console.log(somNumber.flat(Infinity))



