function createNewRowC3() {
    var rows = 1;
    if (parseInt(window.sessionStorage.getItem('rowC3')) <= 0) {
        window.sessionStorage.setItem('rowC3', 1);
    } else {
        rows = parseInt(window.sessionStorage.getItem('rowC3')) + 1;
    }
    
    var info =
        '<tr id="'+rows+'">' +
        '<th>' + '<input type="text" class="form-control" id="des-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="obj-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="met-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="ind-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="act-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="rec-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="res-' + rows + '">' + '</th>' +
        '</tr>';
    
    $('#tablaContenido').append(info);
    window.sessionStorage.setItem('rowC3', rows);
}

function deleteLastRowC3() {
    if (window.sessionStorage.getItem('rowC3') > 1) {
        $('#' + window.sessionStorage.getItem('rowC3')).remove();
        var rows = parseInt(window.sessionStorage.getItem('rowC3'));
        window.sessionStorage.setItem('rowC3', rows - 1);
        if (window.sessionStorage.getItem('arrayC3-' + rows)) {
            window.sessionStorage.removeItem('arrayC3-' + rows);
        }
    }
}

function guardarCuadro3() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var continua = 0;
    for (var i = 1; i <= window.sessionStorage.getItem('rowC3'); i++) {
        var des = document.getElementById('des-' + i).value;
        var obj = document.getElementById('obj-' + i).value;
        var met = document.getElementById('met-' + i).value;
        var ind = document.getElementById('ind-' + i).value;
        var act = document.getElementById('act-' + i).value;
        var rec = document.getElementById('rec-' + i).value;
        var res = document.getElementById('res-' + i).value;

        if (!espacio_blanco.test(des) || !espacio_blanco.test(obj) || 
            !espacio_blanco.test(met) || !espacio_blanco.test(ind) || 
            !espacio_blanco.test(act) || !espacio_blanco.test(rec) || 
            !espacio_blanco.test(res)) {
            
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: 'Asegúrese de llenar todos los espacios y de ingresar la información correcta',
                showConfirmButton: true
            });

            //si hay algo mal, el ciclo se cierra y no continua más
            i = window.sessionStorage.getItem('rowC3') + 10;
            continua = -1;
        } else {
            var arrayC3 = des + '|' + obj + '|' + met + '|' + ind + '|' + act + '|' + rec + '|' + res;
            window.sessionStorage.setItem('arrayC3-'+i, arrayC3);
        }
    }
    if (continua == 0) {
        if (window.sessionStorage.getItem('editPage') == 3) {
            window.sessionStorage.setItem('editPage', -1);
            window.location.href = "generarPDF.html#cuadro-3";
        } else {
            window.location.href = "cuadro4.html";
        }
    }
}

function cargarDatosC3() {
    $('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var rows = parseInt(window.sessionStorage.getItem('rowC3'));
    if (rows == 1 && !window.sessionStorage.getItem('arrayC3-1')) {
        window.sessionStorage.setItem('rowC3', 0);
        createNewRowC3();
    } else {
        var real = rows;
        for (var i = 1; i <= rows; i++) {
            if (!window.sessionStorage.getItem('arrayC3-' + i)) {
                real--;
            } else {
                var datos = window.sessionStorage.getItem('arrayC3-' + i).split('|');
                var info =
                    '<tr id="' + i + '">' +
                    '<th>' + '<input type="text" class="form-control" id="des-' + i + '" value="' + datos[0] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="obj-' + i + '" value="' + datos[1] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="met-' + i + '" value="' + datos[2] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="ind-' + i + '" value="' + datos[3] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="act-' + i + '" value="' + datos[4] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="rec-' + i + '" value="' + datos[5] + '">' + '</th>' +
                    '<th>' + '<input type="text" class="form-control" id="res-' + i + '" value="' + datos[6] + '">' + '</th>' +
                    '</tr>';

                $('#tablaContenido').append(info);
            }
        }
        window.sessionStorage.setItem('rowC3', real);
    }
}