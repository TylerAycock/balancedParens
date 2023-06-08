// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."


// Write your solution below:

const balanced = str =>{
    let parenCount = 0
    for(let i=0; i<str.length; i++){
        if (str[i]===`(`){
            parenCount++
        } else if (str[i]===`)`){
            parenCount--
        }
    } if (parenCount <0){
        return false
    }
    return parenCount === 0
}


console.log(balanced(sample3))

const balancedBrackets = str =>{
    brackets = {
        paranthesis: [0,0],
        squareBrackets: [0,0],
        curlyBraces: [0.0]
    }
    for (let i = 0; i<str.length; i++){
        if(str[i] === `(` || str[i]===`)`){
            if (str[i]===`(`){
                brackets[`parenthesis`][0]++
            }else {
                bracekts[`parenthesis`][1]++
            }
        }else if (str[i]===`[` || str[i]===`]`){
            if (str[i]===`[`){
                brackets[`squareBracekts`][0]++
            }else {
                bracekts[`squareBrackets`][1]++
            }
        } else if (str[i]===`{`|| str[i]===`}`){
            if (str[i]===`{`){
                brackets[`curlyBraces`][0]++
            }else {
                bracekts[`curlyBraces`][1]++
            }
        }
    }
}

