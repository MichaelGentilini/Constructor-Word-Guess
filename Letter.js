var Letter = function (letter) {
  this.letter = letter;
  this.guessed = false;
  // ? A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.guessLetter = function (letterGuess) {
    this.guess = letterGuess;
    if (this.guess === this.letter) {
      console.log('the guess is: \t' + this.guess);
      console.log('you guessed correctly\n');
      this.guessed = true;
    } else {
      console.log('the guess is: \t' + this.guess);
      console.log('you are incorrect\n');
      this.guessed = false;
    }
    this.showLetter();
  };


  // ? A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.showLetter = function () {
    if (this.guessed === true) {
      console.log(this.letter);
    } else {
      console.log('_');
    }
  };

}



// var letterA = new Letter('a');
var letterB = new Letter('b');
// var letterC = new Letter('c');
// letterA.showLetter();
// letterB.showLetter('g');
letterB.guessLetter('g');

// letterB.showLetter('b');
letterB.guessLetter('b');
// letterB.showLetter('b');