var array =[10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
 function isprime (num) {
     var x =0;
     for(var i=2;i<num-1;i++)
     {
         if(num%i==0)
         {
             x++;
         }
     }
     if(x==0)
     {
         return true;
     }
     else
     
     {
         return false;
     }
 }
 var y=0;
 for(var i=0;i<array.length;i++)
 {
     if(isprime(array[i]))
     {
         y++;
     }
 }
 if(y==array.length)
 {
     console.log("list is full of prime no");

 }
 if(y>0)
 {
     console.log("list has prime no");
 }