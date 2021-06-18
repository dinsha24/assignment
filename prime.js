const Array=[0,1,2,3,4,5,6,7,8,9,10];
function isPrime(no) {
    for ( let x=2; no > x; x++){
        if (no % x==0) {
            return false;
        }
    }
    return no> 1;

}
console.log(Array.filter(isPrime));