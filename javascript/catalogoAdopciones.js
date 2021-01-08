function mostrarPerros(){
    var htmlS = '';
    var enlace = 'http://localhost:3000/api/mostrarP';
    $.ajax({
        type: 'GET',
        url: enlace,
        success: response => {
            var mascotas = response.resultado;
            for (var element of mascotas){
                htmlS = '<div class="carnet">'+
                '<div class="head-carnet">'+
                    '<img src="imagenes/patita.png" alt="">'+
                    '<p>' + element.Nombre_Organizacion + '</p>'+
                '</div>'+
                '<div class="main-carnet" id="Caca">'+
                    '<div class="img-carnet">'+
                        '<img src="imagenes/perrito-ambar.jpg" alt="">'+
                    '</div>'+
                    '<div class="relleno-carnet">\n<div class="texto-carnet">\n<div class="info-mas">\n<div class="nombre-cara">\n<div class="nombre-mas">'+
                    '<h5>' + element.Nombre_Mascota + '</h5>'+
                    '<a id="' + element.ID_Mascota + '"' + 'class="conoceme">Adóptame</a>'+
                '</div>'+
                '<div class="carac-mas">\n<ul class="lista-carac">'+
                '<li class="links">' + element.Tipo_Mascota + '</li>'+
                '<li class="links">' + element.Raza_Mascota + '</li>'+
                '<li class="links">' + element.Edad_Mascota + '</li>'+
                '</ul>\n</div>\n</div>\n</div>\n<div class="descripcion-mas">'+
                '<p>' + element.Historia_Mascota + '</p>'+
                '</div>\n</div>\n</div>\n</div>\n</div>';
                $('.catalogo').append(htmlS);
            }
        },
        error: function(error){
            console.log(error);
        }
    });
    console.log(listaMas);
}

function gestPerros(){
    var htmlS = '';
    var idOrg = Cookies.get('id');
    var enlace = 'http://localhost:3000/api/mostrarOrg?id=' + idOrg;
        $.ajax({
            type: 'GET',
            url: enlace,
            success: response => {
                var tipo = response.resultado;
                console.log(tipo[0].Nombre_Mascota);
                for (var ele of tipo){
                    console.log(ele);
                    htmlS = '<div class="linea-gestion">' + 
                                '<div class="linea-imagen">' + 
                                    '<img src="imagenes/perrito-ambar.jpg" alt="">' + 
                                '</div>' + 
                                '<h5>' + ele.Nombre_Mascota + '</h5>' + 
                                '<button class="botonGE boton2">Ver</button>' + 
                            '</div>';
                    $('.main-adop-gea').append(htmlS);
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
}