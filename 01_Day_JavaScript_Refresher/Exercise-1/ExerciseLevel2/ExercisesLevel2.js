// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// const web_techs = require("./Web_techs");
// const Webtech = require("./Web_techs");
// const countries = require("./countries");
// console.log(Webtech);
// console.log(countries);

// First remove all the punctuations and change the string to array and count the number of words in the array
let texts = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const word = texts.replace(/[.,]/gi , '').split(" ");
console.log(word);


// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// if (!shoppingCart.includes("Meat")){
//   shoppingCart.push("Meat");
// }
// if (!shoppingCart.includes("Sugar")){
//   shoppingCart.push("Suger");
// }
// for (let i = 0; i < shoppingCart.length; i++) {
  
//   if (shoppingCart[i] === "Honey") {
//     shoppingCart.splice(i, 1);
//   }
//   if (shoppingCart[i] === "Tea") {
//     shoppingCart[i] = "Green Tea";
//   }
// }
// console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// console.log(countries);


// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// console.log(web_techs);

// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Expres

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);