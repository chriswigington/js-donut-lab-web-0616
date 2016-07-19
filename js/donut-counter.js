//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var guests = prompt("Enter guests:").parseInt
var donuts = prompt("Enter donuts:").parseInt
//write a conditional to check if there are enough donuts
if (donuts < guests) {
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
  window.alert("There are not enough donuts for the guests") 
} else {
  window.alert("There are enough donuts for the guests")
}