// day 6 : object and methods

// let myObject = new Object()
// myObject.fName = "Rohan Das";
// myObject.age = 23;
// console.log(myObject)

let logedIn = Symbol("LogedIn")
let user = {
    // key : 'value',
    fName : "Mohan Das",
    salary: '30k',
    from : "delhi",
    log : (logedIn)
}

user.from = ''
user.edu = "degree"
// console.log(user)
// console.log(user.from)
// console.log(user['fName'])
// console.log(user['edu'])
// console.log(user['log'])

// advance

let employee = {
    fName : "Mohan Das",
    salary: '30k',
    from : "delhi",
    skill : {
        structure : 'HTML' ,
        Style : 'CSS', 
        Action : 'Js',
        backEnd : {
            1: 'React.js',
            2:' Node.js',
            3: 'Angular',
        }
    }
}
// console.log(employee)
// console.log(employee.skill)
// console.log(employee.skill.backEnd)
// console.log(employee.skill.hasOwnProperty('backEnd'))
// console.log(Object.keys(employee))
// console.log(Object.values(employee))
// console.log(Object.entries(employee))
// console.log(Object.entries(employee)[3])

let obj1 = { 
    fName : "Rahul",
    mName : "Das",
    lName : "Chaudhary",
}

let obj2 = {
    age : 34,
    salary : "40k"
}

let obj3 = {
    from : "India",
    edu : "Mtech"
}

obj3.data = function(){
    console.log("Expert") 
}

// console.log(obj3.data())

// console.log(obj1,obj2,obj3.data())
let allObj = {obj1,obj2,obj3}
// console.log(allObj)

let allObj1 = Object.assign(obj1,obj2,obj3)
let allObj2 = Object.assign({},obj1,obj2,obj3)
console.log(allObj1)
console.log(allObj2)