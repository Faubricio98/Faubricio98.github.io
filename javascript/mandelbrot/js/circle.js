class Circle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 200;
        this.points = new Map();
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getRadius(){
        return this.r;
    }

    setPoints(point){
        this.points.set(point.getId(), point);
    }

    getPoints(){
        return this.points;
    }

    clearPoints(){
        this.points.clear();
    }

    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.stroke();
    }
}