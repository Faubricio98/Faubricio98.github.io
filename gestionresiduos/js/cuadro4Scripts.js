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
    $('#' + window.localStorage.getItem('rowC4')).remove();
    var rows = parseInt(window.localStorage.getItem('rowC4')) - 1;
    window.localStorage.setItem('rowC4', rows);
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
            var arrayC4 = [act, lib, met, ind, est, obs];
            window.localStorage.setItem('arrayC4-'+i, arrayC4);
        }
    }
    if (continua == 0) {
        window.location.href = "generarPDF.html";
    }
}