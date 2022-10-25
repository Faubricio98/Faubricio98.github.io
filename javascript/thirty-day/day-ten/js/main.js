$(document).ready(function(){
    //const apiUrl = "https://random-word-api.herokuapp.com/word?length=7&lang=es";
    const apiUrl = "https://api.api-ninjas.com/v1/randomword";
    let word = "";
    let scrambledWord = "";
    let time = 46;

    function getWord(){
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/randomword',
            contentType: 'application/json',
            success: function(data) {
                word = data["word"].toLowerCase();
                messWord();
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

    function messWord(){
        let letters = word.split("");
        for(let i = 0; i < letters.length; i++){
            let newPosition = Math.floor(Math.random() * (letters.length - 1));
            let tempLetter = letters[i];
            letters[i] = letters[newPosition];
            letters[newPosition] = tempLetter;
        }
        letters.forEach(letter => {
            scrambledWord += letter + " ";
        });
        console.log(scrambledWord);
        $(".scrambled-word").html(scrambledWord);
    }

    function countDown(){
        time--;
        $(".timer").html(time);
        time == 0 ?  gameOver() : "";
    }

    function gameOver(){
        clearInterval(intervalCountDown);
        alert("Game Over! The correct word is: " + word);
        $(".change-word").click();
    }

    $(".change-word").click(function(){
        word = "";
        scrambledWord = "";
        $(".scrambled-word").html("Loading...");
        clearInterval(intervalCountDown);
        time = 46;
        getWord();
        intervalCountDown = setInterval(countDown, 1000);
    });

    $(".check-word").click(function(){
        ($(".answer").val()).toLowerCase() == word ? alert("Great! Keep going") : alert("Wrong! The correct word is: " + word);
        $(".change-word").click();
    });

    let intervalCountDown = setInterval(countDown, 1000);

    getWord();
});