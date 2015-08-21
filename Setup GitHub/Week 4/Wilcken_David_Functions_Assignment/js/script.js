function lottoCreator(min, max) {

    var myArray =[];

    for (var i = 0; i < 6; i++){

        myArray[i] = Math.floor(Math.random() * (max - min +1)) +min;
    }

    return myArray
}

var flLotto = lottoCreator(1, 53);
console.log("Your Florida State Lottery Numbers: "+flLotto+".");

var pbLotto = lottoCreator(1,59);
console.log("Your Powerball Numbers: "+pbLotto+".");