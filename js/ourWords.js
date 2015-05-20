
//all of this happens before user starts
var ourWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];

//setting up filter to keep out words that are 3 or less than 3 letters
function largeWords(words) {
     return words.length >= 3;
}

//calling the function for large words to filter ourWords array
var bigWords = ourWords.filter(largeWords);

// picking a random word from the filtered array and using its index
var randomWords = gameWords();

/* this function is picking the address of the Index (the Index is the address of the
 * person, which is the word in the array). (the array is like a neighborhood). (the
 * array is the group of filtered words kept.)
 */
function gameWords() {
     return bigWords[Math.floor(Math.random() * bigWords.length)];
}

//showing the chosen random word in the console
console.log(randomWords);

//splitting up the letters from the random word
var displayWord = randomWords.split('');

//displaying a dash on the random letters like this ['_','_','_']
var dashedWord = displayWord.map(function(ch){
  return '_';
});

//create a string from displayWord and add spaces in between each word like this "_ _ _"
var finalDisplay = dashedWord.join(' ');

//displaying finalDisplay in the HTML doc class .hidden-word-display
document.querySelector('.hidden-word-display').textContent = finalDisplay;

var counter = document.querySelector(".guesses-left").textContent= 6;

var userGuess;

var input = document.querySelector(".user-input").textContent = "";

var blank = finalDisplay;

function guess(letterGuess) {
  userGuess = letterGuess;
}


//function for when guess button is checked
function checkGuess() {
  for (var i = 0; i < randomWords.length; ++i) {
    if (userGuess === displayWord[i]) {
      dashedWord[i] = userGuess;
    }
  }

  //if user guess is wrong, they are decremented a guess
  if(randomWords.indexOf(userGuess) === -1) {
    document.querySelector(".guesses-left").textContent = --counter;
    //if user runs out of guesses, it runs the alert below and refreshes page
    if(counter <= 0) {
    alert("So fun, right?! Try again!");
    window.location.reload();
  };
}

  //resets input to a blank space
  document.querySelector(".user-input").value = "";
  //displays
  finalDisplay = dashedWord.join(' ');
  document.querySelector(".hidden-word-display").textContent = finalDisplay;
};
  if(hidden-word-display === dashedWord.join){
  alert("You win!");
};


////////reset game////////////////////
// }else{
//   (userGuess >= "restart");
//   window.location.reload
// function restartGame() {
//
// document.getElementById('restart').onclick = function();
//   document.location.href(" ");
// };

// var restart = document.querySelector.location.href(" ");
//
//
// function restartGame() {
//   if(userClickRestart === document.location.href(" "){
//
//   }
//
// };

///////////////end of reset/////////////

//this breaks the game
// $('reset-button').click(function(){
//   location.reload();
// });

//these alerts go off before the user guesses- in other words, it's broken
// alert(displayWord.join(" "));
// alert("You did it, nice job smarty pants! The word was " + displayWord);






// function declaresWin() {
//   alert(userGuess.finalDisplay.join("Nice!"));
// }

// function respondsToUser() {
//      return var word = "the";
//
// }
//
// function checkLetter() {
// make array of randomWord
// if user guess === an item of array {
//   return user guess
// }  else {
//   decreaseNumberOfLives();
//   return userguess in wrongGuessBox
// }
//
// }
//
// function updateWithMatchingGuess() {
//
// }
//
// function decreaseNumberOfLives() {
//
// }
//
// function declaresWin() {
//   alert("You did it, nice job!")
// }
//
// function declaresLose() {
//   alert("Sorry, try again later.")
// }

// document.querySelector('.turn-count').textContent = '7';
// document.querySelector('.game-word').textContent = '_ _ _ _ _ _';

// var word = "ourWords";
// var userGuess;
// var dashedWord = ['_', '_', '_'];
//
// function updateDashDisplay(arrayToDisplay){
//   var theText = arrayToDisplay.join('');
//   document.querySelector('.dash-display')
//   .textContent = theText;
// }
// function setGuess(guessInputValue) {
//   userGuess = guessInputValue.toLowerCase(
//
//   );
// }
//
// updateDashDisplay(dashedWord)
