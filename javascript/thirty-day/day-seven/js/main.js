$(document).ready(function(){
    //GLOBAL
    let measure_name = [];
    let measure_type = ["Length", "Volume", "Weight"];
    let symbol_measure = [];
    //LENGTH
    let length_name = ["Kilometres", "Hectometers", "Dekameters", "Meters", "Decimeters", "Centimeters", "Millimeters"];
    let symbol_length = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
    //VOLUME
    let volume_name = ["Kiloliters", "Hectoliters", "Dekaliters", "Liters", "Deciliters", "Centiliters", "Milliliters"];
    let symbol_volume = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
    //WEIGHT
    let weight_name = ["Kilograms", "Hectograms", "Dekagrams", "Grams", "Decigrams", "Centigrams", "Milligrams"];
    let symbol_weight = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

    measure_name = length_name;
    symbol_measure = symbol_length;

    let select_from = document.getElementById("from-measure");
    let select_to = document.getElementById("to-measure");
    let select_measure = document.getElementById("measure-type");

    changeMeasure();

    for(let i = 0; i < measure_type.length; i++){
        let option = document.createElement("option");
        option.innerText = measure_type[i];
        option.value = i;
        select_measure.appendChild(option);
    }

    $(".measure-type").change(function(){
        switch (this.value) {
            case "1":
                measure_name = volume_name;
                symbol_measure = symbol_volume;
                break;
            case "2":
                measure_name = weight_name;
                symbol_measure = symbol_weight;
                break;
            default:
                measure_name = length_name;
                symbol_measure = symbol_length;
                break;
        }
        changeMeasure();
    });

    function changeMeasure(){
        select_from.innerHTML = "";
        select_to.innerHTML = "";
        for(let i = 0; i < measure_name.length; i++){
            let option_from = document.createElement("option");
            option_from.innerText = measure_name[i] + " (" + symbol_measure[i] + ")";
            option_from.value = symbol_measure[i];
            select_from.appendChild(option_from);
    
            let option_to = document.createElement("option");
            option_to.innerText = measure_name[i] + " (" + symbol_measure[i] + ")";
            option_to.value = symbol_measure[i];
            select_to.appendChild(option_to);
        }
        $(".from-value").val("");
        $(".to-value").val("");
    }

    function convertMeasure(){
        let from_value = $(".from-value").val();
        if(from_value != "" && from_value != null && !isNaN(from_value)){
            let measure_from = $(".from-measure").val();
            let measure_to = $(".to-measure").val();
            if(measure_from == measure_to){ //THERE IS NO CONVERSION
                $(".to-value").val(from_value);
            }else{ //CONVERT
                let index_from = symbol_measure.indexOf(measure_from);
                let index_to = symbol_measure.indexOf(measure_to);
                if(index_from < index_to){ // DIVIDE BY 10
                    let convert_value = from_value * (Math.pow(10, index_to - index_from));
                    $(".to-value").val(convert_value);
                }else{
                    let convert_value = from_value / (Math.pow(10, index_from - index_to));
                    $(".to-value").val(convert_value);
                }
            }
        }else{
            $(".to-value").val("");
        }
    }

    setInterval(convertMeasure);
});