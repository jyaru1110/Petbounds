function selecUsu() {
    var url = Cookies.get('foto');
    $('#fotoHead').attr('src', url);
    const fileSelector = document.getElementById('file');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
        var enlace = 'http://161.35.132.152:3000/api/foto?nom=' + fileList[0].name + '&cont=' + fileList[0].type;
        $.ajax({
            type: 'GET',
            url: enlace,
            success: response => {
                const formData = new FormData();
                Object.keys(response.data.fields).forEach(key => {
                    formData.append(key, response.data.fields[key]);
                });
                formData.append("file", fileList[0]);
                const xhr = new XMLHttpRequest();
                xhr.open("POST", response.data.url, true);
                xhr.send(formData);
                xhr.onload = function () {
                    if (this.status === 204) {
                        var liga = 'https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name;
                        $('#imagenPerfil').attr('src', liga);
                        console.log('https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name);
                        Cookies.set('foto', liga); 
                    } 
                    else{
                        console.log(this.responseText);
                    }
                };
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
    var correo = Cookies.get('correo');
    var enlace = 'http://161.35.132.152:3000/api/mostrarUsu?correo=' + correo;
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
            var url = Cookies.get('foto');
            $('#imagenPerfil').attr('src', url);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function modUsu() {
    var id = Cookies.get('id');
    var nombre = $('#nom').val();
    var nick = $('#nick').val();
    var nacimiento = $('#fecha').val();
    var url = Cookies.get('foto');
    var enlace = 'http://161.35.132.152:3000/api/modUsu?id=' + id + '&nom=' + nombre + '&pat=null&mat=null&nick=' + nick + '&nac=' + nacimiento + '&foto=' + url;
    $.ajax({
        type: 'PUT',
        url: enlace,
        success: response => {
            location.reload();
        },
        error: function (error) {
            console.log(error);
        }
    });
    return false;
}
function borrarUsu() {
    var correo = Cookies.get('correo');
    var enlace = 'http://161.35.132.152:3000/api/borrarUsu?correo=' + correo;
    $.ajax({
        type: 'DELETE',
        url: enlace,
        success: response => {
            location.href = 'index.html'
        },
        error: function (error) {
            console.log(error);
        }
    });
    return false;
}