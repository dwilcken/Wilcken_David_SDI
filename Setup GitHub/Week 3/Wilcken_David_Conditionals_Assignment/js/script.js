//David Wilcken 
//13 Aug 15 
//Conditional Statements 


//Are the Conditions Right for flying?
//A student can fly solo flight if the wind is less than 20kts, the visibility 10sm or more and the 
//density altitude is below 8,000ft. Otherwise a student must fly with an instructor. 

var windMaxSolo = 20;
var visMinSolo = 10;
var denAltSolo = 8000;


var dayOrNight = prompt("Enter Time in Military Format");
    if (dayOrNight == ""){
        dayOrNight = prompt("Please enter the time.");
        console.log("Thank you");
    }
    time = (dayOrNight < 1200) ? "Good morning, lets see if we can fly!" : "Good evening, lets see if we can fly!";
    console.log(time);

var soloTime = prompt("Enter your current solo time.");
    if (soloTime == ""){
        soloTime = prompt("Please enter your solo time.");
        console.log("Thank you.");
    }

var dualTime = prompt("Enter your dual hours flown with an instructor.");
    if (dualTime == ""){
        dualTime = prompt("Please enter dual hours.");
        console.log("Thank you.");
    }
    var totalTime = Number(soloTime) + Number(dualTime);
    console.log("You currently have "+totalTime+" total hours.");

var currentWind = prompt("Enter Current Wind Speed");

    if (currentWind == ""){
        currentWind = prompt("Please enter a wind value");
        console.log("Thank you.");
    }else if(currentWind > windMaxSolo) {
        var windDif = (currentWind - windMaxSolo);
        console.log("Sorry the winds are " +windDif+ "kts over your solo maximum. You may " +
            "still fly with an instructor.");
    }
var currentvis = prompt("Enter Current Visibility in Statute Miles");

    if (currentvis ==""){
        currentvis = prompt("Please enter a visibility value.");
        console.log("Thank you.");
    }else if(currentvis < visMinSolo) {
        var visDif = (visMinSolo - currentvis);
        console.log("Sorry the visibility is " +visDif+ "sm less than your minimum. You may " +
            "still fly with an instructor");
    }
var currentDenAlt = prompt("Enter Current Density Altitude.");

    if (currentDenAlt ==""){
        currentDenAlt = prompt("Please enter density altitude value.");
        console.log("Thank you.");
    }else if(currentDenAlt > denAltSolo) {
        var altDif = (currentDenAlt - denAltSolo);
        console.log("Sorry the density altitude is " + altDif + " feet over you solo maximum. " +
            "You may still fly with an instructor");
    }

if(currentWind < windMaxSolo && currentvis > visMinSolo && currentDenAlt < denAltSolo) {
    console.log("You are allowed to fly solo today.");
}else if(currentWind > windMaxSolo || currentvis < visMinSolo || currentDenAlt > denAltSolo) {
    console.log("Or you may go home and study.");
}

