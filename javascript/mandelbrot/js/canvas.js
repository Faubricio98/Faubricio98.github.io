class Canvas{
    constructor(){
        this.width = 600;
        this.height = 400;
        this.canvas = document.getElementById("mainCanvas");
    }

    getCanvasContext(){
        return this.canvas.getContext("2d");
    }

}