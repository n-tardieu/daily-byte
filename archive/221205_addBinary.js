// This question is asked by Apple. Given two binary strings 
// (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"


const addBinary = (str1, str2) => {
    const len1 = str1.length
    const len2 = str2.length
    const max = Math.max(len1, len2);

    let res = '';
    let carry = 0;
    let val = 0;

    for (var i = 0; i < max; i++) {
        val = Number(str1[len1 - 1 - i] || 0) + Number(str2[len2 - 1 - i] || 0) + carry;
        carry = Math.floor(val / 2);
        res = (val % 2) + res;
    }

    if (carry) res = 1 + res;
    return res;
}

const sequenceOfBinary1 = "1001"
const sequenceOfBinary2 = "11"
console.log(`${sequenceOfBinary1} + ${sequenceOfBinary2} = ${addBinary(sequenceOfBinary1, sequenceOfBinary2)}`);