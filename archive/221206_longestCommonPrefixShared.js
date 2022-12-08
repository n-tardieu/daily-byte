// This question is asked by Microsoft. Given an array of strings
// return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

const longestCommonPrefixShared = (stringArray) => {
    let prefix = ''
    let reference = ''
    stringArray.forEach((string, index) => {
        if (index == 0) {
            reference = string
            prefix = string
        } else {
            let currentPrefix = ""
            for (let index = 0; index < string.length; index++) {
                if (string[index] == reference[index]) {
                    currentPrefix = currentPrefix + string[index]
                } else {
                    break;
                }
            }
            if (currentPrefix < prefix) {
                prefix = currentPrefix
            }
        }
    });
    return prefix
}

const stringArray = ["colorado", "color", "cold"]
console.log(`For my stringArray "${stringArray}" longestCommonPrefixShared() return : ${longestCommonPrefixShared(stringArray)}`);