// This question is asked by Amazon. 
// Given a string representing the sequence of moves a robot vacuum makes, 
// return whether or not it will return to its original position. 
// The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

const isOriginalPosition = (string) => {
    const actions = string.split("")

    let leftRight = 0
    let topBottom = 0

    actions.forEach(position => {
        if (position == 'L') leftRight = leftRight + 1;
        else if (position == 'R') leftRight = leftRight - 1;
        else if (position == 'U') topBottom = topBottom + 1;
        else if (position == 'D') topBottom = topBottom - 1;
    });

    if (leftRight === 0 && topBottom === 0) return true
    return false
}

const sequenceOfMoves = "URURD"
console.log(`For my sequenceOfMoves "${sequenceOfMoves}" isOriginalPosition() return : ${isOriginalPosition(sequenceOfMoves)}`);