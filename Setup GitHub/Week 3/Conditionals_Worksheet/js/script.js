
//check the login
//Make sure the user has the correct username and password. If the username doesn't match
//then a specific message for that should be printed to the console. IF the password dosen't
//a message should appear for that, etc. Only one error message should appear.

var userNameEntry = prompt("Please enter username");
var passWordEntry = prompt("Please enter password");
var userName = "dwilcken";
var passWord = "123456";

if(userNameEntry == userName && passWordEntry == passWord ){
    console.log("Welcome " +userName+"!");}
else if(userNameEntry != userName){
    console.log("User not found. Try again");}
else if(passWordEntry != passWord){
    console.log("Password does not match.")
}





























