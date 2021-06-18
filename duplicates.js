var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
function removeDuplicates(no) {
    return no.filter((value,index) => no.indexOf(value)===index);

}
console.log(removeDuplicates(array));