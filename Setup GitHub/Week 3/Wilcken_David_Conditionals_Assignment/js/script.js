//David Wilcken 
//13 Aug 15 
//Conditional Statements 


//Are the Conditions Right for flying?
//A student can fly solo flight if the wind is less than 20kts, the visibility 10sm or more and the 
//density altitude is below 8,000ft. Otherwise a student must fly with an instructor. 
//If winds are greater than 30kts, vis lower than 5sm and DA greater than 10000, the student and
//the instructor will not be flying and the student will go home. 


var dayOrNight = prompt("Enter Time in Military Format");
//This is a var prompt asking the user what time of day it is in military time.

var time;
//This var is for the time that the user inputs.

time = (dayOrNight < 1200) ? "Good morning, lets see if we can fly!" : "Good evening, lets see if we can fly!";
console.log(time);
alert(time);
//This ternary conditional statement decides whether to tell the student good morning or good evening depending on what time they input.

var currentWind = prompt("Enter Current Wind Speed");
//A prompt asking the user for the current winds of the students location.

var currentvis = prompt("Enter Current Visibility in Statute Miles");
//A prompt asking the user for the current visibility of the students location.

var currentDenAlt = prompt("Enter Current Density Altitude");
//A prompt asking the user for the current density altitude of the students location.

var windMaxSolo = 20;
//This var represents the max wind speed a student can fly solo in.

var visMinSolo = 10;
//This var represents the minimum visibility a student can fly solo in.

var denAltSolo = 8000;
//This var represents the max density alt a student can fly solo in.

var dualWind = 30;
//This var represents the max wind speed a a student can fly with an instructor.

var dualVis = 5;
//This var represents the minimum visibility a student and instructor can operate in.

var dualAlt = 10000;
//This var represents the max density alt a student and instructor can operate in.


if(currentWind < windMaxSolo && currentvis > visMinSolo && currentDenAlt < denAltSolo) {
    console.log("You are allowed to fly solo today.");
    alert("You are allowed to fly solo today.");
}else if(currentWind < dualWind && currentvis > dualVis && currentDenAlt < dualAlt) {
    console.log("You may fly with an instructor today.");
    alert("You may fly with an instructor today.");
}else if(currentWind > dualWind && windMaxSolo || currentvis < dualVis && visMinSolo
    || currentDenAlt > dualAlt && denAltSolo){
    console.log("Go home and study. There will be no flights today.");
    alert("Go home and study. There will be no flights today.");
}
//This else if conditional statement goes through the following calculations:  
//1st determines if the conditions are right for solo and will display on console, if not it moves to the next else if.
//2nd determines if the student can still fly but with an instructor on board & displays, if not it moves the next else if.
//3rd determines if the condition are not right for any type of flying & instructs the student to go home.
