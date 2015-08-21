//loop for FL Lotto
for (var f = 6; f > 0; f--) {
    console.log("Florida Lottery " + floridaRandom());
}

//loop forPB lotto
for (var p = 5; p > 0; p--) {
    console.log("PB Lottery " + lotteryRandom());
}

//loop for the PB
for (var b = 1; b > 0; b--) {
    console.log("Your Powerball is: " + powerballRandom());
}

//Florida lottery 6 random number 1-53
function floridaRandom(min,max){
    var fMin = 1;
    var fMax = 53;
    return Math.floor(Math.random() * (fMax - fMin +1)) +fMin;
}

//console.log(floridaRandom());

//Powerball lottery 5 random number 1-59 and powerball 1-35
function lotteryRandom(min, max){
    var pMin = 1;
    var pMax = 59;
    return Math.floor(Math.random() * (pMax - pMin +1)) + pMin;
}

//The powerball random 1-35
function powerballRandom(min, max){
    var bMin = 1;
    var bMax = 35;
    return Math.floor(Math.random() * (bMax - bMin +1))+bMin;
}
