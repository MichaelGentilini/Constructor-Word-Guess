var Letter = require("./Letter");

var Word = function (word) {
  this.word = word.split("");
  this.letterArray = [];
  this.newWord = [];

  for (var i = 0; i < this.word.length; i++) {
    this.letterArray.push(new Letter(this.word[i]));
  }
};

// ? A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.toString = function (guess) {
  this.guess = guess;
  for (var j = 0; j < this.word.length; j++) {
    if (this.word[j] === ' ') {
      console.log(' ');
    }
    this.newWord.push(this.letterArray[j].guessLetter(guess));
  }
  console.log("\t\t" + this.newWord.join(" ").toString());
};

// ? A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.wordGuess = function (guess) {
  for (var k = 0; k < this.word.length; k++) {
    if ((this.letterArray[k].showLetter(guess) !== '_') && (this.letterArray[k].showLetter(guess) !== ' ')) {
      this.newWord.splice(k, 1, guess)
    }
  };

  // if (this.newWord.join(" ").toString() == this.word.join(" ").toString()) {
  //   console.log('\t\t\t\t 🌠 Awesome Job!');
  //   console.log('\tThe answer is: ' + this.newWord.join(" ").toString())
  // } else {
  //   console.log('\tSo far you have: ' + this.newWord.join(" ").toString())
  // }
  // return this.newWord;

};



module.exports = Word;