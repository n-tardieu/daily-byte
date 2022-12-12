// This question is asked by Amazon. 
// Given a string representing your stones and another string representing a list of jewels, 
// return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

const followingJewelsAndStone = (stones, jewels) => {
    let count = 0
    stones.split('').forEach(stones => {
        jewels.split('').forEach(jewel => {
            if (stones === jewel) {
                count++
            }
        })
    });
    return count
}

const sequenceOfStones = "Af"
const sequenceOfJewels = "AaaddfFf"
console.log(`For my sequenceOfStones && sequenceOfJewels followingJewelsAndStone() return : ${followingJewelsAndStone(sequenceOfStones, sequenceOfJewels)}`);