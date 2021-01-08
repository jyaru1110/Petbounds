function fotoLoad(){
    var url = Cookies.get('foto');
    $('#fotoHead').attr('src', url);
}