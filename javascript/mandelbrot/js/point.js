class Point{
    constructor(id, x, y){
        this.id = id;
        this.x = x;
        this.y = y;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setX(x){
        this.x = x;
    }

    getX(){
        return this.x;
    }

    setY(y){
        this.y = y;
    }

    getY(){
        return this.y;
    }

    draw(context){
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + 1, this.y + 1);
        context.stroke();
        //context.beginPath();
        //context.font = "10px Arial";
        //context.fillText(this.id, this.getX() + this.id, this.getY() + this.id);
    }
}