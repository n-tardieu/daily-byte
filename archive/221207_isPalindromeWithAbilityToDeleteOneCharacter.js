// This question is asked by Facebook. 
// Given a string and the ability to delete at most one character, 
// return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

const isPalindromeWithAbilityToDeleteOneCharacter = (string) => {
    let isPalindrome = false

    for (let index = 0; index < string.length; index++) {
        let sequence = string
        if (index !== 0) {
            sequence = string.slice(0, index - 1) + string.slice(index, string.length)
        }
        const reverseStr = sequence.split('').reverse().join('');
        if (sequence === reverseStr) {
            isPalindrome = true
            break;
        }
    }

    return isPalindrome

}

const sequenceOfCharacters = "foobof"
console.log(`For my sequenceOfCharacters "${sequenceOfCharacters}" isPalindromeWithAbilityToDeleteOneCharacter() return : ${isPalindromeWithAbilityToDeleteOneCharacter(sequenceOfCharacters)}`);