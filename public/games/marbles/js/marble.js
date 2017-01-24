/**
 * Created by ask2m on 2/12/2016.
 */
/**
 * Created by ask2m on 1/27/2016.
 */
var table = document.createElement('table');
var count = 0;
var n;
var oldEvt;
table.setAttribute('id', 'table');
table.setAttribute('border', 2);
table.setAttribute('align', 'center');
table.setAttribute('height', '440pt');
table.setAttribute('width', '50%');

var arr = [];
n = prompt("Enter the matrix length ");

function createTable() {
    for (var i = 0; i < n; i++) {
        var row = getRow();
        for (var j = 0; j < n; j++) {
            if ((i + 1 == Math.ceil(n / 2)) && (j + 1 == Math.ceil(n / 2))) {
                var col = document.createElement('th');
                col.innerHTML = "";
                col.setAttribute('id', count);
                col.addEventListener('click', modify, false);
                col.myId = count;
                col.row = i;
                col.col = j;
            }
            else {
                var col = getCol(count, i, j);

            }
            count++;
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function getRow() {
    var a = document.createElement('tr');
    a.setAttribute('border', 2);
    a.setAttribute('bgcolor', 'white')
    return a;
}

function getCol(val, r, c) {
    var ab = document.createElement('th');
    ab.setAttribute('border', 2);
    ab.setAttribute('bgcolor', 'palered')
//    ab.innerHTML = val;
    ab.setAttribute('class', 'square');
    ab.setAttribute('height', '40px');
    ab.setAttribute('width', '50px');
    ab.setAttribute('id', val);
    ab.addEventListener('click', modify, false);
    ab.myId = val;
    ab.row = r;
    ab.col = c;
    ab.innerHTML = val;
    return ab;
}

function modify(evt) {
    var id = evt.target.myId;
    if (arr.length != 0) {
        console.log(arr);
        var isFound = searchElement(id);
        if (isFound == true) {
            //empty(oldEvt);
            //fill(evt);
            emptyMiddle(oldEvt, evt);
            arr.length = 0;
            console.log("Second Click" + evt.target.myId);
            var msg = document.querySelector("#msg");
            msg.classList.remove("errormsg");
            msg.classList.add("normalmsg");
            msg.innerHTML = "Correct Move";
        }
        else {
            arr.length = 0;
            var msg = document.querySelector("#msg");
            msg.classList.remove("normalmsg");
            msg.classList.add("errormsg");
            msg.innerHTML = "Wrong Move";
            console.log("second Click id Not Found");
        }
    }
    else if (arr.length == 0) {
        searchEmpty(evt);
        oldEvt = evt;
        console.log("first Click" + oldEvt.target.myId);
    }
    else {
        console.log("unknown error" + id);
    }
}


function searchElement(id) {
    // while (arr.length !== -1) {
    for (var i = 0; i < n; i++) {
        if (arr.indexOf(id) === i)
            return true;
    }
    return false;
}


function searchEmpty(evt) {
    var r = evt.target.row;
    var c = evt.target.col;
    if (evt.target.innerHTML != "") {

        //up
        ///down
        ///left  with boundaries
        //right

        if (r - 2 < n && r - 2 >= 0) {
            // alert("( Up ) " + "row : " + (r - 2) + " col : " + j);
            var element = table.getElementsByTagName('tr')[r - 2].childNodes[c];
            if (element.innerHTML == "")
                arr.push(element.myId);
        }
        if (r + 2 < n && r + 2 >= 0) {
            //   alert(" ( Down ) " + "row : " + (r + 2) + " col : " + j);
            var element = table.getElementsByTagName('tr')[r + 2].childNodes[c];
            if (element.innerHTML == "")
                arr.push(element.myId);
        }

        if (c - 2 < n && c - 2 >= 0) {
            // alert(" ( Left ) " + "row : " + i + " col : " + (c - 2));
            var element = table.getElementsByTagName('tr')[r].childNodes[c - 2];
            if (element.innerHTML == "")
                arr.push(element.myId);

        }
        if (c + 2 < n && c + 2 >= 0) {
            // alert(" ( Right ) " + "row : " + i + " col : " + (c + 2));
            var element = table.getElementsByTagName('tr')[r].childNodes[c + 2];
            if (element.innerHTML == "") {
                arr.push(element.myId);
            }
        }
    }
}

function fill(evt) {
    var tab = document.getElementById('table');
    var r = evt.target.row;
    var c = evt.target.col;
    var id = evt.target.myId;
    var roww = tab.getElementsByTagName('tr')[r].childNodes[c];
    roww.innerHTML = id;
    roww.setAttribute('bgcolor', 'palered');
}


function empty(evt) {
    var tab = document.getElementById('table');
    var r = evt.target.row;
    var c = evt.target.col;
    var roww = tab.getElementsByTagName('tr')[r].childNodes[c];
    roww.innerHTML = "";
    roww.setAttribute('bgcolor', 'white');
}


function emptyMiddle(oldEvt, evt) {
    var tab = document.getElementById('table');
    var oldR = oldEvt.target.row;
    var oldC = oldEvt.target.col;
    var newR = evt.target.row;
    var newC = evt.target.col;
    if (oldR == newR) {
        // if Row is same then it only move either in left or right
        //  right movement
        if (oldC < newC) {
            var td = tab.getElementsByTagName('tr')[oldR].childNodes[oldC + 1];
            if (td.innerHTML !== "") {
                td.innerHTML = "";
                td.setAttribute('bgcolor', 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "Wrong Move";
            }

        }
        //  left movement
        else {
            var td = tab.getElementsByTagName('tr')[oldR].childNodes[oldC - 1];
            if (td.innerHTML !== "") {
                td.innerHTML = "";
                td.setAttribute('bgcolor', 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "Wrong Move";
            }
        }
    }
    if (oldC == newC) {
        // if Column is same then it only move either in up or down direction
        //  down movement
        if (oldR < newR) {
            var td = tab.getElementsByTagName('tr')[oldR + 1].childNodes[oldC];
            if (td.innerHTML !== "") {
                td.innerHTML = "";
                td.setAttribute('bgcolor', 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "Wrong Move";
            }
        }
        //   up movement
        else {
            var td = tab.getElementsByTagName('tr')[oldR - 1].childNodes[oldC];
            if (td.innerHTML !== "") {
                td.innerHTML = "";
                td.setAttribute('bgcolor', 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "Wrong Move";
            }
        }
    }
}

function reset() {
    var t = document.getElementById('table');
    for (var i = 0; i < n; i++) {
        t.deleteRow('tr');
    }
    count = 0 ;
    createTable();
}