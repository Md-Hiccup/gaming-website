// return Random no.
/*
 function Random() {
 var exists = [],
 randomNumber;
 for (var l = 1; l < 10; l++) {
 do {
 randomNumber = Math.floor(Math.random() * 10);
 } while (exists[randomNumber]);
 exists[randomNumber] = true;
 return randomNumber;
 }
 }*/
var numbers;
function myrandom() {
    return numbers.pop() + "";
}

function resetRandom() {
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers = shuffle(ar);
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


/*
 function generateRan() {
 var max = 10;
 var random = [];
 for (var i = 0; i < max; i++) {
 var temp = Math.floor(Math.random() * max);
 if (random.indexOf(temp) == -1) {
 random.push(temp);
 }
 else
 i--;
 }
 return random;
 }

 */