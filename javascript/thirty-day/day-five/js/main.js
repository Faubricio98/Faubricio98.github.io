$(document).ready(function(){
    $(".calculate").click(function(){
        let diff_years = 0; 
        let diff_months = 0; 
        let diff_days = 0;
        let diff_btw_months = 0;
        let date = $(".birthday").val();

        if(date != ""){
            //SPLIT BIRTHDAY DATE
            let bYear =  parseInt(date.split("-")[0]);
            let bMonth = parseInt(date.split("-")[1]);
            let bDay =   parseInt(date.split("-")[2]);

            //CURRENT DATE
            let today = new Date(); // Month - 1
            let cYear =  parseInt(today.getFullYear());
            let cMonth = parseInt(today.getMonth() + 1);
            let cDay =   parseInt(today.getDate());

            //SET TOTAL MONTH DAYS PER MONTH
            let month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            diff_years = cYear - bYear;

            //1. CURR DATE IS HIGHER THAN BIRTH DATE
            if(cMonth > bMonth || (cMonth == bMonth && cDay > bDay)){
                diff_btw_months = cMonth - bMonth;
                if(cMonth == bMonth){
                    console.log("SAME MONTH");
                    diff_days = cDay - bDay;
                }else{
                    console.log("CURR MONTH BIGGER THAN BIRTH MONTH");
                    if(cDay > bDay){
                        diff_months = diff_btw_months;
                        diff_days = cDay - bDay;
                    }else if(cDay < bDay){
                        diff_months = diff_btw_months - 1;
                        diff_days = (month_days[bMonth - 1] - bDay) + cDay;
                    }
                }
            }else if(cMonth < bMonth){ //3. CURR DATE IS LESS THAN BIRTH DATE
                console.log("CURR MONTH LESS THAN BIRTH MONTH");
                diff_years = diff_years - 1;
                diff_btw_months = cMonth + (12 - bMonth);
                if(cDay > bDay){
                    console.log("CURR DAY BIGGER THAN BIRTH DAY");
                    diff_months = diff_btw_months;
                    diff_days = cDay - bDay;
                }else if(cDay < bDay){
                    console.log("CURR DAY LESS THAN BIRTH DAY");
                    diff_months = diff_btw_months - 1;
                    let last_month = (cMonth == 1) ? 11 : cMonth - 2;
                    diff_days = cDay + (month_days[last_month] - bDay) + 1;
                    console.log(last_month, month_days[last_month]);
                }else{
                    console.log("SAME DAY");
                    diff_months = diff_btw_months;
                }
            }

            console.log(bDay, bMonth, bYear);
            console.log(cDay, cMonth, cYear);
            $(".years").val(diff_years);
            $(".months").val(diff_months);
            $(".days").val(diff_days);
        }else{
            alert("Set your birthday");
        }
    });
});