// https://www.hackerrank.com/challenges/two-characters/problem

export function alternate(s) {
    let maxSize = 0;
    let dict = [];
    // Find all the letters in the string
    s.forEach(letter => {
        if (!dict.hasOwnProperty(letter)) {
            dict[letter] = true;
        }
    });
    // If there is less than two types, then return 0
    // Remove all but two types of characters
    // Check if valid string
    // if yes, withFrequencies if maximum size is greater than current
    // if no, continue on
    return maxSize;
}