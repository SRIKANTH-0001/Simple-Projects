let score=JSON.parse(localStorage.getItem('score'))||{
    Win:0,
    Lose:0,
    Tie:0
};

updatescoreElement();
function playGame(playerMove){
const computerMove=SelectComputerMoveR();
let result='';
if (playerMove==='Rock'){
    if(computerMove==='Rock'){
        result='Tie.';
    }else if(computerMove==='Paper'){
        result='You Lose.Try Again!';
    }else{
        result='You Win.';
    }

}else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
        result='You Win.';
    }else if(computerMove==='Paper'){
        result='Tie.';
    }else{
        result='You Lose.Try Again!';
    }
}else if(playerMove==='Scissors'){
    if(computerMove==='Rock'){
        result='You Lose.Try Again!';
    }else if(computerMove==='Paper'){
        result='You Win.';
    }else{
        result='Tie.';
    }
}
if (result==='You Win.'){
    score.Win+=1;
}else if(result==='You Lose.Try Again!'){
    score.Lose+=1;
}else if(result=='Tie.'){
    score.Tie+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updatescoreElement();
 
document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You
<img src="images/${playerMove}-emoji.png" class="move-icon">

<img src="images/${computerMove}-emoji.png" class="move-icon">

Computer`;

//alert(`You Picked ${playerMove}.Computer Picked ${computerMove}.${result}
//Wins:${score.Win},Losses:${score.Lose},Ties:${score.Tie}`);
}

function updatescoreElement(){
document.querySelector('.js-score').innerHTML=`Wins:${score.Win},Losses:${score.Lose},Ties:${score.Tie}`;

}

function SelectComputerMoveR(){
const randomNumber=Math.random();
let computerMove='';
if(randomNumber >=0 && randomNumber <1/3){
    computerMove='Rock';
}else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove='Paper';
}else if(randomNumber >=2/3 && randomNumber <1){
    computerMove='Scissors';
}

return computerMove;
}