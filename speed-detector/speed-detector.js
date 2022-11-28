// function that creates prompting function
const prompt = require("prompt-sync")();

//prompt for user input
let speedInput = prompt(`Enter the car speed:`);


// function to calculate speed and give points
function speed (speedInput){
if(speedInput < 70){
console.log('Ok');
}
else if(speedInput > 70){
   let difference = speedInput - 70;
   let points = Math.floor(difference / 5);

   if(points > 12){
     console.log('License suspended');
   }
   else{
      console.log(points);
   }
}


}

//calling the function speed
speed(speedInput);

