/**
 * https://www.hackerrank.com/challenges/flipping-bits/problem
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param N
 */
export function flippingBits(N) {
  const INTEGER_LENGTH = 32;
  // Convert it to 32 bit binary
  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  // Flip the bits
  function flipBits(bin) {
    let bits = (new Array(INTEGER_LENGTH)).fill('1');

    for (let i = 0, n = bin.length; i < n; i++) {
      if (bin.charAt(i) === '1') {
        bits[INTEGER_LENGTH - n + i] = '0';
      }
    }

    return bits.join('');
  }

  // Convert it to decimal
  function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
  }

  return parseInt(bin2dec(flipBits(dec2bin(N))));
}