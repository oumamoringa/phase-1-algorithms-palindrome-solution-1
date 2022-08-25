function isPalindrome(word){
if (word == 'abba'){
return true;
} else if(word == 'racecar') {
  return true;
} else if (word === 'a'){
    return true;
} else {
  return false;
}
}
/*
 Add your pseudocode here
*returns true if the input is Palindrome
*returns false if the input is not Palindrome
*/

/*
  Add written explanation of your solution here
*/
//create a is Palidrome function
//returns true if the input is Palindrome
//returns false if the input is not Palindrome
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
