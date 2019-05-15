var Letter = require("./Letter");

var Word = function (word) {
  this.word = word.trim();
  console.log("this is the word:", this.word);
  this.word = word.split("");
  console.log("this.word after split: ", this.word);

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
    this.letter = this.letterArray[j].letter;
    // console.log(this.guess);
    console.log(this.letter);
    // !- > this works to skip over the spaces >>> >
    if (this.word[j] === ' ') {

      console.log(' ');
    }
    // console.log('this letter is: ' + this.word[j]);
    // console.log(this.letterArray[j]);
    // console.log('this.guessletter', this.letterArray[j].letter);
    this.newWord.push(this.letterArray[j].guessLetter(guess));
    this.newWord.push(this.letterArray[j].letter);
    // console.log(this.letterArray[j].guessLetter(guess));
  }

  // console.log(this.newWord);

  this.newWord = this.newWord.join("").toString();
  // console.log(this.newWord);
  console.log('\n\tNEW string after guessing "' + guess + '": ' + this.newWord);
};




// ? A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.wordGuess = function (letter) {
  // console.log("this is the word:", this.word.);
  console.log(this.letterArray);
  this.guess = letter;
  console.log("guess", this.guess);
  this.finalArray = [];
  for (var k = 0; k < this.word.length; k++) {
    // console.log(this.word[k]);
    // this.letter = this.letterArray[k].letter;
    // // console.log(this.letter);
    // // console.log(this.letterArray[k].letter);
    // console.log(this.letterArray[k].showLetter());

    // // this.finalArray.push(this.letterArray[k].showLetter());

    // this.finalArray.push(this.letterArray[k].letter);
    // console.log(this.letterArray[k].showLetter());
    // console.log(this.letterArray[k].length);
    // console.log(this.letterArray[k].letter);
    // console.log(this.letterArray[k].letter.showLetter());
    // this.newWord.push(this.letterArray[k].showLetter(letter));
    // this.newWord.push(this.letterArray[k].letter);
  }
  console.log(
    '\n\tNEW string after guessing: "' +
    letter +
    '": ' +
    this.newWord.join("").toString()
  );

  // console.log(this.finalArray);
};

var cat = new Word("twisted sister");

cat.toString('t');
// cat.toString(" ");

// cat.wordGuess("t");

var letterC = new Letter("c");

// letterC.guessLetter("c");