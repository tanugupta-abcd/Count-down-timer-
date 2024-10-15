


const endDate = new Date("6 Oct, 2024 09:18:00").getTime();
const startDate = new Date().getTime();


// it run function againe within  time given
let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now ;

    // Calculate days, hours, minutes, and seconds
    // 1day== 24*60*60*1000ms

    const oneDayInMillis= (24*60*60*1000);
    const oneHoursInMillis= (60*60*1000);
    const oneMinInMillis= (60*1000);
    const oneSecInMillis= (1000);

    
    
    const days = Math.floor(distancePending / (oneDayInMillis));
    
    const hrs = Math.floor((distancePending % (oneDayInMillis) / (oneHoursInMillis)));
    
    const mins = Math.floor((distancePending % (oneHoursInMillis)) / (oneMinInMillis));
    
    const secs = Math.floor((distancePending % (oneMinInMillis)) / (oneSecInMillis));

    // Populate in UI
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = hrs;
    document.getElementById("m").innerHTML = mins;
    document.getElementById("s").innerHTML = secs;
     
    //calculate width oercentage for progress bar
    const totalDistance = endDate - startDate;
    
    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance+"%";


// negative time is given 
    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width ="100%";
    }

}, 1000);
