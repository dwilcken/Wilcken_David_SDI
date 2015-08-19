//David Wilcken 
//13 Aug 15 
//Conditional Statements 


//Are the Conditions Right for flying?
//A student can fly solo flight if the wind is less than 20kts, the visibility 10sm or more and the 
//density altitude is below 8,000ft. Otherwise a student must fly with an instructor. 

var windMaxSolo = 20;
var visMinSolo = 10;
var denAltSolo = 8000;
var windDif = (currentWind - windMaxSolo);
var visDif = (visMinSolo - currentvis);
var altDif = (currentDenAlt - denAltSolo);



var dayOrNight = prompt("Enter Time in Military Format");
    if (dayOrNight == ""){
        dayOrNight = prompt("Please enter the time.");
        console.log("Thank you")
    }
    time = (dayOrNight < 1200) ? "Good morning, lets see if we can fly!" : "Good evening, lets see if we can fly!";
    console.log(time);

var currentWind = prompt("Enter Current Wind Speed");

    if (currentWind == ""){
        currentWind = prompt("Please enter a wind value");
        console.log("Thank you.");
    }
var currentvis = prompt("Enter Current Visibility in Statute Miles");

    if (currentvis ==""){
        currentvis = prompt("Please enter a visibility value.");
        console.log("Thank you.");
    }
var currentDenAlt = prompt("Enter Current Density Altitude.");

    if (currentDenAlt ==""){
        currentDenAlt = prompt("Please enter density altitude value.");
        console.log("Thank you.");
    }

if(currentWind < windMaxSolo && currentvis > visMinSolo && currentDenAlt < denAltSolo) {
        console.log("You are allowed to fly solo today.");
}else if (currentWind > windMaxSolo) {
        console.log("Sorry the winds are " +windDif+ "kts over your solo maximum. You may " +
        "still fly with an instructor.");
}else if(currentvis < visMinSolo) {
         console.log("Sorry the visibility is " +visDif+ "sm less than your minimum. You may " +
        "still fly with an instructor");
}else if(currentDenAlt > denAltSolo){
        console.log("Sorry the density altitude is "+altDif+" feet over you solo maximum. " +
        "You may still fly with an instructor");
}

