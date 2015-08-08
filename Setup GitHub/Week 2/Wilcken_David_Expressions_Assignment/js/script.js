//David Wilcken
//08 Aug 15
//Expressions Assignment

//Density Altitude Calculator
//Density altitude = pressure altitude +(120 x (OAT - ISA temp))
//Oat = Outside air temp
//ISA = Standard temp which is found by - 2 degrees celsius per 1000ft of altitude
//Pressure altitude is measured in inches of mercury.

var pressureAltitude = prompt("This is for calculating Density Altitude. \n " +
    "Please Enter Station Altimeter Setting");
var currentTemperature = prompt ("Enter Outside Air Temperature");
var stationElevation = prompt ("Enter Station Elevation AGL");
var standardTemperature = stationElevation / 1000 * 2;
var densityAltitude = pressureAltitude + (120 * (currentTemperature - standardTemperature));

alert("The Density Altitude For Your Location Is "+densityAltitude+" feet");
console.log(densityAltitude);