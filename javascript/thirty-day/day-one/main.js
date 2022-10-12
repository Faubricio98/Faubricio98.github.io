let speech = speechSynthesis;
let voices = speech.getVoices();
let isSpeaking = false;

$(document).ready(function(){
    chargeVoices();
    $("#speechBtn").click(function(){
        if(isSpeaking){
            speech.pause();
            isSpeaking = false;
            document.getElementById("speechBtn").innerHTML = "Resume Speech";
        }else if(speech.speaking && !isSpeaking){
            speech.resume();
            isSpeaking = true;
            document.getElementById("speechBtn").innerHTML = "Pause Speech";
        }else{
            let text = $("#text").val();
            let selectedVoice = $("#voice");
            
            if (text == "" || text == null){
                alert("Enter a text");
            }else if(selectedVoice.val() == 0){
                alert("Choose a language");
            }else{
                let utter = new SpeechSynthesisUtterance(text);
                voices.forEach(voice => {
                    if(selectedVoice.name == voice.name){
                        utter.voice = voice;
                    }
                });
                speech.speak(utter);
                isSpeaking = true;
                document.getElementById("speechBtn").innerHTML = "Pause Speech";
            }
        }
    });
});

function chargeVoices(){
    voices.forEach(voice => {
       let option = document.createElement("option");
       option.textContent = voice.name;
       option.value = voice.name;
       option.setAttribute("name", voice.name);
       option.setAttribute("lang", voice.lang);
       $("#voice").append(option)
    });
}