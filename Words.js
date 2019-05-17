var Letter = require("./Letter");

var Word = function (word) {
  this.word = word.trim();
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

  !console.log("\n\tstring looks like this before:", this.word.join("", "\n"));

  for (var j = 0; j < this.word.length; j++) {
    if (this.word[j] === ' ') {
      console.log(' ');
    }
    this.newWord.push(this.letterArray[j].guessLetter(guess));
  }
  console.log('\n\tThe String Before Guessing: ' + this.newWord.join(" ").toString() + "\n");
  return this.word;
};

// ? A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.wordGuess = function (guess) {
  for (var k = 0; k < this.word.length; k++) {
    if ((this.letterArray[k].showLetter(guess) !== '_') && (this.letterArray[k].showLetter(guess) !== ' ')) {
      this.newWord.splice(k, 1, guess)
    }
  };
  if (this.newWord.join(" ").toString() == this.word.join(" ").toString()) {
    console.log('\t\t\t\t 🌠 Awesome Job!');
    console.log('\n\tThe answer is: ' + this.newWord.join(" ").toString() + "\n")
  } else {
    console.log('\n\tSo far you have: ' + this.newWord.join(" ").toString() + "\n")
  }
  return this.newWord;

};

var cat = new Word("twisted sister");

cat.toString(' ');

cat.wordGuess("r");
cat.wordGuess("s");
cat.wordGuess("w");
cat.wordGuess("i");
cat.wordGuess("t");
cat.wordGuess("e");
cat.wordGuess("d");

var letterC = new Letter("s");


module.exports = Word;