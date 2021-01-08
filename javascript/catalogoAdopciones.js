/*var html = [
    '<div class="main-adop">',
        '<h1 class="tutorial-heading">' + title + '<h1>',
    '</div>'
].join("\n");
$("body").append(html);*/

function mostrarPerros(){
    var htmlS = '';
    var enlace = 'http://localhost:3000/api/mostrarP';
    $.ajax({
        type: 'GET',
        url: enlace,
        success: response => {
            var mascotas = response.resultado
            /*htmlS.push(
                '<div class="catalogo">',
                '<div class="principal-adoptame">',
                    '<div class="titulo-adoptame">',
                        '<h1>Adopta a Penélope</h1>',
                    '</div>',
                    '<div class="contenedor-adoptame">',
                        '<div class="img-carnet">',
                            '<img src="imagenes/perrito-ambar.jpg" alt="">',
                        '</div>',
                        '<div class="formulario-adoptame">',
                            '<form action="">',
                                '<div class="linea-input">',
                                    '<p>Identificación oficial:</p>',
                                    '<input type="file" name="id_of" id="id_of" required/>',
                                    '<label for="id_of">',
                                        '<p>Sube tu Identificación</p>',
                                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">',
                                            '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>',
                                            '<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>',
                                        '</svg> ',
                                    '</label>',
                                '</div>',
                                '<div class="linea-input">',
                                    '<p>Comprobante de domicilio:</p>',
                                    '<input type="file" name="comp_dom" id="comp_dom" required/>',
                                    '<label for="comp_dom">',
                                        '<p>Sube tu comprobante de domicilio</p>',
                                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">',
                                            '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>',
                                            '<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>',
                                        '</svg> ',
                                    '</label>',
                                '</div>',
                                '<div class="linea-input">',
                                    '<p>Comprobante de pago:</p>',
                                    '<input type="file" name="comp_pago" id="comp_pago" required/>',
                                    '<label for="comp_pago">',
                                        '<p>Sube tu comprobante de pago</p>',
                                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">',
                                            '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>',
                                            '<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>',
                                        '</svg> ',
                                    '</label>',
                                '</div>',
                                '<button type="submit" class="botonGE boton2 boton-subir">Subir</button>',
                            '</form>',
                        '</div>',
                        '<button class="botonCerrar">',
                            '<svg xmlns="http://www.w3.org/2000/svg" color="#F07160" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">',
                                '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>',
                            '</svg>',
                        '</button>',
                    '</div>',
                '</div>'
            );*/
            for (var element of mascotas){
                /*htmlS.push(
                    '<div class="carnet">',
                        '<div class="head-carnet">',
                            '<img src="imagenes/patita.png" alt="">',
                            '<p>' + element.Nombre_Organizacion + '</p>',
                        '</div>',
                        '<div class="main-carnet">',
                            '<div class="img-carnet">',
                                '<img src="imagenes/perrito-ambar.jpg" alt="">',
                            '</div>',
                            '<div class="relleno-carnet">\n<div class="texto-carnet">\n<div class="info-mas">\n<div class="nombre-cara">\n<div class="nombre-mas">',
                            '<h5>' + element.Nombre_Mascota + '</h5>',
                            '<a class="conoceme">Adóptame</a>',
                        '</div>',
                        '<div class="carac-mas">\n<ul class="lista-carac">',
                        '<li class="links">' + element.Tipo_Mascota + '</li>',
                        '<li class="links">' + element.Raza_Mascota + '</li>',
                        '<li class="links">' + element.Edad_Mascota + '</li>',
                        '</ul>\n</div>\n</div>\n</div>\n<div class="descripcion-mas">',
                        '<p>' + element.Historia_Mascota + '</p>',
                        '</div>\n</div>\n</div>\n</div>\n</div>'
                )*/
                htmlS = '<div class="carnet">'+
                '<div class="head-carnet">'+
                    '<img src="imagenes/patita.png" alt="">'+
                    '<p>' + element.Nombre_Organizacion + '</p>'+
                '</div>'+
                '<div class="main-carnet">'+
                    '<div class="img-carnet">'+
                        '<img src="imagenes/perrito-ambar.jpg" alt="">'+
                    '</div>'+
                    '<div class="relleno-carnet">\n<div class="texto-carnet">\n<div class="info-mas">\n<div class="nombre-cara">\n<div class="nombre-mas">'+
                    '<h5>' + element.Nombre_Mascota + '</h5>'+
                    '<a class="conoceme">Adóptame</a>'+
                '</div>'+
                '<div class="carac-mas">\n<ul class="lista-carac">'+
                '<li class="links">' + element.Tipo_Mascota + '</li>'+
                '<li class="links">' + element.Raza_Mascota + '</li>'+
                '<li class="links">' + element.Edad_Mascota + '</li>'+
                '</ul>\n</div>\n</div>\n</div>\n<div class="descripcion-mas">'+
                '<p>' + element.Historia_Mascota + '</p>'+
                '</div>\n</div>\n</div>\n</div>\n</div>'
            }
            /*htmlS.push('</div>', '<div class="selectores-org">\n</div>', '</div>', '<script src="javascript/appJQuery.js">');*/
            //htmlS.join('');
            $('.catalogo').append(htmlS);
        },
        error: function(error){
            console.log(error);
        }
    });
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
                for (var element in tipo){
                    
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
}