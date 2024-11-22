


// Declare an empty array;
const techEnd =Array();


// Declare an array with more than 5 number of elements
const num1 =Array(1,2,3,4,5,6,7,8,9);
console.log(num1.length);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Find the length of your array
console.log(nums.length); 

// Get the first item, the middle item and the last item of the array
let mid =Math.floor(nums.length/2);
let last =nums.length-1;
console.log(nums[0],nums[mid],nums[last]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [];
mixedDataTypes.push("one",1,true,"two",2,false, {name: 'join'},"three");
  console.log(mixedDataTypes.length);

  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  console.log(companies);
  console.log(companies.length);
  // Print the first company, middle and last company
  const x = companies.length - 1;
  console.log(companies[0], companies[Math.floor(x/2)], companies[x]);
 