const prompt = require("prompt-sync")();
const marks = prompt(`Please enter your marks:` );
let grade;
//console.log(grade);

if(marks >79 &&  marks <= 100){
    console.log(grade = 'A');
}
else if(marks >= 60 && marks <= 79){
    console.log(grade = 'B');
}
else if(marks >49 && marks < 59 ){
    console.log(grade = 'C');
}
else if(marks >= 40 && marks <= 49){
    console.log(grade = 'D');
}
else if(marks < 40){
    console.log(grade = 'E');
}



