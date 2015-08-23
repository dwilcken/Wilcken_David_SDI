var flLotto = lottoCreator(1,53);//assigning var to lottoCreator function and setting min & max
var pbLotto = pblottoCreator(1,59);//assigning var to lottoCreator function and setting min & max
var bigPb = bigPbCreator(1,35);//assigning var to bigPbCreator function and setting min & max


var whichLotto = prompt("Please enter which lotto you are playing.\nFlorida State or Powerball.");
    if (whichLotto == "") {//prompt validation
        whichLotto = prompt("Please enter which lotto.\nFlorida State or Powerball.");//reminder to the user to enter a value
        console.log("Thank you.");//log thanking the user for their input
    }
if(whichLotto == "Florida State"){//condition if Florida State is selected
        console.log("Your Florida State Lottery Numbers Are: "+flLotto+".");//out put for FS
    }else if(whichLotto == "Powerball"){//condition if Powerball is selected
        console.log("Your Powerball Numbers Are: "+pbLotto+" Powerball: "+bigPb+".");//out put for PB
    }


function lottoCreator(min, max) {//

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
