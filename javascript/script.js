var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("sac1");
    var dots = document.getElementsByClassName("w3-badge");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("black", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " black";
}
function envioArch(idIn, strDoc) {
    const fileSelector = document.getElementById(idIn);
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
        var enlace = 'https://petlimits.xyz/api/foto?nom=' + fileList[0].name.replace(/\s/g, '') + '&cont=' + fileList[0].type;
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
                        var liga = 'https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name.replace(/\s/g, '');
                        //$('#imagenMas').attr('src', liga);
                        console.log('https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name.replace(/\s/g, ''));
                        Cookies.set(strDoc, liga);
                    }
                    else {
                        console.log(this.responseText);
                    }
                };
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
}

function envioFoto(idIn, strImg) {
    const fileSelector = document.getElementById(idIn);
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
        var enlace = 'https://petlimits.xyz/api/foto?nom=' + fileList[0].name.replace(/\s/g, '') + '&cont=' + fileList[0].type;
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
                        var liga = 'https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name.replace(/\s/g, '');
                        $(strImg).attr('src', liga);
                        console.log('https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name.replace(/\s/g, ''));
                        Cookies.set('FotoModMas', liga);
                    }
                    else {
                        console.log(this.responseText);
                    }
                };
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
}
function adoptame(n) {
    localStorage.setItem('idSel', n);
    var x = document.getElementById(n);
    x.style.display = "block";
    var idOf = 'id_of' + n;
    var comp_dom = "comp_dom" + n;
    var comp_pago = "comp_pago" + n;
    envioArch(idOf, 'idOf');
    envioArch(comp_dom, 'comp_dom');
    envioArch(comp_pago, 'comp_pago');
}
function ver(n) {
    var x = document.getElementById(n);
    x.style.display = "flex";
    localStorage.setItem('idSelVer', n);
    var id = 'fileMod' + n;
    var foto = '#foto' + n;
    envioFoto(id, foto);
    //x.style.display="flex";
}
function verSolicitante(n) {
    var id = "id" + n;
    var x = document.getElementById(id);
    x.style.display = "flex";
}

function rechazarSol(n) {
    var enlace = 'https://petlimits.xyz/api/borrarSol?id=' + n;
    $.ajax({
        type: 'DELETE',
        url: enlace,
        success: response => {
            location.reload();
        },
        error: function (error) {
            console.log(error);
        }
    });
}