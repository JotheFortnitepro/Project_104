// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
else if (x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else 
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
// made for correct Guess
var x = document.getElementById("guessField");
if(x == y) {
    alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN" + guess + "GUESS");
    guess=1;
}
  
// function for number guessed by user  
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}