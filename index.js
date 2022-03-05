function isPalindrome(word) {
  const wordArray = word.split('');
  const reversedArray = [];
  wordArray.forEach((letter) => {
    reversedArray.unshift(letter);
  });
  if (word === reversedArray.join('')) {
    return true;
  } else {
    return false;
  }
}

/* 
  stringBackwards = string.backwards (slice with negative step?)

  if string === string.backwards {return true}
  else {return false}
*/

/*
  function that returns true if arument(string) is 
  identical if read backwards, otherwise returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
