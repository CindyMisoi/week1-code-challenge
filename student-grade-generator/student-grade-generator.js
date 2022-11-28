// function that creates prompting function
const prompt = require("prompt-sync")();

let marks = prompt(`Please enter your marks:` );

//function to grade a student
function grade(marks) {
    
    if (marks > 79 && marks <=100) {
        console.log("A")
    }
    else if (marks >= 60 && marks <= 79) {
        console.log("B")
    }
    else if (marks >= 49 && marks <= 59) {
        console.log("C")
    }
    else if (marks >= 40 && marks <= 49) {
        console.log("D")
    }
    else if (marks < 40 && marks > 0){
        console.log("E");
    }
    
    // error here
    else if (marks < 0 ) {
        console.log("Invalid number");
    }
    else if (marks > 100){
        console.log("Invalid number");
    }
    
}
grade(marks);
