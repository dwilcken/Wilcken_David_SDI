//Expressions worksheet

//Dog years problem
//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
//Calculate how old Sparky the pit bull is in dog years based on his actual age.
var humanYears = 2;
var dogYears = 7;
var sparkyAge = humanYears * dogYears;

//multiply sparkysAge by dog years
console.log("Sparky is "+humanYears+" years old in human years which is "+sparkyAge+" years in dog years");

//Slice of pie part 1
//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates
//how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices
//and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
var slices = 8;
var people = 30;
var pizzas = 7;
var slicesPerPerson = slices * pizzas / people;

console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party");

//Slice of pie part II
// At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have
//been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will
//Sparky feast on?
var leftovers = slices * pizzas % people;

console.log("Sparky got "+leftovers+" slices of pizza");

//Average shoping bill
// You are budgeting your money for the year and must calculate your average weekly grocery shopping
//spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an
//expression that will use the items in the array to calculate the average amount spent on groceries.
var weeklyBill = [35 + 38 + 45 + 30 + 42];
var averageBill =  weeklyBill / 5;
console.log("You have spent a total of $"+weeklyBill+" on groceries over 5 weeks. That is an average of $"+averageBill+" per week");
