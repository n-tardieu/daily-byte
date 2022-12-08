// This question is asked by Google. Given a string,
// reverse all of its characters and return the resulting string.
// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

const reverseString = (string) => {
    return string.split("").reverse().join("");
}

const stringToReverse = "The Daily Byte"
console.log(`My string "${stringToReverse}" reverse is : "${reverseString(stringToReverse)}"`);