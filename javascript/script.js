var slideIndex = 1;
var colorState = false;
showDivs(slideIndex);

function changeColor(id,i){
    var x = document.getElementsByClassName(id);
    colorState =! colorState;
    if(colorState){
        x[i].style.backgroundColor = "#F07160";
    }else{
        x[i].style.backgroundColor = "#8BD7FF";
    }
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}
                
function currentDiv(n) {
    showDivs(slideIndex = n);
}
                
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("sac1");
    var dots = document.getElementsByClassName("w3-badge");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace( "black", "");
    }
    x[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " black";
}