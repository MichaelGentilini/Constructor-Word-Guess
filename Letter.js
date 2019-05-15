 // * letter Constructor
 var Letter = function (letter) {
   this.letter = letter;
   this.isGuessed = false;


   //  ? going to use this to make the space a * or other character to help identify
   //

   // ? this function takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
   this.guessLetter = function (guess) {
     this.guess = guess;
     //  console.log('\t\tthe guess is: \t"' + this.guess + '"\n');

     if (this.guess === this.letter) {
       //  console.log('\t\tyou are correct\n');
       this.isGuessed = true;
       //  return this.isGuessed;
     } else {
       //  console.log('\t\tyou are incorrect\n');

       this.isGuessed = false;
     }
     this.showLetter();
   };

   // ? this function returns the character if the letter has been guessed, or an underscore if the letter has not been guessed
   this.showLetter = function () {

     if (this.isGuessed === true) {
       console.log("\t\t\t", this.letter, "\n");
       return this.isGuessed;
       //  this.letter = this.letter;
       //  return this.letter;
       //  } else if (this.letter === ' ') {
       //    console.log(' ');
     } else {
       console.log('\t\t\t_\n');
       //  this.letter = '-';
       //  return this.letter;
     }
   };
 }

 var letterB = new Letter('b');

 //  console.log("The letter is " + letterB.letter);

 //  letterB.guessLetter('g');
 //  letterB.showLetter('a');
 //  letterB.guessLetter('b');
 //  letterB.guessLetter('c');


 module.exports = Letter;