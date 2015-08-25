/*
  David Wilcken
  SDI
  Functions Assignment
 */

//variables
var flLotto = lottoCreator(1,53);//assigning var to lottoCreator function and setting min & max
var pbLotto = pblottoCreator(1,59);//assigning var to lottoCreator function and setting min & max
var bigPb = bigPbCreator(1,35);//assigning var to bigPbCreator function and setting min & max


//functions
function lottoCreator(min, max) {//creating function with function parameter
    var myArray =[];//creating an array var for the function
    for (var i = 0; i < 6; i++){//creating a loop to repeat the code below 6 times
        myArray[i] = Math.floor(Math.random() * (max - min +1)) +min;//code that selects a random #
    }
    return myArray// function return that stops the function
}

function pblottoCreator (min, max){//creating function with function parameter
    var myArray =[];//creating an array var for the function
    for (var i = 0; i < 5; i++){//creating a loop to repeat the code below 5 times
        myArray[i] = Math.floor(Math.random() * (max - min +1)) +min;//code that selects a random #
    }
    return myArray// function return that stops the function
}

function bigPbCreator (min, max){//creating function with function parameter
    var myArray = [];//creating an array var for the function
    for (var i =0; i < 1; i++){//creating a loop to repeat the code below 1 time
        myArray [i] = Math.floor(Math.random() *(max - min +1)) +min;//code that selects a random #
    }
    return myArray//function return that stops the function
}


//main code
var whichLotto = prompt("Please enter which lotto you are playing.\nFlorida State or Powerball.");
    while (whichLotto === "") {//prompt validation set on a loop if no entry is made
        whichLotto = prompt("Please enter which lotto.\nFlorida State or Powerball.");//reminder to the user to enter a value
}
if(whichLotto == "Florida State"){//condition if Florida State is selected
        console.log("Your Florida State Lottery Numbers Are: "+flLotto+".");//out put for FS
    }else if(whichLotto == "Powerball"){//condition if Powerball is selected
        console.log("Your Powerball Numbers Are: "+pbLotto+" Powerball: "+bigPb+".");//out put for PB
    }

