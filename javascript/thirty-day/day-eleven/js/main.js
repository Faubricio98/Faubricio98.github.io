$(document).ready(function(){
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let tenths = 0;
    let intervalStopWatch;

    function stopWatch(){
        //$(".stop-watch").html(hours + ":" + minutes + ":" + seconds + ":" + tenths);
        tenths++;
        if(tenths <= 9){
            $(".tenths").html("0" + tenths);
        }else{
            $(".tenths").html(tenths);
        }

        if(tenths == 99){
            tenths = 0;
            seconds++;
        }

        if(seconds <= 9){
            $(".seconds").html("0" + seconds);
        }else{
            $(".seconds").html(seconds);
        }

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }

        if(minutes <= 9){
            $(".minutes").html("0" + minutes);
        }else{
            $(".minutes").html(minutes);
        }

        if(minutes == 60){
            hours++;
            minutes = 0;
        }

        if(hours <= 9){
            $(".hours").html("0" + hours);
        }else{
            $(".hours").html(hours);
        }
    }

    $(".btn-start").click(function(){
        clearInterval(intervalStopWatch);
        intervalStopWatch = setInterval(stopWatch, 10);
    });

    $(".btn-stop").click(function(){
        clearInterval(intervalStopWatch);
    });
    
    $(".btn-reset").click(function(){
        clearInterval(intervalStopWatch);
        hours = 0;
        minutes = 0;
        seconds = 0;
        tenths = 0;
        $(".tenths").html("00");
        $(".seconds").html("00");
        $(".minutes").html("00");
        $(".hours").html("00");
    });

});