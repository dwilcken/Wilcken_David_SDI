
//Movie Ticket Price
//The local theater in town has a ticket price of $12.00 but if you are a senior (55 and older)
//and under 10 you get the discount price of $7.00. In addition, if a customer is seeing a movie
//between 3pm and 5pm they can also get the discounted price. Determine which of the two prices
//the customer is eligible for.

var discountPrice = 7;
var regularPrice = 12;
var senior = 55;
var kid = 10;
var movieTime = (3 === 4 === 5);

if(senior) {
    console.log("Your ticket price is $" + discountPrice + ".");
}else if(kid){
    console.log("Your ticket price is $"+discountPrice+".");
}else if(movieTime){
    console.log("Your ticket price is $"+discountPrice+".");
}else{
    console.log("Your ticket price is $"+regularPrice+".");
}


























