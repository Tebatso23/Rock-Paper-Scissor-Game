

document.addEventListener("DOMContentLoaded", function(){
    
 function computerPlay(){
    const randomNumForArray=Math.floor(Math.random()*3);
    console.log(randomNumForArray);
    const valuesOfTheGame=["Rock","Paper","Scissor"];
    const computerChoice=valuesOfTheGame[randomNumForArray];
    console.log(computerChoice)

 }   


const rockBtn=document.getElementById('rock');
console.log(rockBtn)
const paperBtn=document.getElementById('paper');
console.log(paperBtn)
const scissorBtn=document.getElementById('scissor');

//track scores and attept
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

if(computerChoice=="Rock"){
    if(Useroption=="paper"){
        alert("player won")
        score++;
    }
    else if(Useroption == "rock"){
        alert("It is a draw")
        draw++
    }
    else{
        alert("computer won");
        computerScore++;
    }
}
else if(computerChoice=="Paper"){
    if(Useroption=="paper"){
        alert("It is a draw")
    }
    else if(Useroption=="rock"){
        alert("Computer won")
        computerScore++;
    }
    else{
        alert("user won")
        score++;

    }

}
else{
    if(Useroption=="paper"){
        alert("computer won");
        computerScore++;
    }
    else if(Useroption=="rock"){
        alert("User won");
        score++;
    }
    else{
        alert("draw")
        draw++
    }
}
}




});
