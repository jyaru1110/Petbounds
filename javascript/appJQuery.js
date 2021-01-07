var counter = 0;
var colorState = false;
var menuShow = false;
$(document).ready( 
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

    function asyncLoop() {     
           $('.progreso').val(counter++);
           if (counter <= 100) {
               setTimeout(asyncLoop, 50);
           }           
    },
    $('.div-menu span .botonCerrar').click(
        function(){
         menuShow =! menuShow;
         if(menuShow){
             $('.lista-menu').css('display','inline-block');
             $('.div-menu,.lista-menu').css('background-color','#75F06C');
         }else{
             $('.lista-menu').css('display','none');
             $('.div-menu,.lista-menu').css('background-color','white');
        }
     }
    ),
    $('.lista-menu button:nth(0)').click(function(){
        $('.main-adop-reg').css('display','flex');
        $('.main-adop-gea').css('display','none');
        $('.lista-menu li:nth(0)').addClass('boton-menu-gray');
        $('.lista-menu li:nth(1)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
    }),
    $('.lista-menu button:nth(1)').click(function(){
        $('.main-adop-reg').css('display','none');
        $('.main-adop-gea').css('display','flex');
        $('.main-adop-gea').css('flex-direction','column');
        $('.lista-menu li:nth(0)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(1)').addClass('boton-menu-gray');
        $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
    }),
    $('.buttonAction1').click(function(){
        colorState =! colorState;
        if(colorState){
            $('.buttonAction1').css('background-color','#F07160');
        }else{
            $('.buttonAction1').css('background-color','#8BD7FF');
        }
    }),
    $('.buttonAction2').click(function(){
        colorState =! colorState;
        if(colorState){
            $('.buttonAction2').css('background-color','#F07160');
        }else{
            $('.buttonAction2').css('background-color','#8BD7FF');
        }
    }),
    $('.buttonAction3').click(function(){
        colorState =! colorState;
        if(colorState){
            $('.buttonAction3').css('background-color','#F07160');
        }else{
            $('.buttonAction3').css('background-color','#8BD7FF');
        }
    }),
    $('.buttonAction4').click(function(){
        colorState =! colorState;
        if(colorState){
            $('.buttonAction4').css('background-color','#F07160');
        }else{
            $('.buttonAction4').css('background-color','#8BD7FF');
        }
    }),
    $('.conoceme').click(function(){
        $('.carnet').css('opacity','0.1');
        $('.principal-adoptame').css('display','inline');
    }),
    $('.botonCerrar').click(function(){
        $('.carnet').css('opacity','1');
        $('.principal-adoptame').css('display','none');
    }),
);