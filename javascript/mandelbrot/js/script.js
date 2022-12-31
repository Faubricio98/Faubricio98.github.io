$(document).ready(function(){
    let canvas = new Canvas();
    let circle = new Circle(300, 205);
    //circle.draw(canvas.getCanvasContext());

    //ANGLE IN RADIANS
    let number = 240;
    let timeTable = 1.0;

    createPoints(number, timeTable);
    console.log(circle.getPoints());

    //console.log(circle.getPoints());
    let context = canvas.getCanvasContext();
    context.save();

    //for(let i = 0; i < number; i++){
    //    let start = parseFloat(i.toFixed(1));
    //    let finish = parseFloat((timeTable * i).toFixed(1));
    //    console.log("Start: " + start);
    //    console.log("Finish: " + finish);
    //    let pStart = circle.getPoints().get(start);
    //    let pFinish = circle.getPoints().get(finish);
    //    //draw line
    //    context.beginPath();
    //    context.moveTo(pStart.getX(), pStart.getY());
    //    context.lineTo(pFinish.getX(), pFinish.getY());
    //    context.stroke();
    //}

    let interval = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < number; i++){
            let start = parseFloat(i.toFixed(1));
            let finish = parseFloat((timeTable * i).toFixed(1));
            let pStart = circle.getPoints().get(start);
            let pFinish = circle.getPoints().get(finish);
            //draw line
            context.beginPath();
            context.moveTo(pStart.getX(), pStart.getY());
            context.lineTo(pFinish.getX(), pFinish.getY());
            context.stroke();
        }
        timeTable = parseFloat((timeTable + 0.1).toFixed(1));
        //number++;
        if(timeTable >= 51){
            clearInterval(interval);
        }
        createPoints(number, timeTable);
    }, 150);

    function createPoints(number, timeTable){
        circle.clearPoints();
        let angle = (360/number) * (Math.PI/180);

        for(let i = 0; i < number * timeTable; i = i + 0.1){
            i = parseFloat(i.toFixed(1));
            //console.log(i);
            let cos = Math.cos(angle * i);
            let sin = Math.sin(angle * i);
    
            let x = circle.getX() - (cos * circle.getRadius());
            let y = circle.getY() - (sin * circle.getRadius());
    
            let point = new Point(i, x, y);
            point.draw(canvas.getCanvasContext());
            circle.setPoints(point);
        }
    }
});