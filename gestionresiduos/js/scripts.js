function iniciarGuia() {
    window.sessionStorage.setItem('editPage', -1);
    window.location.href = "datosGenerador.html";
}

function getBack(page) {
    window.location.href = page + ".html";
}

function getBacktoEdit(num) {
    window.sessionStorage.setItem('editPage', num);
    if (num == 0) {
        window.location.href = "datosGenerador.html";
    } else if (num == 1) {
        window.location.href = "cuadro1.html";
    } else if (num == 2) {
        window.location.href = "cuadro2.html";
    } else if (num == 3) {
        window.location.href = "cuadro3.html";
    } else if (num == 4) {
        window.location.href = "cuadro4.html";
    }
}

function alertTipoRes() {
    Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'Por tipo de residuos se refiere a ordinarios, especiales y peligrosos.',
        showConfirmButton: true
    });
}

function alertDestRes() {
    Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'Se debe adjuntar(solo en el formulario oficial) la documentación que comprueba el destino de los residuos que se detallen.',
        showConfirmButton: true
    });
}

function cargarBotonFlotante() {
    document.getElementById('btnGroup').innerHTML = '';
    var info = '';
    var num = window.sessionStorage.getItem('editPage');
    if (window.sessionStorage.getItem('editPage') == 0) {
        info =
            '<div class="col-12 col-md-9">' +
            '<button id="btnBack" class="btn btn-primary" onclick="guardarDatosGenerador()">' +
            '<i class="fi-br-disk"></i> Guardar y volver a respuestas finales </button>' +
            '</div>';
    } else {
        info =
            '<div class="col-12 col-md-9">' +
            '<button id="btnBack" class="btn btn-primary" onclick="guardarCuadro' + num + '()">' +
            '<i class="fi-br-disk"></i> Guardar y volver a respuestas finales </button>' +
            '</div>';
    }
    $('#btnGroup').append(info);
}

function cargarDatos() {
    if (!window.sessionStorage.getItem('datos')) {
        window.location.href = 'index.html';
    }
    //datos del generador
    var dataG = window.sessionStorage.getItem('datos').split('|');
    document.getElementById('raz_soc').innerText = dataG[0];
    document.getElementById('ced_jud').innerText = dataG[1];
    document.getElementById('dir_exa').innerText = dataG[2];
    document.getElementById('rep_leg').innerText = dataG[3];
    document.getElementById('cor_ele').innerText = dataG[4];
    document.getElementById('num_tel').innerText = dataG[5];

    //cuadro 1
    if (!window.sessionStorage.getItem('arrayC1-1')) {
        window.location.href = 'cuadro1.html';
    }
    var rows = window.sessionStorage.getItem('rowC1');
    for (var i = 1; i <= rows; i++) {
        var dataC1 = window.sessionStorage.getItem('arrayC1-' + i).split('|');
        var info =
            '<tr>' +
            '<td>' + '<span>'+ dataC1[0] + '</span>' + '</td>' +
            '<td>' + dataC1[1] + '</td>' +
            '<td>' + dataC1[2] + '</td>' +
            '<td>' + dataC1[3] + '</td>' +
            '<td>' + dataC1[4] + '</td>' +
            '<td>' + dataC1[5] + '</td>' +
            '<td>' + dataC1[6] + '</td>' +
            '</tr>';
        
        $('#contentC1').append(info);
    }

    //cuadro 2
    if (!window.sessionStorage.getItem('arrayC2')) {
        window.location.href = 'cuadro2.html';
    }
    var dataC2 = window.sessionStorage.getItem('arrayC2').split('|');
    var info =
        '<tr>' +
        '<td>Prevención de la fuente</td>' +
        '<td>' + dataC2[0] + '</td>' +
        '<td>' + dataC2[1] + '</td>' +
        '<tr>';
    $('#contentC2').append(info);

    info =
        '<tr>' +
        '<td>Minimización en la generación</td>' +
        '<td>' + dataC2[2] + '</td>' +
        '<td>' + dataC2[3] + '</td>' +
        '<tr>';
    $('#contentC2').append(info);

    info =
        '<tr>' +
        '<td>Reutilización de los residuos</td>' +
        '<td>' + dataC2[4] + '</td>' +
        '<td>' + dataC2[5] + '</td>' +
        '<tr>';
    $('#contentC2').append(info);

    info =
        '<tr>' +
        '<td>Tratamiento</td>' +
        '<td>' + dataC2[6] + '</td>' +
        '<td>' + dataC2[7] + '</td>' +
        '<tr>';
    $('#contentC2').append(info);

    info =
        '<tr>' +
        '<td>Disposición final</td>' +
        '<td>' + dataC2[8] + '</td>' +
        '<td>' + dataC2[9] + '</td>' +
        '<tr>';
    $('#contentC2').append(info);

    //cuadro 3
    if (!window.sessionStorage.getItem('arrayC3-1')) {
        window.location.href = 'cuadro3.html';
    }
    rows = window.sessionStorage.getItem('rowC3');
    for (var i = 1; i <= rows; i++) {
        var dataC3 = window.sessionStorage.getItem('arrayC3-' + i).split('|');
        var info =
            '<tr>' +
            '<td>' + dataC3[0] + '</td>' +
            '<td>' + dataC3[1] + '</td>' +
            '<td>' + dataC3[2] + '</td>' +
            '<td>' + dataC3[3] + '</td>' +
            '<td>' + dataC3[4] + '</td>' +
            '<td>' + dataC3[5] + '</td>' +
            '<td>' + dataC3[6] + '</td>' +
            '</tr>';
        
        $('#contentC3').append(info);
    }

    //cuadro 4
    if (!window.sessionStorage.getItem('arrayC4-1')) {
        window.location.href = 'cuadro4.html';
    }
    rows = window.sessionStorage.getItem('rowC4');
    for (var i = 1; i <= rows; i++) {
        var dataC4 = window.sessionStorage.getItem('arrayC4-' + i).split('|');
        var info =
            '<tr>' +
            '<td>' + dataC4[0] + '</td>' +
            '<td>' + dataC4[1] + '</td>' +
            '<td>' + dataC4[2] + '</td>' +
            '<td>' + dataC4[3] + '</td>' +
            '<td>' + dataC4[4] + '</td>' +
            '<td>' + dataC4[5] + '</td>' +
            '</tr>';
        
        $('#contentC4').append(info);
    }
}