 // * letter Constructor
 var Letter = function (letter) {
   this.letter = letter;
   this.isGuessed = false;

   // ? this function takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
   this.guessLetter = function (letterGuess) {
     this.guess = letterGuess;
     if (this.guess === this.letter) {
       console.log('\t\tthe guess is: \t' + this.guess);
       console.log('\t\tyou guessed correctly\n');
       this.isGuessed = true;
     } else {
       console.log('\t\tthe guess is: \t' + this.guess);
       console.log('\t\tyou are incorrect\n');
       this.isGuessed = false;
     }
     this.showLetter();
   };

   // ? this function returns the character if the letter has been guessed, or an underscore if the letter has not been guessed
   this.showLetter = function () {
     if (this.isGuessed === true) {
       console.log("\t\t\t", this.letter, "\n");
     } else {
       console.log('\t\t\t_\n');
     }
   };
 }

 var letterB = new Letter('b');

 letterB.guessLetter('g');
 letterB.guessLetter('b');