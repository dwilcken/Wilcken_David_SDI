//David Wilcken
//08 Aug 15
//Expressions Assignment

var poolDepth = prompt("How much water and money are your pool costing you? \n Please enter pool Depth");
//prompt asking user to input how deep their pool is.
var poolLength = prompt ("What is the length of your pool?");
//prompt asking user to input the length of their pool.
var poolWidth = prompt ("What is the width of your pool?");
//prompt asking user to input the width of their pool.
var pricePerGallon = prompt ("How much do you currently pay per gallon of water?");
//prompt asking how much the user pays per gallon of water.
var poolArea = [poolDepth * poolLength * poolWidth];
//An array that calculates the volume of the pool with l*w*d
var x = 7.48;
//Number variable that assigns the number 7.48 to the letter x
var gallons = poolArea / x;
//there are 7.48 gallons in a square foot of water, to calculate how many gallons the pool holds
//divide the pool area by 7.48.
var totalCost = pricePerGallon * gallons;
//formula that takes how much the user spends for water and how many gallons their pool is to
//give them a total cost to fill up their pool.

alert("The volume of your pool is "+poolArea+" square feet. \n Which is approximately "+gallons+
        " gallons of water and will cost around $"+totalCost+".");

console.log("How much water and money are your pool costing you? \n Please enter pool Depth");
console.log(poolDepth);
console.log("What is the length of your pool?");
console.log(poolLength);
console.log("What is the width of your pool?");
console.log(poolWidth);
console.log("How much do you currently pay per gallon of water?");
console.log(pricePerGallon);
console.log("The volume of your pool is "+poolArea+" square feet. \n Which is approximately "+gallons+
    " gallons of water and will cost around $"+totalCost+" to fill.");