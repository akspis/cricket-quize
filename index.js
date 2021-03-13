var readlineSync = require("readline-sync");

var user = readlineSync.question("what is Your Name ");
console.log("welcome " + user);

var message = readlineSync.question("Are You Ready To Play Crikcket Quize ");

if(message === "yes"){
console.log("Lets go " + user);
}else{
  console.log("its ok if you dont want to play quizev" + user)
  process.exit(1)
}
function cricket(question, answer){
 
 var userAnswser = readlineSync.question(question);

 if(userAnswer.toUpperCase()===answer.toUpperCase()){
   console.log("Wright");
 }else{
   console.log("Wrong");
 }
}

var cricketList= [{
question: "Who won the first World Cup, 1975?",
answer:"west indies"       
},
{
question: "How many times Mumbai Indians won the IPL?",
answer:"4"       
},
{
question: "Which Australian city has a cricket ground called the Oval?",
answer:"Sydney"       
},
{
question: "Who Captained India to victory in the World Cup in 1983?",
answer:"Kapil Dev."       
},
{
question: "How many teams are participating in the ICC World Cup 2019?",
answer:"10"       
},
{
question: "Which cricket team has won most ICC Cricket World Cup titles? ",
answer:"Australia      
},
{
question: "Which of the following country has hosted the ICC World Cup most times?",
answer:"england"       
},
{
question: "How many minutes before play should the umpires take the field?",
answer:"5"       
},
{
question: "who is the indian captaine in 2011 world cup?",
answer:"Ms dhoni"       
},
{
question: "The distance between the popping crease and the bowling crease is?",
answer:"4 feet"       
}
]

for(i = 0; i<cricketList.length; i++){
  const result = cricketList[i];
  cricket(result.question, result.answer);
}