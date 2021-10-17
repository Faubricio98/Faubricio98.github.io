function createGalery(dir, img, ext, q) {
    /*
    Llenar la galería de manera dinámica sin ir imágen por imagen.
    Se debe ingresar el nombre de la carpeta, el nombre de las
    imagenes, la extensión y la cantidad de imágenes que hay en 
    la carpeta.

    Esquema básico de imagenes
    <div class="col-lg-3 col-md-4 col-xs-6 col-sm-6 thumb">
        <a href="img/KoswakUsure/koswakusure-1.jpg"
           class="fancybox"
           rel="ligthbox">
            <img src="img/KoswakUsure/koswakusure-1.jpg"
                 class="zoom img-fluid"
                 alt="">
        </a>
    </div>
    */

    for (var i = 1; i <= q; i++) {
        var newImg =
            "<div class='swiper-slide'>" +
            "<img src='assets/img/"+dir+"/"+img+"-"+i+"."+ext+"' class='img-fluid' alt=''></div>"
        document.getElementById("myGalery").innerHTML += newImg;
    }
}