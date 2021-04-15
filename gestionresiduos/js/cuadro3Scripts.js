function createNewRowC3() {
    var rows = 1;
    if (parseInt(window.localStorage.getItem('rowC3')) <= 0) {
        window.localStorage.setItem('rowC3', 1);
    } else {
        rows = parseInt(window.localStorage.getItem('rowC3')) + 1;
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
    window.localStorage.setItem('rowC3', rows);
}

function deleteLastRowC3() {
    $('#' + window.localStorage.getItem('rowC3')).remove();
    var rows = parseInt(window.localStorage.getItem('rowC3')) - 1;
    window.localStorage.setItem('rowC3', rows);
}

function guardarCuadro3() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var continua = 0;
    for (var i = 1; i <= window.localStorage.getItem('rowC3'); i++) {
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
            i = window.localStorage.getItem('rowC3') + 10;
            continua = -1;
        } else {
            var arrayC3 = des + '|' + obj + '|' + met + '|' + ind + '|' + act + '|' + rec + '|' + res;
            window.localStorage.setItem('arrayC3-'+i, arrayC3);
        }
    }
    if (continua == 0) {
        window.location.href = "cuadro4.html";
    }
}