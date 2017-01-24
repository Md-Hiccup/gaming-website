/**
 * Created by ask2m on 1/20/2016.
 */
function Gamestart() {
    document.turn = "X";
    //var i=1;
    document.getElementById("msg").innerText = "Player : 1 " + document.turn + " gets started ";
}


function switchturn() {
    if (winner(document.turn)) {
        alert("congratulation player " + document.turn + " !  U win . ");
        reset();
    }
    else if (document.turn == "X") {
        document.turn = "O";
        document.getElementById("msg").innerText = "Player 2 : " + document.turn + " turn !!";
    }
    else if (document.turn == "O"){
        document.turn = "X";
        document.getElementById("msg").innerText = "Player 1 : " + document.turn + " turn !!";
    }else{
        alert("Its tie");
    }
}

function reset() {
    for (i = 1; i <= 9; i++) {
        document.getElementById(i).innerText = "";
    }
}

function move(squa) {
    if (squa.innerText == "") {
        squa.innerText = document.turn;
        switchturn();
    }
    else {
        doucument.getElementById("msg").innerText = "This square is already in use ";
    }
}

function winner(mov) {
    var result = false;
    if (check(1, 2, 3, mov) || check(4, 5, 6, mov) || check(7, 8, 9, mov) || check(1, 5, 9, mov)
        || check(1, 4, 7, mov) || check(2, 5, 8, mov) || check(3, 6, 9, mov) || check(3, 5, 7, mov)) {
        result = true;
    }
    return result;
}

function check(a, b, c, move) {
    var result = false;
    if (get(a) == move && get(b) == move && get(c) == move) {
        result = true;
    }
    return result;
}

function get(s) {
    var x = document.getElementById(s).innerText;
    return x;
}





