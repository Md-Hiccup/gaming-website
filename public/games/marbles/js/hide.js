/**
 * Created by ask2m on 2/15/2016.
 */
/**
 * Created by ask2m on 2/12/2016.
 */
/**
 * Created by ask2m on 1/27/2016.
 */
var table = document.createElement('table');
var count = 0;
var n ,totalMoves=0;
var oldEvt, oldId;
table.setAttribute('id', 'table');
table.setAttribute('border', 2);
table.setAttribute('align', 'center');
table.setAttribute('height', '500pt');
table.setAttribute('width', '700pt');

var arr = [] , arr1 = [];
function value() {
   // n = prompt("Enter the matrix length ");
    n=5;
    if(n>21){
        console.log("n = ", n);
        alert("Enter the limit in between 4 to 20")
    }
    else if(n<4){
        console.log("n = ", n);
        alert("Enter the limit in between 4 to 20")
    }
    else{
        createTable();
        count = 1;
    }
}
function createTable() {
   // value();
    for (var i = 0; i < n; i++) {
        var row = getRow();
        for (var j = 0; j < n; j++) {
            if ((i + 1 == Math.ceil(n / 2)) && (j + 1 == Math.ceil(n / 2))) {
                // empty middle matrix element
                var col = document.createElement('th');
               // col.innerHTML = "";
                col.setAttribute('id', count);
                col.addEventListener('click', modify, false);
                col.myId = "";
                col.row = i;
                col.col = j;
             col.id=count;
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
    a.setAttribute('bgcolor', 'white');
    return a;
}

function getCol(val, r, c) {
    var ab = document.createElement('th');
    ab.setAttribute('border', 2);
    ab.setAttribute('bgcolor', 'palered');
//    ab.innerHTML = val;

    ab.setAttribute('class', 'square');
    ab.setAttribute('height', '40px');
    ab.setAttribute('width', '50px');
    ab.setAttribute('id', val);
    ab.addEventListener('click', modify, false);
    ab.id = val;
    ab.row = r;
    ab.col = c;
   // ab.innerHTML = val;
    return ab;
}

function modify(evt) {
    var id = evt.target.id;
    if (arr.length != 0) {
        console.log(arr);
        var isFound = searchElement(id);
        if (isFound == true) {
            //empty(oldEvt);
            //fill(evt);
            emptyMiddle(oldEvt, evt);
            arr.length = 0;
            totalMoves = totalMoves+1;
            console.log("total moves : "+totalMoves);
            console.log("Second Click" + evt.target.id);
            var msg = document.querySelector("#msg");
            msg.classList.remove("errormsg");
            msg.classList.add("normalmsg");
            msg.innerHTML="&ensp;&ensp;Correct Move";
            var score = document.querySelector("#score");
            //score.classList.remove("errormsg");
            score.classList.add("scoreMsg");
            score.innerHTML="&ensp;&ensp;"+totalMoves+"/"+"23";
            if(totalMoves==23){
                alert("Gajab Chachaaa");
            }
        }
        else {
            arr.length = 0;
            var msg = document.querySelector("#msg");
            msg.classList.remove("normalmsg");
            msg.classList.add("errormsg");
            msg.innerHTML = "&ensp;&ensp;Wrong Move";
            console.log("second Click id Not Found");
            if(oldEvt.target.bgColor == 'red'){
                colr=document.getElementById(oldEvt.target.id);
                colr.setAttribute('bgColor','palered');
            }
        }
    }
    else if (arr.length == 0) {
        searchEmpty(evt);
        oldEvt = evt;
        console.log("first Click " + oldEvt.target.id);
        console.log(oldEvt.target);
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
    if (evt.target.myId != "") {
        // for (var i = 1; i <= n; i++) {
        //   for (var j = 1; j <= n; j++) {

        //up
        ///down
        ///left  with boundaries
        //right
        //up

        if (r - 2 < n && r - 2 >= 0) {
            // alert("( Up ) " + "row : " + (r - 2) + " col : " + j);
            // colour(r - 2, j, 'red', id);

            var element = table.getElementsByTagName('tr')[r - 2].childNodes[c];
            var ele = table.getElementsByTagName('tr')[r - 1].childNodes[c];
            if (element.myId == ""){
                if(ele.bgColor != 'white'){
                    console.log("bgcolor : ",ele.bgColor);
                    arr.push(element.id);
                }
            }
        }
        if (r + 2 < n && r + 2 >= 0) {
            //   alert(" ( Down ) " + "row : " + (r + 2) + " col : " + j);
            //     colour(r + 2, j, 'brown', id);
            var element = table.getElementsByTagName('tr')[r + 2].childNodes[c];
            var ele = table.getElementsByTagName('tr')[r + 1].childNodes[c];
            if (element.myId == ""){
                if(ele.bgColor != 'white'){
                    console.log("bgcolor : ",ele.bgColor);
                    arr.push(element.id);
                }
            }
        }

        if (c - 2 < n && c - 2 >= 0) {
            // alert(" ( Left ) " + "row : " + i + " col : " + (c - 2));
            //   colour(i, c - 2, 'green', id);
            var element = table.getElementsByTagName('tr')[r].childNodes[c - 2];
            var ele = table.getElementsByTagName('tr')[r].childNodes[c - 1];
            if (element.myId == "") {
                if (ele.bgColor != 'white'){
                    console.log("bgcolor : ", ele.bgColor);
                arr.push(element.id);
                }
            }
        }
        if (c + 2 < n && c + 2 >= 0) {
            // alert(" ( Right ) " + "row : " + i + " col : " + (c + 2));
            // colour(i, c + 2, 'blue', id);
            var element = table.getElementsByTagName('tr')[r].childNodes[c + 2];
            var ele = table.getElementsByTagName('tr')[r].childNodes[c + 1];
            if (element.myId == ""){
                if(ele.bgColor != 'white'){
                    console.log("bgcolor : ",ele.bgColor);
                    arr.push(element.id);
                }
            }
        }
        if(arr.length == 0){
            oldId = evt.target.id;
            console.log("array Length = 0 "+ oldId);
        }else if(arr.length >0){
            if (evt.target.bgColor == 'palered') {
                colr = document.getElementById(evt.target.id);
                colr.setAttribute('bgColor', 'red');
            }else if (evt.target.bgColor == 'red') {
                colr = document.getElementById(evt.target.id);
                colr.setAttribute('bgColor', 'palered');
            }
        }
    }
}

function fill(evt) {
    var tab = document.getElementById('table');
    var r = evt.target.row;
    var c = evt.target.col;
    var id = evt.target.id;
    var roww = tab.getElementsByTagName('tr')[r].childNodes[c];
    roww.myId = id;
    roww.setAttribute('bgcolor','palered');
}


function empty(evt) {
    var tab = document.getElementById('table');
    var r = evt.target.row;
    var c = evt.target.col;
    var roww = tab.getElementsByTagName('tr')[r].childNodes[c];
    roww.myId = "";
    roww.setAttribute('bgcolor','white');
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
            var td =tab.getElementsByTagName('tr')[oldR].childNodes[oldC + 1];
            if (td.myId !== "") {
                td.myId = "";
                td.setAttribute('bgcolor','white')  ;
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "&ensp;&ensp;Wrong Move";
            }

        }
        //  left movement
        else { var td = tab.getElementsByTagName('tr')[oldR].childNodes[oldC - 1] ;
            if (td.myId !== "") {
                td.myId = "";
                td.setAttribute('bgcolor','white')  ;
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "&ensp;&ensp;Wrong Move";
            }
        }
    }
    if (oldC == newC) {
        // if Column is same then it only move either in up or down direction
        //  down movement
        if (oldR < newR) {
            var td =tab.getElementsByTagName('tr')[oldR + 1].childNodes[oldC];
            if (td.myId !== "") {
                td.myId = "";
                td.setAttribute('bgcolor', 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "&ensp;&ensp;Wrong Move";
            }
        }
        //   up movement
        else {
            var td = tab.getElementsByTagName('tr')[oldR - 1].childNodes[oldC];
            if (td.myId !== "") {
                td.myId = "";
                td.setAttribute('bgcolor' , 'white');
                empty(oldEvt);
                fill(evt);
            }
            else {
                document.getElementById('msg').innerHTML = "&ensp;&ensp;Wrong Move";
            }
        }
    }
}


function resetMarble() {
    var t = document.getElementById('table');
    if(count == 1){
        for (var i = 0; i < n; i++) {
            t.deleteRow('tr');
        }
        count = 0;
        totalMoves = 0 ;
    }
    var msg = document.querySelector("#msg");
    msg.classList.remove("errormsg");
    msg.classList.remove("normalmsg");
   // msg.setAttribute('bgcolor','green');
    msg.innerHTML="&ensp;&ensp;Play Your Turn";
    var score = document.querySelector("#score");
    //score.classList.remove("errormsg");
    score.classList.remove("scoreMsg");
    score.innerHTML="&ensp;&ensp;"+totalMoves+"/"+"23";
    //createTable();
    value();
}