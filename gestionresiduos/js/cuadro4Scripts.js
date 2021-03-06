function createNewRowC4() {
    var rows = 1;
    if (parseInt(window.sessionStorage.getItem('rowC4')) <= 0) {
        window.sessionStorage.setItem('rowC4', 1);
    } else {
        rows = parseInt(window.sessionStorage.getItem('rowC4')) + 1;
    }
    
    var info =
        '<tr id="'+rows+'">' +
        '<th>' + '<input type="text" class="form-control" id="act-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="lib-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="met-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="ind-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="est-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="obs-' + rows + '">' + '</th>' +
        '</tr>';
    
    $('#tablaContenido').append(info);
    window.sessionStorage.setItem('rowC4', rows);
}

function deleteLastRowC4() {
    if (window.sessionStorage.getItem('rowC4') > 1) {
        $('#' + window.sessionStorage.getItem('rowC4')).remove();
        var rows = parseInt(window.sessionStorage.getItem('rowC4'));
        window.sessionStorage.setItem('rowC4', rows - 1);
        if (window.sessionStorage.getItem('arrayC4-' + rows)) {
            window.sessionStorage.removeItem('arrayC4-' + rows);
        }
    }
}

function cargarDatosC4() {
    $('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var rows = parseInt(window.sessionStorage.getItem('rowC4'));
    if (rows == 1 && !window.sessionStorage.getItem('arrayC4-1')) {
        window.sessionStorage.setItem('rowC4', 0);
        createNewRowC4();
    } else {
        var real = rows;
        for (var i = 1; i <= rows; i++) {
            if (!window.sessionStorage.getItem('arrayC4-' + i)) {
                real--;
            } else {
                var datos = window.sessionStorage.getItem('arrayC4-' + i).split('|');
                var info =
                    '<tr id="' + i + '">' +
                    '<th>' + '<input type="text" class="form-control" id="act-' + i + '" value="'+datos[0]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="lib-' + i + '" value="'+datos[1]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="met-' + i + '" value="'+datos[2]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="ind-' + i + '" value="'+datos[3]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="est-' + i + '" value="'+datos[4]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="obs-' + i + '" value="'+datos[5]+'">' + '</th>' +
                    '</tr>';

                $('#tablaContenido').append(info);
            }
        }
        window.sessionStorage.setItem('rowC4', real);
    }
}

function guardarCuadro4() {
    var espacio_blanco = /[a-z]/i;  //Expresi??n regular
    var continua = 0;
    for (var i = 1; i <= window.sessionStorage.getItem('rowC4'); i++) {
        var act = document.getElementById('act-' + i).value;
        var lib = document.getElementById('lib-' + i).value;
        var met = document.getElementById('met-' + i).value;
        var ind = document.getElementById('ind-' + i).value;
        var est = document.getElementById('est-' + i).value;
        var obs = document.getElementById('obs-' + i).value;

        if (!espacio_blanco.test(act) ||
            !espacio_blanco.test(lib) ||
            !espacio_blanco.test(met) ||
            !espacio_blanco.test(ind) ||
            !espacio_blanco.test(est) ||
            !espacio_blanco.test(obs)) {
            
            Swal.fire({
                icon: 'warning',
                title: 'Atenci??n',
                text: 'Aseg??rese de llenar todos los espacios y de ingresar la informaci??n correcta',
                showConfirmButton: true
            });

            //si hay algo mal, el ciclo se cierra y no continua m??s
            i = window.sessionStorage.getItem('rowC4') + 10;
            continua = -1;
        } else {
            var arrayC4 = act + '|' + lib + '|' + met + '|' + ind + '|' + est + '|' + obs;
            window.sessionStorage.setItem('arrayC4-'+i, arrayC4);
        }
    }
    if (continua == 0) {
        if (window.sessionStorage.getItem('editPage') == 4) {
            window.sessionStorage.setItem('editPage', -1);
            window.location.href = "generarPDF.html#cuadro-4";
        } else {
            window.location.href = "generarPDF.html";
        }
    }
}