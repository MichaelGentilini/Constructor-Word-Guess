var Letter = require('./Letter');


var Word = function (word) {
  this.word = word;
  console.log('this is the word:', this.word);
  this.word = word.split('');
  console.log('this.word after split: ', this.word);

  this.letterArray = [];

  this.newWord = [];

  for (var i = 0; i < this.word.length; i++) {
    this.letterArray.push(new Letter(this.word[i]));
  }



  // console.log("\n\t\t\tThis is the current letterArray", this.letterArray, "\t\t\t\t");
}

// ? A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.toString = function (guess) {

  !console.log('\n\tstring looks like this before:', this.word.join('', '\n'));


  for (var j = 0; j < this.word.length; j++) {
    this.newWord.push(this.letterArray[j].guessLetter(guess));
    this.newWord.push(this.letterArray[j].letter);
  }

  this.newWord = this.newWord.join('').toString();
  console.log('\n\tNEW string after guessing "' + guess + '": ' + this.newWord);
  console.log('\n');
}



// ? A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.wordGuess = function (letter) {
  console.log('this is the word:', this.word.join(''));
  // console.log(this.letterArray);

  for (var k = 0; k < this.word.length; k++) {
    // console.log(this.word[k]);
    console.log(this.letterArray[k]);
    console.log(this.letterArray[k].showLetter());


    // console.log(this.letterArray[k].showLetter(letter));
    // console.log(this.letterArray[k].length);
    console.log(this.letterArray[k].letter);
    // console.log(this.letterArray[k].letter.showLetter());
    // this.newWord.push(this.letterArray[k].showLetter(letter));
    // this.newWord.push(this.letterArray[k].letter);

  }
  console.log('\n\tNEW string after guessing: "' + letter + '": ' + this.newWord.join('').toString());


}



var cat = new Word('the cat');

// cat.toString(' ');
// cat.toString(' ');

cat.wordGuess('c')

var letterC = new Letter('c');

// console.log(letterC);

// letterC.guessLetter('x');

// letterC.guessLetter('c');