let gw = 700;
let gh = 400;
let bs = 10;
let blockW = 700;
let blockH = 20;
let holeH = 20;
let holeW = 40;
let blocks = [];
let holes = [];
let counter = 0;

$(document).ready(function(){
    let game = document.querySelector('.game');
    let ball = document.querySelector('.ball');

    ball.style.position = 'absolute';
 	ball.style.left = bs + "px";//parseInt(gw/2) + "px";
 	ball.style.top =  (gh - blockH) + 20 + "px";//bs + "px";//parseInt(gh/2) + "px";

    addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowRight":
                ball.style.left = parseInt(ball.style.left) + 10 + "px";
                break;
            case "ArrowLeft":
                ball.style.left = parseInt(ball.style.left) - 10 + "px";
                break;
            case "ArrowDown":
                ball.style.top = parseInt(ball.style.top) + 10 + "px";
                break;
            case "ArrowUp":
                ball.style.top = parseInt(ball.style.top) - 10 + "px";
                break;
            default:
                break;
        }
    });

    function createBlocksAndHoles(){
        //BLOCKS
        let block = document.createElement("div");
        block.className = "block";
        block.setAttribute("state", "hide");
        block.setAttribute("position", counter);
        blocks.push(block);

        //HOLE
        let hole = document.createElement("div");
        hole.style.left = parseInt(Math.floor((Math.random() * (blockW - 50)) + 1)) + "px";
        hole.className = "hole";
        hole.setAttribute("state", "hide");
        hole.setAttribute("position", counter);
        holes.push(hole);

        counter++;

        //game.appendChild(block);
        //game.appendChild(hole);
    }

    function showAndHideBlocksAndHoles(){
        if(blocks.length > 0){
            for (let i = 0; i < blocks.length; i++) {
                if(blocks[i].getAttribute("state") == "hide"){
                    blocks[i].setAttribute("state", "show");
                    holes[i].setAttribute("state", "show");
                    blocks[i].style.top = (gh - blockH) + "px";
                    holes[i].style.top = (gh - holeH) + "px";
                    game.appendChild(blocks[i]);
                    game.appendChild(holes[i]);
                    break;
                }
            }
        }
    }

    function moveBlocksAndHoles(){
        if(blocks.length > 0){
            for(let i = 0; i < blocks.length; i++){
                if(blocks[i].getAttribute("state") == "show"){
                    blocks[i].style.top = (parseInt(blocks[i].style.top) - blockH) + "px";
                    holes[i].style.top = (parseInt(holes[i].style.top) - holeH) + "px";
                }

                if(parseInt(blocks[i].style.top) < -10){
                    blocks[i].setAttribute("state", "destroy");
                }
            }
        }
    }

    function checkBallPosition(){
        let posLeft = parseInt(ball.style.left);
        let posRight = parseInt(ball.style.left) + bs;
        let posTop = parseInt(ball.style.top);
        let posBottom = parseInt(ball.style.top) + bs;

        if(posLeft < 10){
            ball.style.left = 10 + "px";
        }
        if(posRight >= gw){
            ball.style.left = (gw - 20) + "px";
        }
        if(posTop < 10){
            //ball.style.top = 10 + "px";
            alert("Game Over");
            clearInterval(intervalBlockAndHoles);
            clearInterval(intervalshowAndHideBlocksAndHoles);
            clearInterval(intervalmoveBlocksAndHoles);
            clearInterval(intervalCheckBallPosition);
            location.reload();
        }
        
        if(posBottom >= gh){
            ball.style.top = (gh - bs) + "px";
        }
    }

    function overBlockAndDropBall(){
        let topBall = parseInt(ball.style.top);
        for(let i = 0; i < blocks.length; i++){
            if(blocks[i].getAttribute("state") == "show"){
                if(topBall == parseInt(blocks[i].style.top) + bs){
                    console.log("On top");
                    ball.style.top = (parseInt(blocks[i].style.top)) + "px";
                }else{
                    console.log("Dropping");
                    //ball.style.top = (parseInt(ball.style.top) + 1) + "px";
                } 
            }
        }
    }

    let intervalBlockAndHoles = setInterval(createBlocksAndHoles, 200);
    let intervalshowAndHideBlocksAndHoles = setInterval(showAndHideBlocksAndHoles, 1000);
    let intervalmoveBlocksAndHoles = setInterval(moveBlocksAndHoles, 400);
    let intervalCheckBallPosition = setInterval(checkBallPosition);
    let intervaloverBlockAndDropBall = setInterval(overBlockAndDropBall);
});