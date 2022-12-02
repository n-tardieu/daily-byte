// This question is asked by Facebook. Given a string, 
// return whether or not it forms a palindrome ignoring case and non-alphabetical characters.

// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

const isPalindrome = (string) => {
    var regex = /[^A-Za-z0-9]/g;

    var lowRegStr = string.toLowerCase().replace(regex, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const sequenceOfCharacters = "level"
console.log(`For my sequenceOfCharacters "${sequenceOfCharacters}" isPalindrome() return : ${isPalindrome(sequenceOfCharacters)}`);