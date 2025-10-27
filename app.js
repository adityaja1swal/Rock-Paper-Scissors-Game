let userScore =0;
let computerScore =0;
const choices = document.querySelectorAll(".choice");
const userScoreMessage = document.querySelector("#player-score");
const computerScoreMessage = document.querySelector("#computer-score");
const messageBox = document.querySelector(".msg-box");
const winningMessage = document.querySelector(".winning-msg");


choices.forEach(Element => {
  Element.addEventListener("click" , () => {

    let userChoice = Element.getAttribute("id");
    let computerChoice = randomChoice();
    checkWinner(userChoice, computerChoice);
  });
});

const randomChoice = () => {
  let option = ["rock", "paper", "scissor"];
  return option[Math.floor((Math.random())*3)];
};

const checkWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    winningMessage.innerText = "It's Draw. Play Again.";
    messageBox.style.backgroundColor = "#11224E";
  } else {
    if(userChoice === "rock" && computerChoice === "paper"){
      computerScoreMessage.innerText = ++computerScore;
      winningMessage.innerText = `Your ${userChoice} lose against ${computerChoice}`;
      messageBox.style.backgroundColor = "Red";
    } else if (userChoice === "rock" && computerChoice === "scissor"){
      userScoreMessage.innerText = ++userScore;
      winningMessage.innerText = `Your ${userChoice} beats ${computerChoice}`;
      messageBox.style.backgroundColor = "Green";
    } else if (userChoice === "paper" && computerChoice === "rock"){
      userScoreMessage.innerText = ++userScore;
      winningMessage.innerText = `Your ${userChoice} beats ${computerChoice}`;
      messageBox.style.backgroundColor = "Green";
    } else if (userChoice === "paper" && computerChoice === "scissor"){
      computerScoreMessage.innerText = ++computerScore;
      winningMessage.innerText = `Your ${userChoice} lose against ${computerChoice}`;
      messageBox.style.backgroundColor = "Red";
    } else if (userChoice === "scissor" && computerChoice === "rock"){
      computerScoreMessage.innerText = ++computerScore;
      winningMessage.innerText = `Your ${userChoice} lose against ${computerChoice}`;
      messageBox.style.backgroundColor = "Red";
    } else {
      userScoreMessage.innerText = ++userScore;
      winningMessage.innerText = `Your ${userChoice} beats ${computerChoice}`;
      messageBox.style.backgroundColor = "Green";
    }
  }
}



