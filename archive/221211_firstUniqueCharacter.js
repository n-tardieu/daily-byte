// This question is asked by Microsoft. 
// Given a string, return the index of its first unique character. 
// If a unique character does not exist, return -1.

// Ex: Given the following strings...

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0

const firstUniqueCharacter = (string) => {
    for (let index = 0; index < string.length; index++) {
        const c = string.charAt(index);
        if (string.indexOf(c) == index && string.indexOf(c, index + 1) == -1) {
            return index
        }
    }
    return -1
}

const string = "abcabd"
console.log(`For params "${string}" firstUniqueCharacter() return : ${firstUniqueCharacter(string)}`);