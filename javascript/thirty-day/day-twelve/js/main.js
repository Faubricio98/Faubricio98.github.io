$(document).ready(function(){
    $(".input-glitch").keyup(function(){
        let glitch = "<span aria-hidden='true'> "+ $(this).val() +" </span> "+ $(this).val() +" <span aria-hidden='true'> "+ $(this).val() +" </span>";
        $(".glitch").html(glitch);
    });
});