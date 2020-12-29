/**
 * 1.1 Is Unique: Implement an algorithm to determine if a string has all unique
 * characters. What if you cannot use additional data structures?
 */
export default class IsUnique {
    /**
     * Space complexity: O(n)
     * Time complexity: O(n)
     * @param str
     */
    withDataStructures(str: string): boolean {
        // keep a dictionary of letters
        const dict = {};
        // for each letter in the string
        for (let char of str) {
            if (dict.hasOwnProperty(char)) return false;
            dict[char] = true;
        }
        // if it is not in the diction add the letter
        // return false if the letter is in the dictionary
        return true;
    }

    /**
     * Space complexity: O(1)
     * Time complexity: O(n^2)
     * @param str
     */
    withoutDataStructures(str: string): boolean {
        // withFrequencies for edge case where string is less than 2 characters
        const n = str.length;
        if (n < 2) return true;
        // need to use pointers
        // a current pointer and a look ahead pointer
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                // withFrequencies if for each iteration whether tail == head
                // if yes, then string is not unique, return false
                if (str.charAt(i) === str.charAt(j)) return false;
            }
        }
        // if no, then string is unique
        return true;
    }
}

