class Board{
    constructor(){
        this.board = document.createElement("div");
        this.x = 15; // left of div
        this.y = 15; // top of div
        this.size = 0;
    }

    setSize(nSize){
        this.size = nSize;
    }

    getSize(){
        return this.size;
    }

    draw(){
        this.board.setAttribute("class", "board");
        this.board.style.top = this.y + "px";
        this.board.style.left = this.x + "px";
        this.board.style.height = this.getSize() + "px";
        this.board.style.width = this.getSize() + "px";

        return this.board;
    }

    drawBlocks(blocks){
        for(let i = 0; i < blocks.length; i++){
            for(let j = 0; j < blocks.length; j++){
                this.board.appendChild(blocks[i][j].draw());
            }
        }
    }

    removeBlocks(){
        this.board.remove(this.board.childNodes);
    }
}