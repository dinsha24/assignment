//5. Provided the following  array:
  //  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
  //a. Find the sum, min, and max

  var array= [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
const min = array => array.reduce((x, y) => Math.min(x, y));
const max = array => array.reduce((x, y) => Math.max(x, y));

 
console.log("Min:", min(array));
console.log("Max:", max(array));