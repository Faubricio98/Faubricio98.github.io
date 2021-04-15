function iniciarGuia() {
    window.location.href = "datosGenerador.html";
}

function getBack(page) {
    window.location.href = page + ".html";
}

function cargarDatos() {
    //datos del generador
    var dataG = window.localStorage.getItem('datos').split('|');
    document.getElementById('raz_soc').innerText = dataG[0];
    document.getElementById('ced_jud').innerText = dataG[1];
    document.getElementById('dir_exa').innerText = dataG[2];
    document.getElementById('rep_leg').innerText = dataG[3];
    document.getElementById('cor_ele').innerText = dataG[4];
    document.getElementById('num_tel').innerText = dataG[5];

    //cuadro 1
    var rows = window.localStorage.getItem('rowC1');
    for (var i = 1; i <= rows; i++) {
        var dataC1 = window.localStorage.getItem('arrayC1-' + i).split('|');
        var info =
            '<tr id="' + rows + '">' +
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
    var dataC2 = window.localStorage.getItem('arrayC2').split('|');
    var info =
        '<td>' + dataC2[0] + '</td>' +
        '<td>' + dataC2[1] + '</td>';
    $('#1').append(info);

    info =
        '<td>' + dataC2[2] + '</td>' +
        '<td>' + dataC2[3] + '</td>';
    $('#2').append(info);

    info =
        '<td>' + dataC2[4] + '</td>' +
        '<td>' + dataC2[5] + '</td>';
    $('#3').append(info);

    info =
        '<td>' + dataC2[6] + '</td>' +
        '<td>' + dataC2[7] + '</td>';
    $('#4').append(info);

    info =
        '<td>' + dataC2[8] + '</td>' +
        '<td>' + dataC2[9] + '</td>';
    $('#5').append(info);

    //cuadro 3
    rows = window.localStorage.getItem('rowC3');
    for (var i = 1; i <= rows; i++) {
        var dataC3 = window.localStorage.getItem('arrayC3-' + i).split('|');
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
}