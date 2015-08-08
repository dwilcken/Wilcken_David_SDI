//Expressions worksheet

var humanYears = 2;//how many human years sparky is
var dogYears = 7;//what a dog year is to one human year
var sparkyAge = humanYears * dogYears;//multiply the human years buy the dog years to get sparkys age
var slices = 8;//how many slices per pizza
var people = 30;//how many people are attending the party
var pizzas = 7;//how many pizzas where ordered
var slicesPerPerson = slices * pizzas / people;//take the # of slices and * per pizzas ordered, then divide for ppl
var leftovers = slices * pizzas % people;//8 slices * 7 pizza = 56. Find the remainder after 30 ppl eat = 26
var weeklyBill = [35 + 38 + 45 + 30 + 42];//add the 5 bills for the week to get the total spent
var averageBill =  weeklyBill / 5;//take the total spent and divide by weeks to get weekly average
var originalPrice = 30;//price for shirt
var discount = 15;//percentage of discount
var discountPrice = originalPrice - (originalPrice / discount);//to find price after discount
var x = "shirt";//string var to add anything as what is being sold
var tax = discountPrice + 3;//adding 3% to the discount price for tax
var withoutTax = discountPrice;//total of shirt without tax is = to the discount price

//Dog years problem
//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
//Calculate how old Sparky the pit bull is in dog years based on his actual age.
console.log("Sparky is "+humanYears+" years old in human years which is "+sparkyAge+" years in dog years.");

//Slice of pie part 1
//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates
//how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices
//and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party.");

//Slice of pie part II
// At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have
//been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will
//Sparky feast on?
console.log("Sparky got "+leftovers+" slices of pizza.");

//Average shoping bill
// You are budgeting your money for the year and must calculate your average weekly grocery shopping
//spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an
//expression that will use the items in the array to calculate the average amount spent on groceries.
console.log("You have spent a total of $"+weeklyBill+" on groceries over 5 weeks. That is an average of $"+averageBill+
    " per week.");

//Discounts
//Calculate the discounted price for an item. Create an expression that will calculate the discounted price
//with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal.
//$345.896 for example.)
console.log("Your "+x+" was orginally $"+originalPrice+", but after a "+discount+"% discount, it is now $"
    +withoutTax+" without tax and $"+tax+" with tax.");



















