/*
 David Wilcken
 SDI
 26 Aug 2015
 Functions Assignment
 */

//variables
var flLotto = lottoCreator(1,53,6);//assigning var to lottoCreator function and setting min & max & number of balls
var pbLotto = lottoCreator(1,59,5);//assigning var to lottoCreator function and setting min & max & number of balls
var bigPb = lottoCreator(1,35,1);//assigning var to bigPbCreator function and setting min & max & number of balls
var whichLotto = prompt("Please enter which lotto you are playing.\nFlorida State or Powerball.");//prompt asking which lotto the user is playing


//functions
function lottoVerify (lotto) {//function to verify user enters a value
    var timesClicked = 1;//creating a var for number of times a user enters a value
    while (lotto === "") {//if the user enters nothing the code below will run
        lotto = prompt("Please make an entry.\nEither Florida State or Powerball.");//prompt asking the user to enter a value
        timesClicked++; //incrementing number of times clicked
        if (timesClicked === 3){//if clicked a total of 3 times the user get the following log
            console.log("No selection made, try again later.");//log after three attempts to enter a value
            break;//stopping the loop
        }
    }
    return lotto;//stopping the function
}

function lottoCreator(min, max, num) {//creating function with function parameter
    var myArray =[];//creating an array var for the function
    for (var i = 0; i < num; i++) {//creating a loop to repeat the code below 6 times
        myArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;//code that selects a random #
    }
    return myArray;// function return that stops the function
}

//main code
lottoVerify(whichLotto);//calling on the lottoVerify function to run.

if(whichLotto == "Florida State"){//condition if Florida State is selected
    console.log("Your Florida State Lottery Numbers Are: "+flLotto+".");//out put for FS
}else if(whichLotto == "Powerball"){//condition if Powerball is selected
    console.log("Your Powerball Numbers Are: "+pbLotto+" Powerball: "+bigPb+".");//out put for PB
}

//Validated all functions, loops and prompts