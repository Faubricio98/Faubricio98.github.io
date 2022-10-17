let patterns = [];
let positions = [0,0,0,0];
let password = new Map();

$(document).ready(function(){
    patterns[0] = "1234567890";
    patterns[1] = "@#$%&/()=?![]{};,.-_+:*~";
    patterns[2] = "cdosmgabjklinhefwxtupqrvyz";
    patterns[3] = "AGHIJWEFQRSVBCDXTYNOUKLMPZ";

    $(".btn_generate").click(function(){
        let lastPatt = 0;
        let counterOfReps = 0;
        while(password.size != 12){
            let rand_patt = Math.floor(Math.random() * patterns.length);
            let rand_char = patterns[rand_patt].charAt(Math.floor(Math.random() * patterns[rand_patt].length));
            if(!password.has(rand_char) && lastPatt != rand_patt){
                if(positions[rand_patt] != 3){
                    password.set(rand_char, rand_char);
                    positions[rand_patt] = positions[rand_patt] + 1;
                    counterOfReps = 0;
                    lastPatt = rand_patt;
                }
            }else{
                counterOfReps++;
                if(counterOfReps == 10){
                    console.log("Limit of reps:", counterOfReps);
                    for(let i = 0; i < positions.length; i++){
                        console.log("Pos:", positions);
                        if(positions[i] != 3){
                            console.log("Pos:", i);
                            rand_patt = i;
                            rand_char = patterns[rand_patt].charAt(Math.floor(Math.random() * patterns[rand_patt].length));
                            console.log("Char:", rand_char);
                            while(password.has(rand_char)){
                                rand_char = patterns[rand_patt].charAt(Math.floor(Math.random() * patterns[rand_patt].length));
                                console.log("While:", rand_char);
                            }
                            positions[rand_patt] = positions[rand_patt] + 1;
                            password.set(rand_char, rand_char);
                            console.log("New char:", rand_char);
                        }
                    }
                    counterOfReps = 0;
                }
            }
        }

        let rand_pass = "";
        password.forEach(char => {
            rand_pass = rand_pass + "" + char;
        });
        $(".pass").val(rand_pass);
        password.clear();
        positions = [0,0,0,0];
    });

    $(".btn_copy").click(function(){
        if($(".pass").val() != ""){
            let input = document.getElementById("pass");
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Copied!");
            navigator.clipboard.writeText(input.value);
        }
    });

    function changePositions(rand_pass = ""){
        //CONVERT STRING TO ARRAY
        let rand_array = rand_pass.split("");

        for(let i = 0; i < rand_array.length; i++){
            //GET A NEW POSITION FOR ELEMENT i
            let newPos = Math.floor(Math.random() * rand_array.length);
            while(newPos == i){
                newPos = Math.floor(Math.random() * rand_array.length);
            }
        }

        return rand_pass;
    } 
});