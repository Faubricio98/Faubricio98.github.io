$(document).ready(function(){
    //GET CONTAINER AND APPEND BOARD
    let container = document.getElementById("container");
    let board = new Board();
    let numbers = new Map();
    let blocks = [];
    let emptyBlock = null;
    let counter = 1;
    board.setSize(400);
    shuffle(); //ORDER NUMBERS TO RANDOM POSITION
    
    //CREATE BLOCKS
    for(let i = 0; i < 4; i++){
        let lineBlock = [];
        for(let j = 0; j < 4; j++){
            //CREATES A NEW BLOCK
            let block = new Block();
            //SET A RANDOM NUMBER, ROW AND COL FOREACH BLOCK
            let randNum = numbers.get(counter);
            
            block.setId(counter);
            block.setSize(board.getSize()/4);
            block.setX(j * block.getSize());
            block.setY(i * block.getSize());
            block.setRow(i);
            block.setCol(j);
            block.setNumber((i == 3 && j == 3) ? " " : randNum);
            emptyBlock = (i == 3 && j == 3) ? block : null;
            lineBlock.push(block);
            counter++;
        }
        blocks.push(lineBlock);
    }

    board.drawBlocks(blocks);
    container.appendChild(board.draw());

    addEventListener("click", (event) => {
        console.log("x:", event.x, " y:", event.y);
        let mX = event.x;
        let mY = event.y;
        for(let i = 0; i < blocks.length; i++){
            for(let j = 0; j < blocks.length; j++){
                //console.log(blocks[i][j].getNumber()); 
                if((mX >= blocks[i][j].getX() && mX <= (blocks[i][j].getX() + blocks[i][j].getSize()))){
                    if((mY >= blocks[i][j].getY() && mY <= (blocks[i][j].getY() + blocks[i][j].getSize()))){
                        if(blocks[i][j].getNumber() != " "){
                            if(blocks[i][j].getRow() == 0){
                                if(blocks[i][j].getCol() == 0){
                                    moveRigth(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }else if(blocks[i][j].getCol() == 3){
                                    moveLeft(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }else{
                                    moveRigth(blocks[i][j]);
                                    moveLeft(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }
                            }else if(blocks[i][j].getRow() == 1 || blocks[i][j].getRow() == 2){
                                if(blocks[i][j].getCol() == 0){
                                    moveRigth(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }else if(blocks[i][j].getCol() == 3){
                                    moveLeft(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }else{
                                    moveRigth(blocks[i][j]);
                                    moveLeft(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                    moveDown(blocks[i][j]);
                                }
                            }else{
                                if(blocks[i][j].getCol() == 0){
                                    moveRigth(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                }else if(blocks[i][j].getCol() == 3){
                                    moveLeft(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                }else{
                                    moveRigth(blocks[i][j]);
                                    moveLeft(blocks[i][j]);
                                    moveUp(blocks[i][j]);
                                }
                            } 
                        }
                    }
                }
            }
        }
    });

    function moveLeft(block){
        //FIND LEFT BLOCK
        let leftRow = block.getRow();
        let leftCol = block.getCol() - 1;
        
        if(emptyBlock.getRow() == leftRow && emptyBlock.getCol() == leftCol){
            replaceBlocks(block);
        }
    }
    
    function moveRigth(block){
        //FIND RIGTH BLOCK
        let rigthRow = block.getRow();
        let rigthCol = block.getCol() + 1;
        
        if(emptyBlock.getRow() == rigthRow && emptyBlock.getCol() == rigthCol){
            replaceBlocks(block);
        }
    }
    
    function moveUp(block){
        //FIND UP BLOCK
        let upRow = block.getRow() - 1;
        let upCol = block.getCol();
        
        if(emptyBlock.getRow() == upRow && emptyBlock.getCol() == upCol){
            replaceBlocks(block);
        }
    }
    
    function moveDown(block){
        //FIND DOWN BLOCK
        let downRow = block.getRow() + 1;
        let downCol = block.getCol();
        
        if(emptyBlock.getRow() == downRow && emptyBlock.getCol() == downCol){
            replaceBlocks(block);
        }
    }

    function replaceBlocks(block){
        let currNumb = block.getNumber();
        blocks[block.getRow()][block.getCol()].setNumber(" ");
        blocks[emptyBlock.getRow()][emptyBlock.getCol()].setNumber(currNumb);

        numbers.set(block.getId(), " ");
        numbers.set(emptyBlock.getId(), currNumb);
        emptyBlock = block;

        container.removeChild(board.draw());
        board = new Board();
        board.setSize(400);
        board.drawBlocks(blocks);
        container.appendChild(board.draw());
        console.log(blocks);
        console.log(numbers);
    }
    
    function shuffle() {
        for (var a=[],i=0;i<15;++i){
            numbers.set(i+1, i+1);
        }
    
        var tmp, current, top = numbers.size;
        if(top){
            while(--top) {
                current = Math.floor(Math.random() * (top + 1) + 1);
                tmp = numbers.get(current);
                numbers.set(current, numbers.get(top));
                numbers.set(top, tmp);
            }
        }
        numbers.set(16, " ");
    }

    function isGameOver(){
        let isOver = true;
        for(let i = 1; i < numbers.size; i++){
            if(numbers.get(i) != i){
                isOver = false;
                break;
            }
        }
        if(isOver){
            clearInterval(intervalGameOver);
            alert("Finish");
        }
    }

    let intervalGameOver = setInterval(isGameOver);
});