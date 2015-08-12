//conditional logic - else if

var kidHeight = 52;
var minHeight = 48;
var sneakerlift = 2;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight + sneakerlift > minHeight){
    //you can ride!
    console.log("You can ride the coaster!")
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present")
}else{
    //sorry you have some growing to do
    console.log("Sorry kid, you have some growing to do.")
}

//logical operators
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery || wonLottery){
    console.log("We can buy the phone");
}else{
    console.log("No phone for you!!");
}


//Ternary Operators

var age = 11;
var book;

//if the child is under 10, they get green eggs and ham, otherwise they get time machine
if(age <10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Maching"
}
console.log(book);

















