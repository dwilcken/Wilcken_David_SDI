//David Wilcken
//13 Aug 15
//Conditional Statements

//Are the Conditions Right for Solo Flight
//A student fly solo flight if the wind is less than 20kts, the visibility 10sm or more and the
//density altitude is below 8,000ft. Other wise a student must fly with an instructor.
//If winds are greater than 30kts, vis lower than 5sm and DA greater than 10000, the student will
//do ground school with the instructor. Also the student cannot fly solo during night hours

var dayOrNight = prompt("What time is it (MIL Time)");
var currentWind = prompt("Enter Current Wind Speed");
var currentvis = prompt("Enter Current Visibility in Statute Miles");
var currentDenAlt = prompt("Enter Current Density Altitude");
var windMaxSolo = 20;
var visMinSolo = 10;
var denAltSolo = 8000;
var dualWind = 30;
var dualVis = 5;
var dualAlt = 10000;
var time;

time = (dayOrNight < 1200) ? "Good morning student!" : "Good evening student!";
    console.log(time);
if(currentWind < windMaxSolo && currentvis > visMinSolo && currentDenAlt < denAltSolo) {
    console.log("You are allowed to fly solo today!");
}else if(currentWind < dualWind && currentvis > dualVis && currentDenAlt < dualAlt) {
    console.log("You may fly with an instructor today.");
}else if(currentWind > dualWind && windMaxSolo || currentvis < dualVis && visMinSolo
    || currentDenAlt > dualAlt && denAltSolo){
    console.log("Go home and study the weather is not good!");
}