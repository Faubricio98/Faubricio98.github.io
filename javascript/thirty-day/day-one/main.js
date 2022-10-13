let speech = speechSynthesis;
let voices = [];
let isSpeaking = true;

$(document).ready(function(){
    let supportMsg = document.getElementById('msg');
    if ('speechSynthesis' in window) {
    	supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
    } else {
    	supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.';
    }
    chargeVoices();
    window.speechSynthesis.onvoiceschanged = function(e) {
        chargeVoices();
    };
    $("#speechBtn").click(function(){
        let text = $("#text").val();
        let selectedVoice = $("#voice");
        if (text == "" || text == null){
            alert("Enter a text");
        }else if(selectedVoice.val() == 0){
            alert("Choose a language");
        }else{
            if(!speech.speaking){
                let utter = new SpeechSynthesisUtterance(text);
                voices.forEach(voice => {
                    if(selectedVoice.name == voice.name){
                        utter.voice = voice;
                    }
                });
                speech.speak(utter);
            }

            if(text.length > 80){
                if(isSpeaking){
                    console.log("Hi")
                    speech.resume();
                    isSpeaking = false;
                }else{
                    console.log("Hi2")
                    speech.pause();
                    isSpeaking = true;
                }
                console.log("Hi3")
                setInterval(() => {
                    if(!speech.paused && speech.speaking){
                        document.getElementById("speechBtn").innerHTML = "Pause Speech";
                    }else if(speech.paused && speech.speaking){
                        document.getElementById("speechBtn").innerHTML = "Resume Speech";
                    }else if(!speech.paused && !speech.speaking){
                        document.getElementById("speechBtn").innerHTML = "Play Speech";
                    }
                });
            }else{
                document.getElementById("speechBtn").innerHTML = "Play Speech";
            }
        }
    });
});

function chargeVoices(){
    voices = speech.getVoices();
    voices.forEach(voice => {
       let option = document.createElement("option");
       option.textContent = voice.name;
       option.value = voice.name;
       option.setAttribute("name", voice.name);
       option.setAttribute("lang", voice.lang);
       $("#voice").append(option)
    });
}