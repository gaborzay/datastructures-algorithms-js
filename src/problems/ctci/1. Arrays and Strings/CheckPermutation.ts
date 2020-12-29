/**
 * 1.2 Check Permutation: Given two strings, write a method to decide if one is
 * a permutation of the other.
 */
export default class CheckPermutation {
    /**
     * Using a dictionary to count frequencies
     * Space complexity: O(n)
     * Time complexity: O(n)
     * @param str1
     * @param str2
     */
    withFrequencies(str1: string, str2: string): boolean {
        // If the strings are different lengths, then they cannot permutations
        if (str1.length !== str2.length) return false;
        // Could use a dictionary to keep track of each count of letters
        // then compare dictionaries
        const dict1 = CheckPermutation.countFrequencies(str1);
        const dict2 = CheckPermutation.countFrequencies(str2);
        // iteration over all the values in the dictionary and compare values
        for (let char in dict1) {
            // if not equal, then return false, otherwise continue
            if (dict1[char] !== dict2[char]) return false;
        }
        return true;
    }

    /**
     * Space complexity: O(n)
     * Time complexity: O(n*log(n))
     * @param str1
     * @param str2
     */
    withSorting(str1: string, str2: string): boolean {
        // If the strings are different lengths, then they cannot permutations
        if (str1.length !== str2.length) return false;
        // sort the strings
        const comparator = (a: string, b: string) => {
            return a.charCodeAt(0) - b.charCodeAt(0);
        }
        const str1sorted: Array<string> = str1.split('').sort(comparator);
        const str2sorted: Array<string> = str2.split('').sort(comparator);
        // then compare the strings
        for (let char in str1sorted) {
            if (str1sorted[char] !== str2sorted[char]) return false;
        }
        return true;
    }

    /**
     * Space complexity: O(n)
     * Time complexity: O(n)
     * @param str
     * @private
     */
    private static countFrequencies(str: string): object {
        const dict = {}
        // for each letter in the string, we want to count the frequencies
        for (let char of str) {
            if (dict.hasOwnProperty(char)) {
                dict[char]++;
            } else {
                dict[char] = 1;
            }
        }
        return dict;
    }
}