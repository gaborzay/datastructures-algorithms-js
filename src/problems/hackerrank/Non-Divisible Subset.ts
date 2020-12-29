// https://www.hackerrank.com/challenges/non-divisible-subset/problem

export function nonDivisibleSubset(k: number, s: [number]) {
    const remainders = s.map(i => i % k);
    const frequency = remainders.reduce((accumulator: [], currentValue: number) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++;
        } else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, new Array(k));

    for (let item in frequency) {

    }

    return frequency;
}