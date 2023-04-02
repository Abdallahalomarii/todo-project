'use strict';

let Name =prompt("Enter Your Name");


let Gender= prompt("Enter Your Gender should be either (male or female)");
var GenderTitle;
// ask the user what is the gender and add mr or mrs to gendertitle to used later
 if(Gender =="Male"|| Gender=="MALE" || Gender=="male")
{
    GenderTitle="Mr.";
}
else if(Gender =="Female"||Gender=="FEMALE"||Gender=="female")
{
    GenderTitle="Ms."
}
else
{
    alert("Your Gender should be either (male or female)");
    GenderTitle="";
}
// ask the user to enter his/her age 
let Age = prompt("Enter Your Age");
// alert a message when age less than 0
if(Age<=0)
{
    alert("Age should be greater than 0");
    Age=prompt("Enter the Age Again");
}

let Welcome= confirm("Do you want to skip the welcoming message");
if(!Welcome)
{
    alert("Welcome "+GenderTitle+Name+" here is your Age: " +Age);
}
