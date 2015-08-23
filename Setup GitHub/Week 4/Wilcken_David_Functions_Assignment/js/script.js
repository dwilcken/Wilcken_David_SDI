var flLotto = lottoCreator(1,53);
var pbLotto = pblottoCreator(1,59);
var bigPb = bigPbCreator(1,35);


var whichLotto = prompt("Please enter which lotto you are playing.\nFlorida State or Powerball.");
    if (whichLotto == "") {
        whichLotto = prompt("Please enter which lotto.\nFlorida State or Powerball.");
        console.log("Thank you.");
    }
if(whichLotto == "Florida State"){
        console.log("Your Florida State Lottery Numbers Are: "+flLotto+".");
    }else if(whichLotto == "Powerball"){
        console.log("Your Powerball Numbers Are: "+pbLotto+" Powerball: "+bigPb+".");
    }


function lottoCreator(min, max) {

    var myArray =[];

    for (var i = 0; i < 6; i++){

        myArray[i] = Math.floor(Math.random() * (max - min +1)) +min;
    }

    return myArray
}

function pblottoCreator (min, max){

    var myArray =[];

    for (var i = 0; i < 5; i++){
        myArray[i] = Math.floor(Math.random() * (max - min +1)) +min;
    }

    return myArray
}

function bigPbCreator (min, max){

    var myArray = [];

    for (var i =0; i < 1; i++){
        myArray [i] = Math.floor(Math.random() *(max - min +1)) +min;
    }
    return myArray
}
