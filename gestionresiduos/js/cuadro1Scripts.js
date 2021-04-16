function createNewRowC1() {
    var rows = 1;
    if (parseInt(window.localStorage.getItem('rowC1')) <= 0) {
        window.localStorage.setItem('rowC1', 1);
    } else {
        rows = parseInt(window.localStorage.getItem('rowC1')) + 1;
    }
    //$('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var info =
        '<tr id="'+rows+'">' +
        '<th>' + '<input type="text" class="form-control" id="tipo_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="fuen_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="number" class="form-control" id="cant_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="cond_alm-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="cond_tra-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="dest_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="regs_des-' + rows + '">' + '</th>' +
        '</tr>';
    
    $('#tablaContenido').append(info);
    window.localStorage.setItem('rowC1', rows);
}

function deleteLastRowC1() {
    if (window.localStorage.getItem('rowC1') > 1) {
        $('#' + window.localStorage.getItem('rowC1')).remove();
        var rows = parseInt(window.localStorage.getItem('rowC1'));
        window.localStorage.setItem('rowC1', rows - 1);
        if (window.localStorage.getItem('arrayC1-' + rows)) {
            window.localStorage.removeItem('arrayC1-' + rows);
        }
    }
}

function cargarDatosC1() {
    $('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var rows = parseInt(window.localStorage.getItem('rowC1'));
    if (rows == 1 && !window.localStorage.getItem('arrayC1-1')) {
        window.localStorage.setItem('rowC1', 0);
        createNewRowC1();
    } else {
        var real = rows;
        for (var i = 1; i <= rows; i++) {
            if (!window.localStorage.getItem('arrayC1-' + i)) {
                real--;
            } else {
                var datos = window.localStorage.getItem('arrayC1-' + i).split('|');
                var info =
                    '<tr id="' + i + '">' +
                    '<td>' + '<input type="text" class="form-control" id="tipo_res-' + i + '" value="' + datos[0] + '">' + '</td>' +
                    '<td>' + '<input type="text" class="form-control" id="fuen_res-' + i + '" value="' + datos[1] + '">' + '</td>' +
                    '<td>' + '<input type="number" class="form-control" id="cant_res-' + i + '" value="' + datos[2] + '">' + '</td>' +
                    '<td>' + '<input type="text" class="form-control" id="cond_alm-' + i + '" value="' + datos[3] + '">' + '</td>' +
                    '<td>' + '<input type="text" class="form-control" id="cond_tra-' + i + '" value="' + datos[4] + '">' + '</td>' +
                    '<td>' + '<input type="text" class="form-control" id="dest_res-' + i + '" value="' + datos[5] + '">' + '</td>' +
                    '<td>' + '<input type="text" class="form-control" id="regs_des-' + i + '" value="' + datos[6] + '">' + '</td>' +
                    '</tr>';

                $('#tablaContenido').append(info);
            }
        }
        window.localStorage.setItem('rowC1', real);
    }
}

function guardarCuadro1() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var continua = 0;
    for (var i = 1; i <= window.localStorage.getItem('rowC1'); i++) {
        var tipo_res = document.getElementById('tipo_res-' + i).value;
        var fuen_res = document.getElementById('fuen_res-' + i).value;
        var cant_res = document.getElementById('cant_res-' + i).value;
        var cond_alm = document.getElementById('cond_alm-' + i).value;
        var cond_tra = document.getElementById('cond_tra-' + i).value;
        var dest_res = document.getElementById('dest_res-' + i).value;
        var regs_des = document.getElementById('regs_des-' + i).value;

        if (!espacio_blanco.test(tipo_res) || !espacio_blanco.test(fuen_res) ||
            !espacio_blanco.test(cond_alm) || !espacio_blanco.test(cond_tra) ||
            !espacio_blanco.test(dest_res) || !espacio_blanco.test(regs_des) ||
            (isNaN(parseFloat(cant_res)) && isFinite(cant_res))) {
            
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: 'Asegúrese de llenar todos los espacios y de ingresar la información correcta',
                showConfirmButton: true
            });

            //si hay algo mal, el ciclo se cierra y no continua más
            i = window.localStorage.getItem('rowC1') + 10;
            continua = -1;
        } else {
            var arrayC1 = tipo_res +'|'+ fuen_res +'|'+ cant_res +'|'+ cond_alm +'|'+ cond_tra +'|'+ dest_res +'|'+ regs_des;
            window.localStorage.setItem('arrayC1-' + i, arrayC1);
        }
    }
    if (continua == 0) {
        window.location.href = "cuadro2.html";
    }
}