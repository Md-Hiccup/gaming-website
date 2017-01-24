/**
 * Created by ask2m on 1/17/2016.
 */

var h = "X";
var c = "O";
var har = [];
var hwon = 0 ;
var cwon = 0 ;
resetRandom();

function human(squa) {

    var sq = getEle(squa.id);
    if (sq.innerText == "") {
        sq.innerHTML = h;
    }
    else {
        alert("This square is already in used!!");
        human(this);
    }
    if (winner(h)) {
        alert("You won");
        reset();
        hwon += 1;
        getEle("hum").innerHTML = hwon ;
    }
    else {
        console.log(squa.id);
        har.push(squa.id);
        if (har.length != 9)
            computer();
    }
}

function computer() {
    do {
        var number = myrandom();
        if (number == 'undefined') {
            resetRandom();
            number = myrandom();
        }
    } while (har.indexOf(number) != -1 && number != 'undefined');
    console.log(number);
    har.push(number);
    getEle(number).innerHTML = c;
    if (winner(c)) {
        alert("Computer won");
        reset();
        cwon += 1;
        getEle("com").innerHTML = cwon ;
    }

}

function getEle(id) {
    console.log(id);
    return document.getElementById(id);

}


function winner(mov) {
    var result = false;
    if (check(1, 2, 3, mov) ||
        check(4, 5, 6, mov) ||
        check(7, 8, 9, mov) ||
        check(1, 5, 9, mov) ||
        check(1, 4, 7, mov) ||
        check(2, 5, 8, mov) ||
        check(3, 6, 9, mov) ||
        check(3, 5, 7, mov)) {
        result = true;
    }

    return result;
}

function check(a, b, c, mov) {
    var result = false;
    if (getEle(a).innerHTML == mov && getEle(b).innerHTML == mov && getEle(c).innerHTML == mov) {
        result = true;
    }
    return result;
}

function reset() {
    for (var i = 1; i < 10; i++) {
        getEle(i).innerHTML = "";
    }
    /*   for (var j = 1; j < 10; j++) {
     har.pop();
     }
     */
    while (har.length > 0) {
        har.pop();
    }
    resetRandom();
}
function newGame() {
    reset();
    hwon = 0;
    cwon = 0;
    getEle("hum").innerHTML=" (0) " ;
    getEle("com").innerHTML=" (0) " ;
}
