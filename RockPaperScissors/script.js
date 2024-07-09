let userscore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
    //rock , paper , scissors 
}

const drawgame = ()=>{
    // console.log("game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userchoice,compChoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("you win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorepara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
};


const playgame = (userchoice) => {
    // console.log("user choice = ",userchoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice); 

    if(userchoice == compChoice){
        //draw
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice == "rock"){
            //scissors , paper
           userWin =  compChoice == "paper" ? false : true;
        }
        else if(userchoice == "paper"){
            //rock , scissors
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            //rock , paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked.",userchoice);
        playgame(userchoice);
    });
});



