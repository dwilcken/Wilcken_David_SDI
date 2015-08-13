/**
 * Created by davidwilcken on 8/13/15.
 */

//stuff your face
//To get in the heavyweight division of the Strawberry Festival's pie eating contest
//you must weigh 250lbs or more. Determine whether an entrant qualifies based on his weight.

var weight = 300;
if(weight <= 250){
    console.log("The competitor needs to gain some weight!");
}else{
    console.log("The competitor qualifies for the heavyweight division");
}

//Last chance for gas
//A driver has to determine if they can make it across the desert with their current fuel.
//They are about to pass the last gas station for the next 200 miles, and they need to
//determine whether they should stop now for gas or not.

var milePerGallon = 18;
var amountInTank = .10;
var amountOfTank = 15;
var miles = 200;
//.75% of 15 gal tank is = 11.25
if(amountInTank * amountOfTank > miles / milePerGallon){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have "+amountInTank * amountOfTank+" gallons in your tank," +
        "you had better get gas now while you can.")
}