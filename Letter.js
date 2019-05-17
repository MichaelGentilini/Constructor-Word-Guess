 // * letter Constructor
 var Letter = function (letter) {
   this.letter = letter.toLowerCase();
   this.isGuessed = false;

   // ? this function takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

   //  ! with this function the beginning letters word will be shown without letters

   this.guessLetter = function (guess) {
     this.guess = guess;

     if (this.guess === this.letter) {
       this.isGuessed = true;
       return this.letter;

     } else if (this.letter === ' ') {
       return ' ';

     } else {
       this.isGuessed = false;
       return '_';
     }
   };

   // ? this function returns the character if the letter has been guessed, or an underscore if the letter has not been guessed
   this.showLetter = function (guess) {
     this.guess = guess;

     if (this.guess === this.letter) {
       this.isGuessed = true;
       return this.letter;

     } else if (this.letter === ' ') {
       return ' ';

     } else {
       this.isGuessed = false;
       return '_';
     }
   }
 }

 //  var letterB = new Letter('b');

 //  letterB.guessLetter('c');
 //  letterB.showLetter('a');



 module.exports = Letter;