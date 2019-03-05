//universe of options
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
//====================== gloabl variables ===================================

var correct = 0;
var incorrect = 0;
var guessesRemain = 10;
var guessTaken = [];
var compChoice = "";

//====================== functions ==========================================

var resetGame = function(){
   guessTaken = [];
   compChoice="";
   guessesRemain = 10;
//reset the letters guessed by user
   document.getElementById("guess-taken").innerHTML = guessTaken;
//resets the remaining guesses available
  document.getElementById("guess-remain").innerHTML =  guessesRemain;
   computerPick();
};

//computer choice function
function computerPick(){
   compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

//maincontent
//On key up the function runs
document.onkeyup = function(event){
//user guess is saved in the userGuess variable, when they select a key
       var userGuess = event.key;
//this if statement determines whether the user made the correct selection
   if(userGuess === "a" || userGuess === "b" || userGuess === "c"|| userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" ||
       userGuess === "h"|| userGuess === "i" || userGuess === "j"|| userGuess === "k" || userGuess === "l"|| userGuess === "m" || userGuess === "n" ||
       userGuess === "o" || userGuess === "p" || userGuess === "q"|| userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" ||
       userGuess === "v" || userGuess === "w" || userGuess === "x"|| userGuess === "y" || userGuess === "z"){
//this next action adds the user guess to the guessTaken array
   guessTaken.push(userGuess);
   document.getElementById("guess-taken").innerHTML = guessTaken;

//this if statement compares the user's guess to the computers pick, if it is correct you win, you run out of tries you lose
       if (userGuess === compChoice){
           correct++;
           document.getElementById("user-wins").innerHTML = correct;
           alert("Correct! You must be psychic");
           resetGame();
       }
       else{
           guessesRemain--;
           document.getElementById("guess-remain").innerHTML = guessesRemain;
           if(guessesRemain === -1)
           {  
            alert("Sorry you lose!");
            incorrect++;
            document.getElementById("user-losses").innerHTML = incorrect;
            resetGame();
           }
       }
   }
   };

computerPick();