const array=[
{id: 1, name: 'Amit Kumar', age: 25},
{id: 2, name: 'Rahul Dixit', age: 20},
{id: 3, name: 'Ravi Joshi', age: 55},
{id: 4, name: 'Rohit Verma', age: 35},
{id: 5, name: 'Ajay Jain', age: 17}];
 var adult=array.filter(function(above){
     return above.age >=18;
 });
 console.log(adult);