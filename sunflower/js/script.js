function clickSunFlower() {
    var aleatorio = Math.floor(Math.random() * (5 - 1)) + 1;
    Swal.fire({
        imageUrl: 'img/agradecimientos/agradecimiento_'+aleatorio+'.svg',
        imageWidth: 500,
        imageHeight: 700,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        html:
            '<div>' +
            '<a class="btn btn-primary" style="text-decoration: none; color: white;" href="img/agradecimientos/agradecimiento_'+aleatorio+'.svg" download>Descargar</a>'+
            '</div>',
    })
}