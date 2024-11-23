// The following is an array of 10 students ages:
// js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
console.log(min);
const max = ages[ages.length - 1];
// const median = Math.floor(ages.legth/2);
let median ;

if (ages.length % 2 === 0) {
  median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}else{
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);
let sum =0 ;
for (var i = 0; i < ages.length; i){
  sum += ages[i];
}
const average = sum / ages.length;