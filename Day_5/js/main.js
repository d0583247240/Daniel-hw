// var input = prompt("please input a full name").toLowerCase()
// var array = input.split("")
// var vowels = []
// var consonant = [ ]

// for( var i = 0; i< array.length; i++){
//  ( array[i]=='a' ||array[i]=='e' ||array[i]=='i'||array[i]=='o'||array[i]=='u') ? vowels.push(array[i]) : consonant.push(array[i])

 
// }
// console.log(vowels.sort());
// console.log(consonant.sort());
// console.log(vowels);

// var message = `your string contains the following vowels ${vowels}. and the following consonats: ${consonant}`
// function printLetters(array,type) {
//   alert(message)
// }
// printLetters(vowels,"vowels")
// printLetters(consonant,"consonants")






var string = prompt("enter your name").toUpperCase().split("")
string.sort()
const obj = { }
obj.letter = "A"
obj.amount = 1
console.log(obj);
console.log(string);























// var text = prompt("Enter your name") 
//   .toUpperCase() 
//   .replaceAll(" ", "") 
//   .split("") 
//   .sort(); 

// function buildMeAnObjectForMyLetterPleaseAndThankYou(char) {
//   const obj = {}
//   obj.letter = char;
//   obj.qty = 1;
//   return obj;
// }

// const FinalArray = [];
// FinalArray.push(buildMeAnObjectForMyLetterPleaseAndThankYou(text[0]));

// for(let i = 1; i < text.length; i++) {
//   var letter = text[i];
//   var lastObj = FinalArray[FinalArray.length-1]; 
//    if(letter == lastObj.letter) {
//     lastObj.qty++
//   } else {
//     FinalArray.push(buildMeAnObjectForMyLetterPleaseAndThankYou(letter));
//   }
// }

// console.log(FinalArray)
