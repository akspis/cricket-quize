var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var user = readlineSync.question(chalk.bold.yellowBright("what is Your Name "));
console.log("welcome " + user);

var message = readlineSync.question(chalk.bold.yellowBright("Are You Ready To Play Crikcket Quize "));

if(message === "yes"){
console.log(chalk.underline.bold.bgBlue("Lets go " + user));
}else{
  console.log(chalk.underline.bold.bgBlue("its ok if you dont want to play quize " + user));
  process.exit(1)
}
function cricket(question, answer){
 
 var userAnswser = readlineSync.question(question);

 if( userAnswser.toUpperCase()===answer.toUpperCase()){
   console.log( chalk.underline.bold.bgMagenta("Wright"));
   score++
 }else{
   console.log(chalk.underline.bold.cyan("Wrong"));
 }
 console.log(chalk.bold.yellowBright("Your current score "+ score));
console.log("----------------");
}

var cricketList= [{
question: chalk.bold.bgRed("Who won the first World Cup, 1975?"),
answer:"west indies"       
},
{
question: chalk.bold.bgRed("How many times Mumbai Indians won the IPL?"),
answer:"4"       
},
{
question: chalk.bold.bgRed("Which Australian city has a cricket ground called the Oval?"),
answer:"Sydney"       
},
{
question: chalk.bold.bgRed("Who Captained India to victory in the World Cup in 1983?"),
answer:"Kapil Dev."       
},
{
question: chalk.bold.bgRed("How many teams are participating in the ICC World Cup 2019?"),
answer:"10"       
},
{
question: chalk.bold.bgRed("Which cricket team has won most ICC Cricket World Cup titles? "),
answer:"Australia"      
},
{
question: chalk.bold.bgRed("Which of the following country has hosted the ICC World Cup most times?"),
answer:"england"       
},
{
question: chalk.bold.bgRed("How many minutes before play should the umpires take the field?"),
answer:"5"       
},
{
question: chalk.bold.bgRed("who is the indian captaine in 2011 world cup?"),
answer:"Ms dhoni"       
},
{
question: chalk.bold.bgRed("The distance between the popping crease and the bowling crease is?"),
answer:"4 feet"       
}
]

for(i = 0; i<cricketList.length; i++){
  const result = cricketList[i];
  cricket(result.question, result.answer);
}
console.log("_______________________");

console.log(chalk.underline.bold.bgYellow("YAY !, Your Score Is:" + score));
console.log("-----------------------");
console.log(chalk.bold.bgGreenBright("Highest Score Holders:"));