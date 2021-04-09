function iniciarGuia() {
    window.location.href = "datosGenerador.html";
}

function getBack(page) {
    window.location.href = page + ".html";
}

function guardarDatosGenerador() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var raz_soc = document.getElementById('raz_soc').value;
    var ced_jud = document.getElementById('ced_jud').value;
    var dir_exa = document.getElementById('dir_exa').value;
    var rep_leg = document.getElementById('rep_leg').value;
    var cor_ele = document.getElementById('cor_ele').value;
    var num_tel = document.getElementById('num_tel').value;
    
    if (!espacio_blanco.test(raz_soc) || !espacio_blanco.test(dir_exa) ||
        !espacio_blanco.test(rep_leg) || !espacio_blanco.test(cor_ele) ||
        (isNaN(parseFloat(ced_jud)) && isFinite(ced_jud)) ||
        (isNaN(parseFloat(num_tel)) && isFinite(num_tel))) {
        
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Asegúrese de llenar todos los espacios y de ingresar la información correcta',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

    } else {
        var datos = [raz_soc, ced_jud, dir_exa, rep_leg, cor_ele, num_tel];
        window.localStorage.setItem('datos', datos);
        window.localStorage.setItem('rowC1', 1);
        window.location.href = "cuadro1.html";
    }

}

function createNewRowC1() {
    var rows = parseInt(window.localStorage.getItem('rowC1')) + 1;
    //$('#tablaContenido tr').remove(); // Eliminar contenido de la tabla
    var info =
        '<tr>' +
        '<th>' + '<input type="text" class="form-control" id="tipo_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="fuen_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="number" class="form-control" id="cant_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="cond_alm-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="cond_tra-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="dest_res-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="regs_des-' + rows + '">' + '</th>' +
        '</tr>';
    
    document.getElementById("tablaContenido").innerHTML += info;
    window.localStorage.setItem('rowC1', rows);
}

function guardarCuadro1() {
    //alert(window.localStorage.getItem('datos'));
}