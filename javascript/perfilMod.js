function selecUsu() {
    var correo = Cookies.get('correo');
    var enlace = 'http://localhost:3000/api/mostrarUsu?correo=' + correo;
        $.ajax({
            type: 'GET',
            url: enlace,
            success: response => {
                var perfil = response.resultado;
                $('#nom').val(perfil.Nombre_Usuario);
                $('#nick').val(perfil.Nickname_Usuario);
                $('#correo').text(perfil.Correo_Usuario);
                var cadena = perfil.Nacimiento_Usuario;
                cadena = cadena.slice(0, 10);
                $('#fecha').val(cadena);
                var genero = perfil.Genero_Usuario;
                $('#gen').text(genero);
            },
            error: function (error) {
                console.log(error);
            }
        });
}
function modUsu(){
    var id = Cookies.get('id');
    var nombre = $('#nom').val();
    var nick = $('#nick').val();
    var nacimiento = $('#fecha').val();
    console.log($('#foto').val());
    var enlace = 'http://localhost:3000/api/modUsu?id=' + id + '&nom=' + nombre + '&pat=null&mat=null&nick=' + nick + '&nac=' + nacimiento;
    $.ajax({
        type: 'PUT',
        url: enlace,
        success: response => {
            //location.reload();
        },
        error: function (error) {
            console.log(error);
        }
    });
    return false;
}
function borrarUsu(){
    var correo = Cookies.get('correo');
    var enlace = 'http://localhost:3000/api/borrarUsu?correo=' + correo;
    $.ajax({
        type: 'DELETE',
        url: enlace,
        success: response => {
            location.href = 'paginaInicio.html'
        },
        error: function (error) {
            console.log(error);
        }
    });
    return false;
}