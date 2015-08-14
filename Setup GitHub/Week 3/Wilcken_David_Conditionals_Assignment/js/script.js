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

if(howOld > minAge){
    console.log("Congratulations you are old enough to hunt without supervision");
}else if(huntingMonth === august){
    console.log("You can hunt "+august+" this season");
}else if(huntingMonth === september){
    console.log("You can hunt "+september+" this season");
}else if(huntingMonth === october){
    console.log("You can hunt "+october+" this season");
}else if(huntingMonth === november){
    console.log("You can hunt "+november+" this season");
}else{
    console.log("You will need an adult to take you hunting");
}

if(howOld > minAge && huntingMonth === august){
    console.log("Congratulations you are old enough to hunt "+august+" this season " +
        "without an adult")
}