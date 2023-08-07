function computeAverageLengthOfWords(word1, word2) {
    const length1 = word1.length;
    const length2 = word2.length;
    const averageLength = (length1 + length2) / 2;
    return {averageLength, isEven: averageLength % 2 === 0}; 
}

console.log(computeAverageLengthOfWords("whats", "up"))
console.log(computeAverageLengthOfWords("hola","goat"))
console.log(computeAverageLengthOfWords("fire", "real"))
