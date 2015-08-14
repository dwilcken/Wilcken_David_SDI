//David Wilcken
//13 Aug 15
//Conditional Statements

//Hunting calculator for season and age

var howOld = prompt("Enter your age");
var huntingMonth = prompt("Enter which month you would like to hunt.");
var noHunt = ["December","January","February","March","April","May","June","July"];
var canHunt = ["August", "September", "October", "November"];
var minAge = 17;


if(howOld > minAge && huntingMonth == canHunt){
    console.log("You are old enough and may hunt this month");
}else if(howOld > minAge && huntingMonth == noHunt){
    console.log("Sorry.You are old enough but you cannot during the month selected");
}else if(howOld < minAge && huntingMonth == canHunt){
    console.log("You will need an adult to hunt with you for the month selected");
}else{
    console.log("You will not be able to hunt this month")
}
