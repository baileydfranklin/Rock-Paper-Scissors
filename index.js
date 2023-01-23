let userSelection = prompt("Rock, Paper or Scissors?");
let computerSelection = Math.random()*100;

//Conditional logic goes here to determine the computers selection
if(computerSelection < 34){
    computerSelection = "Rock"
}else if(computerSelection <= 67){
    computerSelection = "Paper"
}else{
    computerSelection = "Scissors"
}

//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner

function compare(userSelection, computerSelection){
    if(userSelection == "Rock" && computerSelection == "Scissors"){
        return  "You won!"
    }
    if(userSelection == "Rock" && computerSelection == "Paper"){
        return "You Lost..."
    }
    if(userSelection == "Paper" && computerSelection == "Rock"){
        return "You won!"
    }
    if(userSelection == "Paper" && computerSelection == "Scissors"){
        return "You lost..."
    }
    if(userSelection == "Scissors" && computerSelection == "Rock"){
        return "You lost ..."
    }
    if(userSelection == "Scissors" && computerSelection == "Paper"){
        return "You won!"
    }
    if(userSelection == computerSelection){
        return "It's a tie."
    }
}


console.log(compare(userSelection, computerSelection))