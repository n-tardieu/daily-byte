// This question is asked by Facebook. 
// Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// Ex: Given the following strings...

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false
const isAnagram = (s, t) => {
    const x = s.split('').sort()
    const y = t.split('').sort()

    if (x.length == y.length) {
        for (let index = 0; index < x.length; index++) {
            if (x[index] !== y[index]) {
                return false
            }
        }
        return true
    }
    return false
}

const s = "listen"
const t = "silent"
console.log(`For params "${s}" and "${t}" isAnagram() return : ${isAnagram(s, t)}`);