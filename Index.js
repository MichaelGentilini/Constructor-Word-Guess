// External Packages
var inquirer = require("inquirer");

// Internal Module
var Word = require("./Words");

// ? Array and Local Variables for Game
var answers = [
  "rattlesnake stew",
  "meatloaf",
  "macaroni and cheese",
  "scrapple",
  "rocky mountain oysters",
  "muffuletta",
  "Turducken",
  "movie theater popcorn",
  "new England clam chowder",
  "thanksgiving turkey",
  "burgoo",
  "fried alligator",
  "lobster roll"
];

var answerCount = 0,
  guessCount = 15,
  usedGuess = [];

// ! Play the Game

console.log("\t\t<-----  Can You Guess These American Delicacies? ----->\n");

//?  This displays the word with dashes to start the game
function question() {
  if (answerCount < answers.length) {
    answer = new Word(answers[answerCount]);
    answer.toString();
    guessWord();
  } else {
    console.log("\n\n\t\t<----- Thanks for playing!!  ----->");
  }

  // ? this function takes in the user guess, checks that it is a letter and runs the game
  function guessWord() {
    inquirer
      .prompt([{
        name: "guess",
        message: "Enter any letter: ",
        validate: function checkInput(name) {
          var reg = /^[a-z]$/;
          return reg.test(name) || "please enter a letter between 'a' and 'z'"
        }
      }])
      .then(function (input) {
        if (usedGuess.indexOf(input.guess) >= 0) {
          usedGuessCount++;
        }
        guessCount--;
        console.log("\n\t" + guessCount + " guessess remaining!\n");
        answer.wordGuess(input.guess);
        console.log("\t\t" + answer.newWord.join(" ").toString() + "\n");

        if (answer.word.join("") === answer.newWord.join("")) {
          console.log("\tYUMMO!!  🍴  Doesn't that make you hungry?");
          console.log("\n\t🎯\tgive this one a shot!\t🎯");
          answerCount++;
          guessCount = 15;
          question();
        } else {
          nextQuestion();
        }
      });

    // ? This function keeps track of the guess count and introduces new questions
    function nextQuestion() {
      if (guessCount > 0) {
        guessWord();
      } else {
        console.log("<----- the word was '" + answer.word.join("") + " ----->\n");
        answerCount++;
        guessCount = 15;
        question();
      }
    }
  }
}

question();