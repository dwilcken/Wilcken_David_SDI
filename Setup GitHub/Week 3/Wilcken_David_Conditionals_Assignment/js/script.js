//David Wilcken
//13 Aug 15
//Conditional Statements

//Hunting calculator for season and age

var howOld = prompt("Enter your age");
var huntingMonth = prompt("Enter which month you would like to hunt.");
//var noHunt = ['December','January','February','March','April','May','June','July'];
var august = "Archery";
var september = "Crossbow";
var october = "Muzzleloading";
var november = "General Gun";
var minAge = 17;


if(howOld > minAge && huntingMonth === august){
    console.log("Congratulations you are old enough to hunt "+august+" this season " +
        "without an adult")
}else if(huntingMonth === september) {
    console.log("Congratulations you are old enough to hunt "+september+" this season " +
        "without an adult");
}else if(huntingMonth === october){
    console.log("Congratulations you are old enough to hunt "+october+" this season" +
        "without an adult");
}else if (huntingMonth === november){
    console.log("Congratulations you are old enough to hunt "+november+" this season" +
        "without an adult");
}else{
    console.log("Sorry you will need an adult to go hunt with you for all seasons this year");
}
