var counter = 0;
var colorState = false;
$(document).ready( 
    function asyncLoop() {     
           $('.progreso').val(counter++);
           if (counter <= 100) {
               setTimeout(asyncLoop, 50);
           }           
    },
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
    })
);