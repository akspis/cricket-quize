var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var user = readlineSync.question(chalk.bold.yellowBright("what is Your Name "));
console.log("welcome " + user);

var message = readlineSync.question(chalk.bold.yellowBright("Are You Ready To Play Crikcket Quize? (yes/no) "));

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
   console.log(chalk.underline.bold.bgcyan("Wrong"));
 }
 console.log(chalk.bold.yellowBright("Your current score "+ score));
console.log("----------------");
}

var cricketList= [{
question: chalk.bold.bgRed("Who won the first World Cup, 1975?")+("\n1.India")+("\n2.west indies")+("\n3.pakistan ")+"\n",
answer:"west indies"       
},
{
question: chalk.bold.bgRed("How many times Mumbai Indians won the IPL?")+("\n1.3")+("\n2.4")+("\n3.2 ")+"\n",
answer:"4"       
},
{
question: chalk.bold.bgRed("Which Australian city has a cricket ground called the Oval?")+("\n1.sydney")+("\n2.melborun")+("\n3.goa ")+"\n",
answer:"Sydney"       
},
{
question: chalk.bold.bgRed("Who Captained India to victory in the World Cup in 1983?")+("\n1.ganguly")+("\n2.kapil dev")+("\n3.ms dhoni ")+"\n",
answer:"Kapil Dev."       
},
{
question: chalk.bold.bgRed("How many teams are participating in the ICC World Cup 2019?")+("\n1.8")+("\n2.12")+("\n3.10 ")+"\n",
answer:"10"       
},
{
question: chalk.bold.bgRed("Which cricket team has won most ICC Cricket World Cup titles? ")+("\n1.Australia")+("\n2.England")+("\n3.India ")+"\n",
answer:"Australia"      
},
{
question: chalk.bold.bgRed("Which of the following country has hosted the ICC World Cup most times?")+("\n1.New zeland")+("\n2.sri lanka")+("\n3.England ")+"\n",
answer:"england"       
},
{
question: chalk.bold.bgRed("How many minutes before play should the umpires take the field?")+("\n1.10")+("\n2.5")+("\n3.15 ")+"\n",
answer:"5"       
},
{
question: chalk.bold.bgRed("who is the indian captaine in 2011 world cup?")+("\n1.yuvraj")+("\n2.Ganguly")+("\n3.Ms dhoni ")+"\n",
answer:"Ms dhoni"       
},
{
question: chalk.bold.bgRed("The distance between the popping crease and the bowling crease is?")+("\n1.10 feet")+("\n2.8 feet")+("\n3.4 feet ")+"\n",
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
