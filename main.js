/* 
 * Project 1 Landon Paik.
 */
"use strict";
// add you javascript code here

var form = document.forms["form1"];
//global variable
function colorChange() {
    var color = form["chooseColor"].value;
    document.getElementById("target").style.color=color;
}

function nameChange() {
    var firstName = form["firstName"].value;
    var lastName = form["lastName"].value;
    var name = form["firstName"].value + " " + form["lastName"].value;
    document.getElementById("blankName").innerHTML = name;
    if (firstName == 0 && lastName == 0) {
    // When I put 2 equal signs, it shows an error message "Expected '===' and instead saw '=='". Are we supposed to use 2 equal signs or 3 equal signs?
        name = "{name}";
        document.getElementById("blankName").innerHTML = name;
    }
    else if (firstName == 0 || lastName == 0) {
        name = form["firstName"].value + form["lastName"].value;
        document.getElementById("blankName").innerHTML = name;
    }
}

function alignmentChange() {
    var alignment = form["alignment"].value;
    document.getElementById("target").style.textAlign=alignment;
}

function sizeChange() {
    var size = form["fontSize"].value;
    document.getElementById("target").style.fontSize=size + "%";
}


