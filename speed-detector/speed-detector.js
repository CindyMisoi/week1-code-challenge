const prompt = require("prompt-sync")();

let speedInput = prompt(`Enter the car speed:`);
let speed;

//console.log(speed);

if(speedInput < 70){
console.log(speed = 'Ok');
}
else if(speedInput > 70){
   console.log(speed = (speedInput - 70) / 5);
}


