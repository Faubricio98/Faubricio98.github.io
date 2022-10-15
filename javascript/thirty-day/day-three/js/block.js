class Block{
    constructor(){
        this.id = 0;
        this.number = 0;
        this.x = 0; // left of div
        this.y = 0; // top of div
        this.row = 0;
        this.col = 0;
        this.size = 0;
    }

    setId(nId){
        this.id = nId;
    }

    getId(){
        return this.id;
    }

    setX(nX){
        this.x = nX;
    }

    getX(){
        return this.x;
    }

    setY(nY){
        this.y = nY;
    }

    getY(){
        return this.y;
    }

    setRow(nRow){
        this.row = nRow;
    }

    getRow(){
        return this.row;
    }

    setCol(nCol){
        this.col = nCol;
    }

    getCol(){
        return this.col;
    }

    setSize(nSize){
        this.size = nSize;
    }

    getSize(){
        return this.size;
    }

    setNumber(numb){
        this.number = numb;
    }

    getNumber(){
        return this.number;
    }

    draw(){
        let block = document.createElement("button");
        block.setAttribute("class", "block");
        block.style.top = this.getY() + "px";
        block.style.left = this.getX() + "px";
        block.style.height = this.getSize() + "px";
        block.style.width = this.getSize() + "px";

        let numb = document.createElement("h1");
        numb.innerText = this.getNumber();

        block.appendChild(numb);

        return block;
    }
}