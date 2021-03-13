var readlineSync = require("readline-sync");

var user = readlineSync.question("what is Your Name ");
console.log("welcome " + user);

var message =readlineSync.question("Are You Ready To Play Crikcket Quize ");
console.log(message);

function cricket(question, answer){
 
 var userAnwser = readlineSync.question(question);

 if(userAnswer.toUpperCase()===answe.toUpperCase()){
   console.log("Wright");
 }else{
   console.log("Wrong");
 }
}
