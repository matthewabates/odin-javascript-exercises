const palindromes = function (word) {
    word = word.toLowerCase()    
    letters = word.split("").filter(isAlphaNumerical)
    return letters.join('') === letters.reverse().join('')
};

function isAlphaNumerical(c) {
    return 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(c) 
}

// Do not edit below this line
module.exports = palindromes;
