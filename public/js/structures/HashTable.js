/**
 * Insert - O(1)
 * Deletion - O(1)
 * Access - O(1)
 *
 * Uses Separate chaining
 */
export default class HashTable {
    constructor(size = 53) {
        this.WEIRD_PRIME = 31;
        this.keyMap = new Array(size);
    }
    set(key, value) {
        const index = this.hash(key);
        // Allows duplicate keys
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        if (this.keyMap[index]) {
            const item = this.keyMap[index].find(item => key === item[0]);
            return item ? item[1] : undefined;
        }
        return undefined;
    }
    keys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }
    values() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * this.WEIRD_PRIME + value) & this.keyMap.length;
        }
        return total;
    }
}
//# sourceMappingURL=HashTable.js.map