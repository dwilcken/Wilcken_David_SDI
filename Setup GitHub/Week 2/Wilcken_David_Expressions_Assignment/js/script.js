//David Wilcken
//08 Aug 15
//Expressions Assignment

var poolDepth = prompt("How much water for your pool? \n Please enter pool Depth");
var poolLength = prompt ("What is the length of your pool?");
var poolWidth = prompt ("What is the width of your pool?");
var pricePerGallon = prompt ("How much do you currently pay per gallon of water?");
var poolArea = poolDepth * poolLength * poolWidth;
var gallons = poolArea / 7.48;
var totalCost = pricePerGallon * gallons;


alert("The volume of your pool is "+poolArea+" square feet. \n Which is approximately "+gallons+
        " gallons of water and will cost around $"+totalCost+".");

console.log("The volume of your pool is "+poolArea+" square feet. \n Which is approximately "+gallons+
    " gallons of water and will cost around $"+totalCost+".");