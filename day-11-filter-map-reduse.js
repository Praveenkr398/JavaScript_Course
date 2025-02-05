// day 11: filter, map, reduce

// loop mistake solution
// let mynum = 1;
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     console.log("my feb number is : ", i);
//     // break
//     continue
//   }
//   console.log(i);
// }

// forEach
let myarr = [1, 2, 3, 4, 5];
// let CreatedArray = []
// let NewArry = myarr.forEach( (e)=>{
//   return CreatedArray.push(e)
// })
// console.log(CreatedArray)

// let bigNum = [1,2,3,4,5]
// bigNum.forEach((e) => {
//   //   console.log(e * 10)
//   if (e < 3) {
//     console.log(`less then 3 ${e}`)
//   }
// });
// console.log(bigNum)

// filter
// let bigNum = [1, 22, 13, 44, 85];
// let filterNum = bigNum.filter( (e)=>{
//      return e > 20;
//     //  console.log(e > 20)
// })
// console.log(filterNum)

// list of course

let CourseList = [
  { Course: "Web Development", Price: 1999, Duration: "3 Month" },
  { Course: "App Development", Price: 2999, Duration: "3 Month" },
  { Course: "Data Science", Price: 4999, Duration: "6 Month" },
  { Course: "DSA course", Price: 4999, Duration: "6 Month" },
  { Course: "UI/UX Design", Price: 1999, Duration: "3 Month" },
  { Course: "Instagram Marketing", Price: 999, Duration: "1 Month" },
  { Course: "Facebook Marketing", Price: 999, Duration: "1 Month" },
];

// let SearchItem = CourseList.filter( (item)=>{
//   return  item.Duration == '3 Month'
// } )
// console.log(SearchItem)


// let newCourseList = []
//  let itCourseList = CourseList.forEach( (item)=>{
//      if( item.Price> 1999){
//      newCourseList.push(item)
//     }
//     return
//  })
// console.log(itCourseList)

// map
// let bigNum = [1, 2, 3, 4, 5];
// let chaingproces = bigNum
//   .map((item) => {
//     return item * 5 
//   })
//   .map((item) => {
//     return item + 10
//   }).filter((item) => {
//     return item > 10
//   });
  
// console.log(chaingproces);

// reduce ;
// let Shopping = [100,200,300,400,500,600,900] 
// let totalValue =  Shopping.reduce((accVal,currVal)=>{
//     return accVal + currVal 
// },50)

// console.log(totalValue)
