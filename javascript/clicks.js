$(document).on('click', ".conoceme", function () {
    $('.carnet').css('opacity','0.1');
});
$(document).on('click', ".botonCerrar", function () {
    $('.carnet').css('opacity','1');
    $('.principal-adoptame').css('display','none');
});
$(document).on('click','.buttonAction4',function(){
    colorState =! colorState;
        if(colorState){
            $('.buttonAction4').css('background-color','#F07160');
        }else{
            $('.buttonAction4').css('background-color','#8BD7FF');
        }
    }
)
$(document).on('click','.buttonAction3',function(){
    colorState =! colorState;
        if(colorState){
            $('.buttonAction3').css('background-color','#F07160');
        }else{
            $('.buttonAction3').css('background-color','#8BD7FF');
        }
})
$(document).on('click','.buttonAction2',function(){
    colorState =! colorState;
        if(colorState){
            $('.buttonAction2').css('background-color','#F07160');
        }else{
            $('.buttonAction2').css('background-color','#8BD7FF');
        }
})
$(document).on('click','.buttonAction1',function(){
    colorState =! colorState;
    if(colorState){
        $('.buttonAction1').css('background-color','#F07160');
    }else{
        $('.buttonAction1').css('background-color','#8BD7FF');
    }
})
$(document).on('click','.lista-menu button:nth(2)',function(){
    $('.info-aplicante').css('display','none'); 
    $('.info-aplicante-main embed:nth(0)').css('display','none');
    $('.main-adop-reg').css('display','none');
    $('.main-adop-gea').css('display','none');
    $('.main-adop-gead').css('display','flex');
    $('.edit-mas').css('display','none');
    $('.lista-menu li:nth(0)').removeClass('boton-menu-gray');
    $('.lista-menu li:nth(1)').removeClass('boton-menu-gray');
    $('.lista-menu li:nth(2)').addClass('boton-menu-gray');
})
$(document).on('click','.lista-menu button:nth(1)',function(){
    $('.info-aplicante-main embed:nth(0)').css('display','none');
    $('.info-aplicante').css('display','none'); 
    $('.main-adop-reg').css('display','none');
    $('.main-adop-gead').css('display','none');
    $('.main-adop-gea').css('display','flex');
    $('.main-adop-gea').css('opacity','1');
    $('.main-adop-gea').css('flex-direction','column');
    $('.lista-menu li:nth(0)').removeClass('boton-menu-gray');
    $('.lista-menu li:nth(1)').addClass('boton-menu-gray');
    $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
})
$(document).on('click','.lista-menu button:nth(0)', function(){
    $('.main-adop-reg').css('display','flex');
    $('.main-adop-gea').css('display','none');
    $('.main-adop-gead').css('display','none');
    $('.info-aplicante-main embed:nth(0)').css('display','none');
    $('.info-aplicante').css('display','none'); 
    $('.edit-mas').css('display','none');
    $('.lista-menu li:nth(0)').addClass('boton-menu-gray');
    $('.lista-menu li:nth(1)').removeClass('boton-menu-gray');
    $('.lista-menu li:nth(2)').removeClass('boton-menu-gray');
})
$(document).on('click','.div-menu span .botonCerrar',function(){
    menuShow =! menuShow;
    if(menuShow){
        $('.lista-menu').css('display','inline-block');
        $('.div-menu,.lista-menu').css('background-color','#75F06C');
    }else{
        $('.lista-menu').css('display','none');
        $('.div-menu,.lista-menu').css('background-color','white');
   }
})
$(document).on('click','.main-adop-gea .linea-gestion button',function(){
    $('.main-adop-gea').css('opacity','0.1');
})
$(document).on('click','.edit-mas .botonCerrar',function(){
    $('.edit-mas').css('display','none');
    $('.main-adop-gea').css('opacity','1');
})
$(document).on('click','.main-adop-gead .linea-gestion button',function(){
    $('.main-adop-gead').css('display','none');             
})
$(document).on('click','.info-aplicante .icono button',function () {
    $('.main-adop-gead').css('display','flex');           
    $('.info-aplicante').css('display','none'); 
    $('.info-aplicante-main embed:nth(0)').css('display','none');
})
$(document).on('click','.info-aplicante-main button:nth(0)',function(){
    $('.info-aplicante-main embed:nth(0)').css('display','flex');
    $('#botonCerrar-embeds').css('display','block');
})
$(document).on('click','.info-aplicante-main button:nth(1)',function(){
    $('.info-aplicante-main embed:nth(1)').css('display','flex');
    $('#botonCerrar-embeds').css('display','block');
})
$(document).on('click','.info-aplicante-main button:nth(2)',function(){
    $('.info-aplicante-main embed:nth(2)').css('display','flex');
    $('#botonCerrar-embeds').css('display','block');
})
$(document).on('click','#botonCerrar-embeds',function(){
    $('.info-aplicante-main embed:nth(1)').css('display','none');
    $('.info-aplicante-main embed:nth(0)').css('display','none');
    $('.info-aplicante-main embed:nth(2)').css('display','none');
    $('#botonCerrar-embeds').css('display','none');
})