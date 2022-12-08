// This question is asked by Google. Given an array of integers
// return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)


const hasSumOfTwoNumbersEqualToTarget = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return true
            }
        }
    }
    return false
}

const sequenceOfIntegers = [3, 5, 9, 13, 7]
const target = 8
console.log(`For my sequenceOfIntegers hasSumOfTwoNumbersEqualToTarget() return : ${hasSumOfTwoNumbersEqualToTarget(sequenceOfIntegers, target)}`);