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