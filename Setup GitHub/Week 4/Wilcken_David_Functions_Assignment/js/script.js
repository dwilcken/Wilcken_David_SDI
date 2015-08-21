for (var i = 6; i > 0; i--) {
    console.log("Florida Lottery " + floridaRandom());
}

for (var i = 5; i > 0; i--) {
    console.log("PB Lottery " + lotteryRandom());
}

for (var i = 1; i > 0; i--) {
    console.log("Your Powerball is: " + powerballRandom());
}

//Florida lottery 6 random number 1-53
function floridaRandom(min,max){
    var min = 1;
    var max = 53;
    return Math.floor(Math.random() * (max - min +1)) +min;
}

//console.log(floridaRandom());

//Powerball lottery 5 random number 1-59 and powerball 1-35
function lotteryRandom(min, max){
    var min = 1;
    var max = 59;
    return Math.floor(Math.random() * (max - min +1)) + min;
}


//The powerball random 1-35
function powerballRandom(min, max){
    var min = 1;
    var max = 35;
    return Math.floor(Math.random() * (max - min +1))+min;
}


