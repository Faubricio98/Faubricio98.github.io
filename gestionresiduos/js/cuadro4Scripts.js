function createNewRowC4() {
    var rows = 1;
    if (parseInt(window.localStorage.getItem('rowC4')) <= 0) {
        window.localStorage.setItem('rowC4', 1);
    } else {
        rows = parseInt(window.localStorage.getItem('rowC4')) + 1;
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
    window.localStorage.setItem('rowC4', rows);
}

function deleteLastRowC4() {
    if (window.localStorage.getItem('rowC4') > 1) {
        $('#' + window.localStorage.getItem('rowC4')).remove();
        var rows = parseInt(window.localStorage.getItem('rowC4'));
        window.localStorage.setItem('rowC4', rows - 1);
        if (window.localStorage.getItem('arrayC4-' + rows)) {
            window.localStorage.removeItem('arrayC4-' + rows);
        }
    }
}

function cargarDatosC4() {
    $('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var rows = parseInt(window.localStorage.getItem('rowC4'));
    if (rows == 1 && !window.localStorage.getItem('arrayC4-1')) {
        window.localStorage.setItem('rowC4', 0);
        createNewRowC4();
    } else {
        var real = rows;
        for (var i = 1; i <= rows; i++) {
            if (!window.localStorage.getItem('arrayC4-' + i)) {
                real--;
            } else {
                var datos = window.localStorage.getItem('arrayC4-' + i).split('|');
                var info =
                    '<tr id="' + i + '">' +
                    '<th>' + '<input type="text" class="form-control" id="act-' + rows + '" value="'+datos[0]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="lib-' + rows + '" value="'+datos[1]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="met-' + rows + '" value="'+datos[2]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="ind-' + rows + '" value="'+datos[3]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="est-' + rows + '" value="'+datos[4]+'">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="obs-' + rows + '" value="'+datos[5]+'">' + '</th>' +
                    '</tr>';

                $('#tablaContenido').append(info);
            }
        }
        window.localStorage.setItem('rowC4', real);
    }
}

function guardarCuadro4() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var continua = 0;
    for (var i = 1; i <= window.localStorage.getItem('rowC4'); i++) {
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
                title: 'Atención',
                text: 'Asegúrese de llenar todos los espacios y de ingresar la información correcta',
                showConfirmButton: true
            });

            //si hay algo mal, el ciclo se cierra y no continua más
            i = window.localStorage.getItem('rowC4') + 10;
            continua = -1;
        } else {
            var arrayC4 = act + '|' + lib + '|' + met + '|' + ind + '|' + est + '|' + obs;
            window.localStorage.setItem('arrayC4-'+i, arrayC4);
        }
    }
    if (continua == 0) {
        window.location.href = "generarPDF.html";
    }
}