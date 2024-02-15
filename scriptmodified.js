let score = 0; //bug #1 set score = 0
let playAgain = true; // 

while (playAgain === true) { //bug #2 playAgain should be true // bug #3 { for while loop
  let randomNumber = 5; //Math.floor(Math.random() * 10) + 1; // bug #4 use let instead of const // bug #5 10 instead of 100
  let userGuess = prompt("Guess a number between 1 and 10:"); // bug #6 let instead of const

  if (userGuess == randomNumber) { //bug #7 == instead of = // bug #8 randomNumber instead of randomnumber
    alert("Congratulations! You guessed the correct number.");
    score++;
  } else {
    alert(`Sorry, the correct number was ${randomNumber}. You lose.`); //bug #9 randomNumber instead of randomnumber
    //bug #10 delete score
  }

  playAgain = confirm("Do you want to play again?"); 

  if (!playAgain); {
    alert(`Game over. Your final score is ${score}.`); //bug #11 score
    
  } 
}

