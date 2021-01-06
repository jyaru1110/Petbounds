var counter = 0;
$(document).ready( 
    function asyncLoop() {     
           $('.progreso').val(counter++);
           if (counter <= 100) {
               setTimeout(asyncLoop, 50);
           }          
});