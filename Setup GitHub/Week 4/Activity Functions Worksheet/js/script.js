/*Calculate the Area of a Rectangle


var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The area of the rectangle is "+area+".");

function calculateArea(w, h )
{
    return w *h;
}
*/


//Circumference - Calculate the circumference of a circle


/*function area(){
    var radius = 10;
    var pi = 3.14;
    var area = radius * (pi * pi);
    console.log("The area of your circle is "+area+".");
}
area()

/*Stung!

 It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

 Given:
 Victim’s weight (in pounds)
 Parameter(s) for function:
 Victim’s weight (in pounds)
 Return:
 Number of Bee stings
 Result to print to the console:
 “It takes X bee stings to kill this animal.
 */


function killSting (weight){
    var stingsToKill;
    stingsToKill = weight * 8.666666667;

    console.log("It takes "+stingsToKill+" bee stings to kill this animal.");
}

killSting(175);




