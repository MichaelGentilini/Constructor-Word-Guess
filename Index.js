// External Packages
var inquirer = require('inquirer');

// Internal Module
var Word = require("./Words");

// Local Variables for Game
var answers = ["scrapple", "rocky mountain oysters", "Rattlesnake stew with Tomatoes and Pizza", "Muffuletta", "Turducken", "Movie theater popcorn", "New England clam chowder", "Thanksgiving turkey"];
var answerCount = 0;
var guessCount = 10;
var guessWord;
var answer;

// ! Play the Game

// Display Welcome
console.log('\t\t*****  Welcome to American Delicacy Trivia *****\n')

// Display Blank letters for the first word!


// var answer0 = new Word(answers[1]);
// answer0.toString();

function question() {
  if (answerCount !== answers.length) {
    answer = new Word(answers[answerCount]);
    answer.toString();
    guessWord();
  } else {
    console.log('all out of questions');
  }


  function guessWord() {
    inquirer
      .prompt([{
        name: 'guess',
        message: "Enter any letter: ",
      }]).then(function (input) {
        guessCount--;
        console.log("\n\t" + guessCount + " guessess remaining!\n");
        answer.wordGuess(input.guess);
        console.log("\t\t" + answer.newWord.join(" ").toString() + "\n")
        nextQuestion();
      });

    function nextQuestion() {
      if (guessCount > 0) {
        guessWord();
      } else {
        console.log("*** the word was '" + answer.word.join('') + "\n");
        answerCount++
        guessCount = 0;
        question();
      }
    }
  }
}

question();