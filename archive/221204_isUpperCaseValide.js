// This question is asked by Google. Given a string
// return whether or not it uses capitalization correctly. 
// A string correctly uses capitalization if all letters are capitalized, 
// no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true


const isUpperCaseValide = (string) => {
    const str = string.split("")
    
    const isUpperCaseArray = str.map(element => {
        if (element.toUpperCase() == element) return true
        return false
    })

    const isFistLetterHasUpperCase = isUpperCaseArray[0]
    const withoutFistLetterArray = isUpperCaseArray.slice(1)

    return withoutFistLetterArray.every((isUpperCaseletter) => {
        if (isFistLetterHasUpperCase == true) {
            if (isUpperCaseletter == withoutFistLetterArray[0]) return true
            return false
        } else {
            if (isUpperCaseletter == false) return true
            return false
        }
    })
}

const sequenceOfLetter = "computer"
console.log(`For my sequenceOfLetter "${sequenceOfLetter}" isUpperCaseValide() return : ${isUpperCaseValide(sequenceOfLetter)}`);