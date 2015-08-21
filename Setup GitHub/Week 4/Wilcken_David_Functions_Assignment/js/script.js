//Florida lottery 6 random number 1-53
function floridaRandom(min,max){
    var min = 1;
    var max = 53;
    return Math.floor(Math.random() * (max - min +1)) +min;
}

console.log(floridaRandom());

//Powerball lottery 5 random number 1-59 and powerball 1-35
function lotteryRandom(min, max){
    var min = 1;
    var max = 59;
    return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(lotteryRandom());

//The powerball random 1-35
function powerballRandom(min, max){
    var min = 1;
    var max = 35;
    return Math.floor(Math.random() * (max - min +1))+min;
}
console.log(powerballRandom());