// day 3 : Strings

let name = "praveen"; // double quote strings
// console.log(name);
let fname = 'mohit'; // single quote strings
// console.log(fname);

let hName = "Home's name : bihar"; // single quote inside double quote
// console.log(hName);
let Cname = 'volvo"s best car'; // single quote inside single quote
// console.log(Cname);

let fullName = "Mohit kumar";
// console.log(fullName);
// console.log(fullName.length); // length of the charecter :7
// console.log(fullName[4]); // print 5th no of the text
// console.log(fullName[6]);
// console.log(fullName[7]);
// console.log(fullName[0]); // print 1st no of the text

// template literal : access variable
let boy1 = "Mohit";
let boy2 = "vikash";
// console.log(boy1, "is friend of ", boy2)
let myfriend = `${boy1} and ${boy2} both are my friends`;
// console.log(myfriend);

// strings; method
let myName = "Mohit kumar";

// Extracting String Characters
// console.log(myName);
// console.log(myName.length); // lenth of myName : 11
// console.log(myName.charAt(3)); // 3rd char from index(0)
// console.log(myName[4]); // same as charAt()
// console.log(myName.charCodeAt(4)); // 3rd char unicode

// Extracting String Parts

let fruits = "Apple, Banana, Kiwi, mango";

// console.log(fruits.length); // length : 19
// console.log(fruits.slice(5)); // print from 4th letter to end
// console.log(fruits.slice(7, 19)); // print from 7 to 19
// console.log(fruits.slice(3)); // print from 7 to 19
// console.log(fruits.substring(3, 9)); // same as slice
// console.log(fruits.substr(3));

let fName = "Suryakant"
// console.log(fName)
// convert text 
// console.log(fName.toUpperCase()) // uppercase
// console.log(fName.toLowerCase()) // lowercase


// trim : trim out white from start and end

let myCar = "        volvo, BMW,                           more,      maruti     suzuki      "
// console.log(myCar)
// console.log(myCar.length)
// console.log(myCar.slice(0,8))

// console.log(myCar.trim()) // star trim
// console.log(myCar.trimEnd())
// console.log(myCar.trimLeft())
// console.log(myCar.trimStart())
// console.log(myCar.trimRight())

// Repeat : write again and again times 
let myDream = "Doctor "
// console.log(myDream)
// console.log(myDream.repeat(1111))

// Replace : replace the first match only
let comp = "microsoft google microsoft zepto flipkart "
// console.log(comp)
// console.log(comp.replace("google","meta")) // replace google to uber
// console.log(comp.replace("microsoft","my fev comp:")) // replace only 1st microsoft not 2nd
// console.log(comp.replace("\microsoft\g","Amazon is")) // replace only 1st microsoft not 2nd
// console.log(comp.replaceAll("microsoft","oaaak"))

// concat : connect varibale 

let friend1 = "kavya, susil, geeta"
let friend2 = "Moniya"
let friend3 = "Rahul"

// console.log(friend1.indexOf("d"))

// console.log(friend1.concat(" is friends of both "+ friend2 + " and " + friend3))

// console.log(`${friend1} is friends of ${friend2} and ${friend3}`)



