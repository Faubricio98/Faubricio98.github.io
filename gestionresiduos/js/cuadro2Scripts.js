function guardarCuadro2() {
    var espacio_blanco = /[a-z]/i;  //Expresión regular
    var espaciosValidos = true;
    for (var i = 1; i <= 10; i++) {
        var dato = document.getElementById('input' + i).value;
        if (!espacio_blanco.test(dato)) {
            espaciosValidos = false;
        }
    }

    if (!espaciosValidos) {
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Asegúrese de llenar todos los espacios y de ingresar la información correcta',
            showConfirmButton: true
        });
    } else {
        var in1 = document.getElementById('input1').value;
        var in2 = document.getElementById('input2').value;
        var in3 = document.getElementById('input3').value;
        var in4 = document.getElementById('input4').value;
        var in5 = document.getElementById('input5').value;
        var in6 = document.getElementById('input6').value;
        var in7 = document.getElementById('input7').value;
        var in8 = document.getElementById('input8').value;
        var in9 = document.getElementById('input9').value;
        var in10 = document.getElementById('input10').value;

        var arrayC2 = [
            [in1, in2],
            [in3, in4],
            [in5, in6],
            [in7, in8],
            [in9, in10]
        ];

        var arrayC2 = in1 + '|' + in2 + '|' + in3 + '|' + in4 + '|' + in5 + '|' + in6 + '|' + in7 + '|' + in8 + '|' + in9 + '|' + in10;
        window.localStorage.setItem('arrayC2', arrayC2);
        window.location.href = 'cuadro3.html';
    }
}