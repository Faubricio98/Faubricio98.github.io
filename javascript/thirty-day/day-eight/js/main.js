$(document).ready(function(){
    let mic_status = false;
    let mic_on = "public/voice-on.png";
    let mic_off = "public/voice-off.png";
    let mic_img = document.getElementById("mic");
    let text_space = document.getElementById("text-speech");
    if("webkitSpeechRecognition" in window){
        let recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        //recognition.interimResults = true;
        recognition.lang = "es-CR";
        console.log(recognition);

        recognition.addEventListener("result", (e) => {
            console.log("On Results");
            text_space.value = e.results[0][0].transcript;
        });

        $(".btn-speech").click(function(){
            if(!mic_status){
                recognition.start();
                console.log("Listening");
            }else{
                recognition.stop();
                console.log("Stop listening");
            }

            mic_img.setAttribute("src", (mic_status ? mic_off : mic_on));
            mic_img.setAttribute("alt", (mic_status ? "Mic Off" : "Mic On"));
            mic_status = mic_status ? false : true;
        });
    }else{
        alert("Sorry, Speech Recognition is not available on your browser");
    }
});