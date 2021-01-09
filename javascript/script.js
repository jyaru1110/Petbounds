var slideIndex = 1;
showDivs(slideIndex);

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
function adoptame(n){
    localStorage.setItem('idSel', n);
    var x = document.getElementById(n);
    x.style.display="block";
}
function ver(n){
    var x = document.getElementById(n);
    x.style.display="flex";
}
function verSolicitante(n){
    var id="id"+n;
    var x = document.getElementById(id);
    x.style.display="flex";
}