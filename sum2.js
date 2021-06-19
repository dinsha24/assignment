//5. Provided the following  array:
  //  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
  //a. Find the sum, var array= [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
var sum= array.reduce(function(a,b){
    return a + b;


},0);
console.log(sum);