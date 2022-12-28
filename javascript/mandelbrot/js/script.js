$(document).ready(function(){
    let canvas = new Canvas();
    let circle = new Circle(300, 205);
    //circle.draw(canvas.getCanvasContext());

    //ANGLE IN RADIANS
    let angle = (360/10) * (Math.PI/180);

    for(let i = 0; i < 10; i++){
        console.log("cos(" + (((360/10) * (Math.PI/180)) * i) + ") = " + (Math.cos(angle * i) + circle.getRadius()));
        console.log("sin(" + (((360/10) * (Math.PI/180)) * i) + ") = " + (Math.sin(angle * i) + circle.getRadius()));
        console.log("-----------------------------------");

        let point = new Point(i, parseInt(Math.cos(angle * i) + circle.getRadius()), Math.sin(angle * i) + circle.getRadius());
        point.draw(canvas.getCanvasContext());
    }

    let point = new Point(0, 100, 100);
    point.draw(canvas.getCanvasContext());
});