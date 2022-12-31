class Canvas{
    constructor(){
        this.width = 620;
        this.height = 620;
        this.canvas = document.getElementById("mainCanvas");
    }

    getCanvasContext(){
        return this.canvas.getContext("2d");
    }

}