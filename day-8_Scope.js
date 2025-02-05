// day 8 : scope and this

var a = 10;
let b = 20;
const c = 30;
let abc = 123;

{
  let a = 100;
  let b = 200;
  const c = 300;
  // console.log(abc)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
  let c = 30;
//   console.log(a, c,d);
  function two() {
    let b = 20;
    // console.log(a, b, c);
    function three() {
      let d = 40;
    //   console.log(a, b, c , d);
    }
    three();
  }
  two();
}
one();

// this 
// console.log(this)
let fname = "suryakant"

const user1 = {
    fname : "rahul raj",
    age : 24,
    salary : 50000,
    Response : function(){
        // console.log(`${this.fname}, now you are on lowest position`)
    }
}
// console.log(user1.Response())

person1()
function person1(){
    // console.log(fname)
}

let somefunc = function (){
    // console.log("Chaudhary")
}
// console.log(somefunc())

// arrow function

// function(parameter){...code..}
// (parameter)=>{...code..}

let emp1 = ()=>{
    let userId = '234dk'
    let salary = '50k'
    let email = 'exampl@gmail.com'
    // console.log(`userID: ${userId} , EmailId: ${email}`)
}
emp1()

// let asum = () => console.log("Rahul kumar")
// asum()

// let asum = (a,b) => console.log(a + b)
// asum(20 , 20)

// let asum = (a,b) => {return a * b}
// console.log(asum(10,10))

// let asum = (a,b) =>  a * b
// console.log(asum(10,10))

let asum = () => ({pername: 'Rahul kumar',age: 25})
// console.log(asum())

let asum2 = () => ([23,3,333,0,33,3])
// console.log(asum2())
