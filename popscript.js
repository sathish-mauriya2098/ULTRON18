var modal1 = document.getElementById('myModal');
var modal2 = document.getElementById('works');
var modal3 = document.getElementById('iotpresent');
var modal4 = document.getElementById('spider');
var modal5 = document.getElementById('debug');
var modal6 = document.getElementById('dazzle');
var modal7 = document.getElementById('rapid');
var evnt1 = document.getElementById("paper");
var evnt2 = document.getElementById("worksop");
var evnt3 = document.getElementById("iot");
var evnt4 = document.getElementById("webdesign");
var evnt5 = document.getElementById("bug");
var evnt6 = document.getElementById("dazz");
var evnt7 = document.getElementById("coding");
var span1 = document.getElementsByClassName("closes")[0];
var span2 = document.getElementsByClassName("closes1")[0];
var span3 = document.getElementsByClassName("closes2")[0];
var span4 = document.getElementsByClassName("closes3")[0];
var span5 = document.getElementsByClassName("closes4")[0];
var span6 = document.getElementsByClassName("closes5")[0];
var span7 = document.getElementsByClassName("closes6")[0];
evnt1.onclick = function() {
    modal1.style.display = "block";
}
evnt2.onclick = function() {
    modal2.style.display = "block";
}
evnt3.onclick = function() {
    modal3.style.display = "block";
}
evnt4.onclick = function() {
    modal4.style.display = "block";
}
evnt5.onclick = function() {
    modal5.style.display = "block";
}
evnt6.onclick = function() {
    modal6.style.display = "block";
}
evnt7.onclick = function() {
    modal7.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal4.style.display = "none";
    }
    else if (event.target == modal5) {
        modal5.style.display = "none";
    }
    else if (event.target == modal6) {
        modal6.style.display = "none";
    }
    else if (event.target == modal7) {
        modal7.style.display = "none";
    }
}