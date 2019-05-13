var Letter = require('./Letter');


var Word = function (word) {

  this.word = word.split('');
  console.log(this.word, '\n');
  this.letterArray = [];
  for (var i = 0; i < this.word.length; i++) {

    // this.i = new Letter(this.word[i]);
    this.letterArray.push(new Letter(this.word[i]));
    // console.log(this.letter[i]);
    // console.log(this.word[i]);
    // console.log(this.i);
  }
  console.log(this.letterArray);
}




// ? A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.toString = function () {
  console.log('\nthe string looks like:', this.word.join('').toString(), '\n');

  for (var j = 0; j < this.word.length; j++) {
    this.letterArray[j].guessLetter('t');
    // this.word[j].guessLetter();
    // console.log(this.word[j]);
  }
  // for (i = 0; i < this.word.letter.length; i++) {
  //   //     console.log(this.word.letter[i])
  //   //     // this.word.letter[i].guessLetter('c');

  // }

}

// ? A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



var cat = new Word('the cat');

cat.toString();

var letterC = new Letter('c');

// letterC.guessLetter('x');

// letterC.guessLetter('c');