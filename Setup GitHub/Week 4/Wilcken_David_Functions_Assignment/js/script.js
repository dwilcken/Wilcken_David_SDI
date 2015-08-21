function lottoCreator(min, max) {

    console.log(min + " " + max);


    var myArray =[];

    for (var i = 0; i < 2; i++){

        myArray[0] = Math.floor(Math.random() * (max - min +1)) +min;
        myArray[1] = Math.floor(Math.random() * (max - min +1)) +min;
        myArray[2] = Math.floor(Math.random() * (max - min +1)) +min;
        myArray[3] = Math.floor(Math.random() * (max - min +1)) +min;
        myArray[4] = Math.floor(Math.random() * (max - min +1)) +min;
        myArray[5] = Math.floor(Math.random() * (max - min +1)) +min;
    }

    return myArray
}



var flLotto = lottoCreator(1, 53);
 console.log(flLotto);

var pbLotto = lottoCreator(1,59);
console.log(pbLotto);