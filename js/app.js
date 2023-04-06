'use strict';
// lab-05
let Name, Gender, GenderTitle = "", Age;
let Welcome;
function EnterName() {
    Name = prompt("Enter Your Name");
    return Name;
}
function EnterGender() {
    // ask the user what is his/her gender and add mr or mrs to gendertitle

    Gender = prompt("Enter Your Gender should be either (male or female)");

    if (Gender.toUpperCase() == "MALE") {
        GenderTitle = "Mr.";
    }
    else if (Gender.toUpperCase() == "FEMALE") {
        GenderTitle = "Ms."
    }
    else {
        alert("Your Gender should be either (male or female)");
        GenderTitle = "";
    }
    return GenderTitle;
}
// ask the user to enter his/her age 
function EnterAge() {
    Age = prompt("Enter Your Age");

    while (Age <= 0 || Age > 120) {
        alert("Age should be greater than or equal to 0 and less than 120");
        Age = prompt("Enter the Age Agian");
    }
    return Age;
}
function WelcomeMessage() {
    Welcome = confirm("Do you want to skip the welcoming message");
    if (!Welcome) {
        return alert("Welcome " + GenderTitle + Name + " here is your Age: " + Age);
    }

}


// lab-06
let Course, JavaScript, Programmer;
let Questionsarray = [];

function PrepCourse() {
    Course = prompt("Are you enjoying this course? (YES/NO)");
    if (Course.toUpperCase() === "YES" || Course.toUpperCase() === "NO") {
        return Course;
    }
    else if (Course === null || Course === undefined || Course === "") {
        Course = "invalid";
    }
    else {
        while (Course.toUpperCase() != "YES" && Course.toUpperCase() != "NO") {
            alert("Please enter YES or NO");
            Course = prompt("Are you enjoying this course? (YES/NO)");
        }
    }
    return Course;


}
function JavaScriptLanguage() {
    JavaScript = prompt("Do You Like JavaScript Language? (YES/NO)");
    if (JavaScript.toUpperCase() === "YES" || JavaScript.toUpperCase() === "NO") {
        return JavaScript;
    }
    else if (JavaScript === null || JavaScript === undefined || JavaScript === "") {
        JavaScript = "invalid";
    }
    else {
        while (JavaScript.toUpperCase() != "YES" && JavaScript.toUpperCase() != "NO") {
            alert("Please enter YES or NO");
            JavaScript = prompt("Do You Like JavaScript Language? (YES/NO)");
        }
    }
    return JavaScript;
}
function Programming() {
    Programmer = prompt("Would you like to be an a Full-Stack programmer? (YES/NO)");
    if (Programmer.toUpperCase === "YES" || Programmer.toUpperCase === "NO") {
        return Programmer;
    }
    else if (Programmer === null || Programmer === undefined || Programmer === "") {
        Programmer = "invalid";
    }
    else {
        while (Programmer.toUpperCase() != "YES" && Programmer.toUpperCase() != "NO") {
            alert("Please enter YES or NO");
            Programmer = prompt("Would you like to be an a Full-Stack programmer? (YES/NO)");
        }
    }
    return Programmer;
}

function PushArray(array) {
    array.push(Course, JavaScript, Programmer);
}

function PrintArray(array) {
    for (let i = 0; i <= array.length; i++) {

        console.log(array[i]);
    }
}

EnterName();
EnterGender();
EnterAge();

PrepCourse();
JavaScriptLanguage();
Programming();


PushArray(Questionsarray);
PrintArray(Questionsarray);
WelcomeMessage();

