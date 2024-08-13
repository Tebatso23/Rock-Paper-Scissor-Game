//ask user name

const name=prompt("Enter your name");

document.addEventListener("DOMContentLoaded", function(){
    

 
const rockBtn=document.getElementById('rock');
const paperBtn=document.getElementById('paper');
const scissorBtn=document.getElementById('scissor');

//track scores and attempt
let score=0;
let computerScore=0;
let draw=0;
let attempt=0;
let maxAttempt=10;

//when button is clicked an argument is sent to the function which is then stored inside an variable option
rockBtn.addEventListener('click', function() { option('rock'); });
paperBtn.addEventListener('click', function() { option('paper'); });
scissorBtn.addEventListener('click', function() { option('scissor'); });


//function which receives user input 
//also learnt that when clicked it refreshes and count the attempt nb still want to learn

function option(Useroption){
  
console.log(`user choise ${Useroption}`)

const randomNumForArray=Math.floor(Math.random()*3);

const valuesOfTheGame=["Rock","Paper","Scissor"];
const computerChoice=valuesOfTheGame[randomNumForArray];

console.log(`computer choice ${computerChoice}`)

attempt++;
console.log(attempt)

if(attempt>maxAttempt){
    alert("game over")
    
}
computerChoice.toLocaleLowerCase();
Useroption.toLocaleLowerCase();
const result=document.getElementById("result")

if(computerChoice=="Rock"){
    if(Useroption=="paper"){
        
      result.innerHTML=`${name} won`;
        score++;
    }
    else if(Useroption == "rock"){
        result.innerHTML="It is a draw";
        draw++
    }
    else{
        result.innerHTML="Computer won";
        computerScore++;
    }
}
else if(computerChoice=="Paper"){
    if(Useroption=="paper"){
       result.innerHTML="It is a draw";
        draw++;
    }
    else if(Useroption=="rock"){
        result.innerHTML="Computer won";
        computerScore++;
    }
    else{
        result.innerHTML=`${name} won`;
        score++;

    }

}
else{
    if(Useroption=="paper"){
        result.innerHTML="Computer won";
        computerScore++;
    }
    else if(Useroption=="rock"){
        result.innerHTML=`${name} won`;
        score++;
    }
    else{
        result.innerHTML="draw";
        draw++
    }
}

const playerScore=document.getElementById("player");
playerScore.innerHTML=score;
const computerScore1=document.getElementById("computer");
computerScore1.innerHTML=computerScore;
const drawscore=document.getElementById("draw");
drawscore.innerHTML=draw
}



});
