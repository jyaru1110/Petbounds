function validacionInicio() {
    document.getElementById("errorCo").innerHTML = "";
    document.getElementById("errorCo").innerHTML = "";
    $('#errorContras').css('display','none');
    $('#errorCo').css('display','none');
    var correo = $('#correo').val();
    var cont = 0;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        cont = cont + 1;
    } else {
        document.getElementById("errorCo").innerHTML = "Ingrese correo valido";
        $('#errorCo').css('color','red');
        $('#errorCo').css('display','block');
        $('#errorCo').css('font-size','1rem');
    }
    var contras = $('#contra').val();
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(contras)) {
        cont = cont + 1;
    } else {
        document.getElementById("errorContras").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener may&uacute;sculas, min&uacute;sculas y n&uacute;meros";
        $('#errorContras').css('color','red');
        $('#errorContras').css('display','block');
        $('#errorContras').css('font-size','1rem');
    }
    var enlace = 'http://161.35.132.152/api/inicio?correo=' + correo + '&contra=' + contras;
    if (cont === 2) {
        $.ajax({
            type: 'GET',
            url: enlace,
            success: response => {
                var tipo = response.valido;
                if (tipo == 1){
                    //Cookies.remove('id');
                    //Cookies.remove('correo');
                    Cookies.set('id', response.resultado.ID_Usuario);
                    Cookies.set('correo', response.resultado.Correo_Usuario);
                    Cookies.set('foto', response.resultado.Foto_Perfil);
                    console.log(response);
                    window.location.href = "adopciones.html"; 
                }
                else if (tipo == 2) {
                    //Cookies.remove('id');
                    //Cookies.remove('correo');
                    Cookies.set('id', response.resultado.ID_Organizacion);
                    Cookies.set('correo', response.resultado.Correo_Organizacion);
                    console.log(response);
                    window.location.href = "adopcionOrg.html";
                }
                else if (tipo == 3) {
                    //Cookies.remove('id');
                    //Cookies.remove('correo');
                    Cookies.set('id', response.resultado.ID_Prestador);
                    Cookies.set('correo', response.resultado.Correo_Prestador);
                    console.log(response);
                    window.location.href = "adopciones.html";
                }
                else if (tipo == 0){
                    $('#contra').val() = '';
                    document.getElementById("errorContras").innerHTML = "Contraseña incorrecta";
                    $('#errorCo').css('display','block');
                    $('#errorCo').css('color','red');
                    $('#errorCo').css('font-size','1em');
                }
                else if (tipo == 4){
                    document.getElementById("errorCo").innerHTML = "No existe cuenta";
                    $('#errorCo').css('color','red');
                    $('#errorCo').css('display','block');
                    $('#errorCo').css('font-size','1rem');
                }
            },
            error: function(error){
                if (error.responseJSON.valido == 4){
                    document.getElementById("errorCo").innerHTML = "No existe cuenta";
                    $('#errorCo').css('color','red');
                    $('#errorCo').css('display','block');
                    $('#errorCo').css('font-size','1rem');
                }
            }
        });
        return false;
    } else {
        return false;
    }
}