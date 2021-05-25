function clickSunFlower() {
    Swal.fire({
        imageUrl: 'img/agradecimientos/agradecimiento_4.svg',
        imageWidth: 500,
        imageHeight: 700,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        html:
            '<div>' +
            '<a class="btn btn-primary" style="text-decoration: none; color: white;" href="img/agradecimientos/agradecimiento_4.svg" download>Descargar</a>'+
            '</div>',
    })
}