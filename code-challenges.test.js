// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe( "description", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  expect (description(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

//GOOD FAIL:
// FAIL  ./code-challenges.test.js
// description
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// ● description › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//   ReferenceError: description is not defined



// b) Create the function that makes the test pass.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//PSEUDOCODE:
//Input: an array of objects
//Output: an array with a sentence about each person with their name capitalized
//Process:
//Create a funtion called description which takes in an array of objects and returns an array with a sentence about each person with their name capitalized 
//Use map to iterate through the array
//Access value using dot notation
//use split to split the key name into a string
//use touppercase to change the first index on the string
//use join to then join the string
//callback function and use test variables given

// The pig latin challenge helped with coming up with this one 


const description = (arr) => { 
  const newString = arr.map(value => {
    const capitalizedName = value.name.split(" ").map(str => str[0].toUpperCase() + str.substring(1)).join(" ")
    return `${capitalizedName} is ${value.occupation}`
  })
  return newString
}

console.log(description(people))


// PASSING TEST:
// console.log
// [
//   'Ford Prefect is a hitchhiker',
//   'Zaphod Beeblebrox is president of the galaxy',
//   'Arthur Dent is a radio employee'
// ]

//   at Object.log (code-challenges.test.js:64:9)

// PASS  ./code-challenges.test.js
// description



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe( "mixedData", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  expect (mixedData(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect (mixedData(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// GOOD FAIL:
// FAIL  ./code-challenges.test.js
// mixedData
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// ● mixedData › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//   ReferenceError: mixedData is not defined


// b) Create the function that makes the test pass.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//PESUDOCODE:
//Input: An array of mixed data
//Output: An array of only the REMAINDERS of the numbers when divided by 3
//Process:
//Create a function called mixedData which takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//Create an empty array where number values will be pushed if conditions are met
//Used for loop to iterate through the array to find only number values
//Write conditional statement to filter and push values that meet the conditions
//Specify that if value is a number and has a remainder(%3) then it will be pushed to the newArr array, have it return the new array
//Callback function and used test variables provided

const mixedData = (arr) => {
  let newArr = []
  for( let i = 0; i< arr.length; i++)
  if(typeof arr[i] === "number"){
    newArr.push(arr[i] % 3)
  }
  return newArr
}

console.log(mixedData(hodgepodge1))
console.log(mixedData(hodgepodge2))

//PASSING TEST:
// console.log
//     [ 2, 0, -1, 0 ]
//       at Object.log (code-challenges.test.js:105:9)
//   console.log
//     [ 2, 1, -1 ]
//       at Object.log (code-challenges.test.js:106:9)
//  PASS  ./code-challenges.test.js
//   mixedData


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe( "sum3", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
  expect (sum3(cubeAndSum1)).toEqual(99)
  expect (sum3(cubeAndSum2)).toEqual(1125)
  })
})

//GOOD FAIL:
// FAIL  ./code-challenges.test.js
// sum3
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed
// ● sum3 › takes in an array of numbers and returns the sum of all the numbers cubed
//   ReferenceError: sum3 is not defined


// b) Create the function that makes the test pass.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//PSEUDOCODE:
//Input: An array of numbers
//Output: Number representin the sum of all the numbers in the original array cubed
//Process:
//Created a function called sum3 which takes in an array of numbers and returns the sum of all the numbers cubed
//Use the map method, to create a new array populated with the result of calling a provided function on every element in the calling array.
//Use the reduce method to sum all the elements in an array
//Callback function an use test variables provided


const sum3 = (arr) => {
 return  arr.map(el => el*el*el).reduce((a,b) => a + b, 0)
  }
console.log(sum3(cubeAndSum1))
console.log(sum3(cubeAndSum2))

//PASSING TEST:
// console.log
// 99
// at Object.log (code-challenges.test.js:161:9)
// console.log
// 1125
// at Object.log (code-challenges.test.js:162:9)
// PASS  ./code-challenges.test.js
// sum3

