var counter = 0;
var colorState = false;
var menuShow = false;
$(document).ready(
    function asyncLoop() {     
        $('.progreso').val(counter++);
        if (counter <= 100) {
            setTimeout(asyncLoop, 50);
        }           
 }, 
    $(window).resize(function(){
        console.log($(window).width());
        if(screen.width>800){
            $('.div-menu,.lista-menu').css('background-color','white');
            $('.lista-menu').css('display','inline-block');
        }else if (screen.width<=800) {
            $('.lista-menu').css('display','none');
            $('.div-menu').css('background-color','white');
        }
        if($(window).width()>800){
            $('.div-menu,.lista-menu').css('background-color','white');
            $('.lista-menu').css('display','inline-block');
        }else if ($(window).width()<=800) {
            $('.lista-menu').css('display','none');
            $('.div-menu').css('background-color','white');
        }
    }),
    
);