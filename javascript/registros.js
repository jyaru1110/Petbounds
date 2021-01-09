function regUsuario() {
    console.log('hola');
    //return false;
    var correo = document.getElementById("correo").value;
    var cont = 0;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        document.getElementById("errorCorreo").innerHTML = "";
        cont = cont + 1;
    } else {
        document.getElementById("errorCorreo").innerHTML = "Ingrese correo valido";
        $('#errorCorreo').css('color', 'red');
        $('#errorCorreo').css('display', 'block');
        $('#errorCorreo').css('font-size', '.9rem');
    }
    var nombreCom = document.getElementById("nombre").value;
    if (/[a-zA-z]/.test(nombreCom)) {
        document.getElementById("errorNombre").innerHTML = "";
        cont = cont + 1;
    } else {
        document.getElementById("errorNombre").innerHTML = "Ingrese solo caracteres alfab&eacute;ticos";
        $('#errorNombre').css('color', 'red');
        $('#errorNombre').css('display', 'block');
        $('#errorNombre').css('font-size', '.9rem');
    }
    var contras = document.getElementById("contra").value;
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(contras)) {
        document.getElementById("errorPass").innerHTML = "";
        cont = cont + 1;
    } else {
        document.getElementById("errorPass").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener may&uacute;sculas, min&uacute;sculas y n&uacute;meros";
        $('#errorPass').css('color', 'red');
        $('#errorPass').css('display', 'block');
        $('#errorPass').css('font-size', '.9rem');
    }
    console.log(cont);
    if (cont === 3) {
        var gen = document.getElementById("gen").value;
        var fecha = document.getElementById("fecha").value;
        var nick = document.getElementById("nick").value;
        var enlace = 'http://localhost:3000/api/formUsuario?correo=' + correo + '&contra=' + contras + '&nom=' + nombreCom + '&pat=null' + '&mat=null' + '&nick=' + nick + '&nac=' + fecha + '&gen=' + gen;
        $.ajax({
            type: 'POST',
            url: enlace,
            success: response => {
                var tipo = response.resultado;
                if (tipo == 0) {
                    window.location.href = "acceder.html";
                }
                else if (tipo == 1) {
                    document.getElementById("errorCorreo").innerHTML = "Ya existe cuenta con este correo";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
                else if (tipo == 2) {
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            },
            error: function (error) {
                if (error.responseJSON.resultado == 2) {
                    console.log(error.responseJSON.error);
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            }
        });
        return false;
    } else {
        return false;
    }
}

function regOrg() {
    var correo = document.getElementById("correo").value;
    var cont = 0;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        document.getElementById("errorCorreo").innerHTML = " ";
        cont = cont + 1;
    } else {
        document.getElementById("errorCorreo").innerHTML = "Ingrese correo valido";
        $('#errorCorreo').css('color', 'red');
        $('#errorCorreo').css('display', 'block');
        $('#errorCorreo').css('font-size', '.9rem');
    }
    var contras = document.getElementById("contra").value;
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(contras)) {
        document.getElementById("errorContra").innerHTML = " ";
        cont = cont + 1;
    } else {
        document.getElementById("errorContra").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener may&uacute;sculas, min&uacute;sculas y n&uacute;meros";
        $('#errorContra').css('color', 'red');
        $('#errorContra').css('display', 'block');
        $('#errorContra').css('font-size', '.9rem');
    }
    var tele = document.getElementById("tel").value;
    if (/^\d{10}$/.test(tele)) {
        document.getElementById("errorTel").innerHTML = " ";
        cont = cont + 1;
    } else {
        document.getElementById("errorTel").innerHTML = "Ingrese solo 10 d&iacute;gitos";
        $('#errorTel').css('color', 'red');
        $('#errorTel').css('display', 'block');
        $('#errorTel').css('font-size', '.9rem');
    }
    if (cont === 3) {
        var org = document.getElementById("org").value;
        var pag = document.getElementById("pag").value;
        var enlace = 'http://localhost:3000/api/formOrg?correo=' + correo + '&contra=' + contras + '&nom=' + org + '&tel=' + tele + '&pag=' + pag;
        $.ajax({
            type: 'POST',
            url: enlace,
            success: response => {
                var tipo = response.resultado;
                if (tipo == 0) {
                    window.location.href = "acceder.html";
                }
                else if (tipo == 1) {
                    document.getElementById("errorCorreo").innerHTML = "Ya existe cuenta con este correo";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
                else if (tipo == 2) {
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            },
            error: function (error) {
                if (error.responseJSON.resultado == 2) {
                    console.log(error.responseJSON.error);
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            }
        });
        return false;
    } else {
        return false;
    }
}

function regNeg() {
    var correo = document.getElementById("correo").value;
    var cont = 0;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        cont = cont + 1;
        document.getElementById("errorCorreo").innerHTML = " ";
    } else {
        document.getElementById("errorCorreo").innerHTML = "Ingrese correo valido";
        $('#errorCorreo').css('color', 'red');
        $('#errorCorreo').css('display', 'block');
        $('#errorCorreo').css('font-size', '.9rem');
    }
    var contras = document.getElementById("contra").value;
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(contras)) {
        cont = cont + 1;
        document.getElementById("errorContra").innerHTML = " ";
    } else {
        document.getElementById("errorContra").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener may&uacute;sculas, min&uacute;sculas y n&uacute;meros";
        $('#errorContra').css('color', 'red');
        $('#errorContra').css('display', 'block');
        $('#errorContra').css('font-size', '.9rem');
    }
    var tele = document.getElementById("tel").value;
    if (/^\d{10}$/.test(tele)) {
        cont = cont + 1;
        document.getElementById("errorTel").innerHTML = " ";
    } else {
        document.getElementById("errorTel").innerHTML = "Ingrese solo 10 d&iacute;gitos";
        $('#errorTel').css('color', 'red');
        $('#errorTel').css('display', 'block');
        $('#errorTel').css('font-size', '.9rem');
    }
    if (cont === 3) {
        var neg = document.getElementById("neg").value;
        var ubi = document.getElementById("dir").value;
        var enlace = 'http://localhost:3000/api/formNeg?correo=' + correo + '&contra=' + contras + '&nom=' + neg + '&tel=' + tele + '&ubi=' + ubi;
        $.ajax({
            type: 'POST',
            url: enlace,
            success: response => {
                var tipo = response.resultado;
                if (tipo == 0) {
                    window.location.href = "acceder.html";
                }
                else if (tipo == 1) {
                    document.getElementById("errorCorreo").innerHTML = "Ya existe cuenta con este correo";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
                else if (tipo == 2) {
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            },
            error: function (error) {
                if (error.responseJSON.resultado == 2) {
                    console.log(error.responseJSON.error);
                    document.getElementById("errorCorreo").innerHTML = "Ha ocurrido un error";
                    $('#errorCorreo').css('color', 'red');
                    $('#errorCorreo').css('display', 'block');
                    $('#errorCorreo').css('font-size', '.9rem');
                }
            }
        });
        return false;
    } else {
        return false;
    }
}

function regMas() {
    var nombre = document.getElementById("nom").value;
    var raza = document.getElementById("raza").value;
    var edad = document.getElementById("edad").value;
    var desc = document.getElementById("desc").value;
    var tipo = document.getElementById("tipo").value;
    var id = Cookies.get('id');
    var foto = Cookies.get('fotoMas');
    if (/[a-zA-z]/.test(nombre) && /[a-zA-z]/.test(raza)) {
        var enlace = 'http://localhost:3000/api/altaMas?id=' + id + '&tipo=' + tipo + '&raza=' + raza + '&edad=' + edad + '&hist=' + desc + '&nom=' + nombre + '&foto=' + foto;
        $.ajax({
            type: 'POST',
            url: enlace,
            success: response => {
                var tipo = response.resultado;
                if (tipo) {
                    document.getElementById("avisos").innerHTML = "Mascota registrada correctamente";
                    $('#avisos').css('color', 'green');
                    //$('#avisos').css('display', 'block');
                    $('#avisos').css('font-size', '.9rem');
                    document.getElementById("nom").innerHTML = '';
                    document.getElementById("raza").innerHTML = '';
                    document.getElementById("edad").innerHTML = '';
                    document.getElementById("desc").innerHTML = '';
                    document.getElementById("tipo").innerHTML = '';
                    location.reload();
                }
                else if (tipo == false) {
                    document.getElementById("avisos").innerHTML = "Ocurrió un error";
                    $('#avisos').css('color', 'red');
                    //$('#avisos').css('display', 'block');
                    $('#avisos').css('font-size', '.9rem');
                }
            },
            error: function (error) {
                if (error.responseJSON.resultado == 2) {
                    console.log(error.responseJSON.error);
                    document.getElementById("avisos").innerHTML = "Ha ocurrido un error";
                    $('#avisos').css('color', 'red');
                    //$('#avisos').css('display', 'block');
                    $('#avisos').css('font-size', '.9rem');
                }
            }
        });
        return false;
    }
    else {
        $('#avisos').val() = 'Solo letras en nombre y raza';
        $('#avisos').css('color', 'red');
        //$('#errorCorreo').css('display', 'block');
        $('#avisos').css('font-size', '.9rem');
        return false;
    }
}

function regSol(){
    var id = Cookies.get('id');
    var idSel = localStorage.getItem('idSel');
    var idOf = Cookies.get('idOf');
    var comp_dom = Cookies.get('comp_dom');
    var comp_pago = Cookies.get('comp_pago');
    var enlace = 'http://localhost:3000/api/regSolicitud?usu=' + id + '&mas=' + idSel + '&identi=' + idOf + '&comp=' + comp_dom + '&pago=' + comp_pago;
    $.ajax({
        type: 'POST',
        url: enlace,
        success: response => {
            var tipo = response.resultado;
            if (tipo) {
                location.reload();
            }
            else if (tipo == false) {
                console(response.error);
            }
        },
        error: function (error) {
            if (error.responseJSON.resultado == false) {
                console.log(error.responseJSON.error);
            }
        }
    });
    return false;
}

function modMas(){
    var id = localStorage.getItem('idSelVer');
    var tipo = $('#tipo' + id).text();
    var raza = $('#raza' + id).val();
    console.log(raza);
    var edad = $('#edad' + id).val();
    var hist = $('#desc' + id).val();
    var nom = $('#nom' + id).val();
    var foto = Cookies.get('FotoModMas');
    console.log(foto);
    var enlace = 'http://localhost:3000/api/modMas?id=' + id + '&tipo=' + tipo + '&raz=' + raza + '&edad=' + edad + '&hist=' + hist + '&nom=' + nom + '&foto=' + foto;
    $.ajax({
        type: 'PUT',
        url: enlace,
        success: response => {
            var tipo = response.resultado;
            if (tipo) {
                console.log('si');
                location.reload();
            }
            else if (tipo == false) {
                console(response.error);
            }
        },
        error: function (error) {
            if (error.responseJSON.resultado == false) {
                console.log(error.responseJSON.error);
            }
        }
    });
    return false;
}