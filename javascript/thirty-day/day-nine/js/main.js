$(document).ready(function(){
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    hamburger_menu.addEventListener("click", () => {
        container.classList.toggle("active");
    });

    $(".logo").click(function(){
        window.location.href = "index.html"
    });
});