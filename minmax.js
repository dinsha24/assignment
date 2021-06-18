var Numbers = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
var l = Numbers.length;
var max = -Infinity;
var i;
for (i = 0; l > i; i++) {

    if (Numbers[i] > max) {

        max = Numbers[i];

    }

}

console.info(max);



var Numbers = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
var l = Numbers.length;
var min = Infinity;
var i;
for (i = 0; l > i; i++) {

    if (Numbers[i] < min) {

        min = Numbers[i];

    }

}

console.info(min);