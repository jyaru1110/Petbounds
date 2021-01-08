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
    $('.main-adop-gea .linea-gestion button').click(function(){
        $('.edit-mas').css('display','flex');
        $('.main-adop-gea').css('opacity','0.1');
    }),
    $('.edit-mas .botonCerrar').click(function(){
        $('.edit-mas').css('display','none');
        $('.main-adop-gea').css('opacity','1');
    }),
    $('.main-adop-gead .linea-gestion button').click(
        function(){
            $('.main-adop-gead').css('display','none');            
            $('.info-aplicante').css('display','flex');            
        }
    ),
    $('.info-aplicante .icono button').click(
        function () {
            $('.main-adop-gead').css('display','flex');           
            $('.info-aplicante').css('display','none'); 
            $('.info-aplicante-main embed:nth(0)').css('display','none');
    }),
    $('.info-aplicante-main button:nth(0)').click(
        function(){
            $('.info-aplicante-main embed:nth(0)').css('display','flex');
        }
    ),
    $('.info-aplicante-main button:nth(1)').click(
        function(){
            $('.info-aplicante-main embed:nth(1)').css('display','flex');
        }
    ),
    $('.info-aplicante-main button:nth(2)').click(
        function(){
            $('.info-aplicante-main embed:nth(2)').css('display','flex');
        }
    ),
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
        $('.main-adop-gead').css('display','none');
        $('.info-aplicante-main embed:nth(0)').css('display','none');
        $('.info-aplicante').css('display','none'); 
        $('.edit-mas').css('display','none');
        $('.lista-menu li:nth(0)').addClass('boton-menu-gray');
        $('.lista-menu li:nth(1)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
    }),
    $('.lista-menu button:nth(1)').click(function(){
        $('.info-aplicante-main embed:nth(0)').css('display','none');
        $('.info-aplicante').css('display','none'); 
        $('.main-adop-reg').css('display','none');
        $('.main-adop-gea').css('display','flex');
        $('.main-adop-gea').css('opacity','1');
        $('.main-adop-gea').css('flex-direction','column');
        $('.lista-menu li:nth(0)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(1)').addClass('boton-menu-gray');
        $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
    }),
    $('.lista-menu button:nth(2)').click(function(){
        $('.info-aplicante').css('display','none'); 
        $('.info-aplicante-main embed:nth(0)').css('display','none');
        $('.main-adop-reg').css('display','none');
        $('.main-adop-gea').css('display','none');
        $('.main-adop-gead').css('display','flex');
        $('.edit-mas').css('display','none');
        $('.lista-menu li:nth(0)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(1)').removeClass('boton-menu-gray');
        $('.lista-menu li:nth(2)').addClass('boton-menu-gray');
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