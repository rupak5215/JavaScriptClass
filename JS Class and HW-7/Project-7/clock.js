setInterval(showTime, 1000);

//Defining showTime function

function showTime(){
    //Getting current time and date
    let time = new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    am_pm="AM";
    
    //setting time for 12 Hrs format

    if (hour>=12){
        am_pm="PM";
    }else if (hour==0){
        hour = 12;
        am_pm="AM";
    }

    //ternary operator
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = '<span class = "hour">'+hour+'</span>:' + '<span class = "min">'+min+'</span>:'+'<span class = "sec">'+sec+'</span> ' + '<span class = "am_pm">'+am_pm+'</span>';
    
    // let currentTime = '<span class = "hour">'+hour+'</span>:'+min+':'+ sec + am_pm ;
    //Displaying the time
    document.getElementById('clock').innerHTML = currentTime;
    


    // let hourColor = document.querySelector("#clock");
    // hourColor.style.color="red";

}

showTime();