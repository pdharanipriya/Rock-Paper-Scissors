let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const userScoreUpdate=document.querySelector("#user-score");
const compScoreUpdate=document.querySelector("#comp-score");

const compChoice=()=>{
    let options=['rock','paper','scissors'];
    const value=Math.floor(Math.random() *3);
    return options[value];
};


const drawGame=()=>{
    msg.innerText="Match draw";
    msg.style.backgroundColor="#081b31";
};

const WinLoseGame=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScoreUpdate.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreUpdate.innerText=compScore;
        msg.innerText=`You Lost! Computers ${compChoice} beats yours ${userChoice}`
        msg.style.backgroundColor="red";
    }
};

const playGame=(compChoice,userChoice)=>{
    if(compChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="rock"?false:true;
        }
        WinLoseGame(userWin,compChoice,userChoice);
    }
};

const userGame=()=>{
    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userVal=choice.getAttribute("id");
            return playGame(compChoice(),userVal);
        });
    });
};
userGame();


