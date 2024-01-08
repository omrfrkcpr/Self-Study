/* 
Task 1: Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

 1. Access each of the letters inside the passed in word using the counter variable, with word[i]. 
 2. Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

Your output should be the following:

Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3

*/

function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");
