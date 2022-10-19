$(document).ready(function(){

    function countWords(){
        let text = ($(".writeZone").val()).split(" ");
        let length = text.length;
        let qWords = length;//(text[length - 1] == null) || (text[length - 1] == "") || (text[length - 1] == " ") ? length - 1 : length;
        text.forEach(word => {
            if((word == null || word == "") && qWords != 0){
                qWords -= 1;
            }
        });
        $(".words-counter").html(qWords);
    }

    function countChars(){
        let text = ($(".writeZone").val()).split("");
        $(".chars-counter").html(text.length);
    }

    let intervalCountWords = setInterval(countWords);
    let intervalCountChars = setInterval(countChars);
});