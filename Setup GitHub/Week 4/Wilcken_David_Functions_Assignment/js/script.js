var flLotto = lottoCreator(1, 53);
var pbLotto = pblottoCreator(1,59);


var whichLotto = prompt("Please enter which lotto you are playing.\nFlorida State or Powerball.");
    if (whichLotto == "") {
        whichLotto = prompt("Please enter which lotto.");
        console.log("Thank you.");
    }else if(whichLotto == "Florida State"){
        console.log("Your Florida State Lottery Numbers Are: "+flLotto+".");
    }else if(whichLotto == "Powerball"){
        console.log("Your Powerball Numbers Are: "+pbLotto+".");
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


//console.log("Your Florida State Lottery Numbers: "+flLotto+".");


//console.log("Your Powerball Numbers: "+pbLotto+".");