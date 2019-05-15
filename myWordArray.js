// console.log('hello');

var myWordArray = [];
var myWord = 'Twisted Sister';

var myDogSplit = myWord.toLowerCase().split(' ').join('');
var myDogSplit2 = myWord.toLowerCase().split(' ').join('#');
// console.log(my)
console.log(myDogSplit);
for (var index = 0; index < myDogSplit.length; index++) {
  myWordArray.push(myDogSplit[index])
};

console.log(myDogSplit);
console.log("2", myDogSplit2);
console.log(myWordArray);

var myGuess = function (guess, myWordArray) {
  if (myWordArray.indexOf(guess) !== 0) {

    // console.log(guess);
    // console.log(myWordArray.indexOf(guess));
    console.log('_')
  } else {
    console.log(guess);
  }
}
for (var k = 0; k < myDogSplit.length; k++) {

  // myGuess('s', myWordArray[k])
  myGuess('t', myWordArray[k])
}