import {describe, expect, it} from '@jest/globals';
import HashTable from '../../src/structures/HashTable';

describe('HashTable', () => {
  const hash = new HashTable();

  it('should set values correctly in the hash table', function() {
    hash.set('hello', 'world');
    hash.set('die', 'hard');
    hash.set('jurassic', 'park');
    hash.set('ping', 'pong');
    hash.set('classic', 'pong');

    expect(hash.keyMap[0].length).toEqual(1);
    expect(hash.keyMap[32].length).toEqual(2);
    expect(hash.keyMap[48].length).toEqual(1);
    expect(hash.keyMap[52].length).toEqual(1);
  });

  it('should get values correctly in the hash table', function() {
    expect(hash.get('hello')).toEqual('world');
    expect(hash.get('die')).toEqual('hard');
    expect(hash.get('jurassic')).toEqual('park');
    expect(hash.get('ping')).toEqual('pong');
    expect(hash.get('classic')).toEqual('pong');
    expect(hash.get('humpty')).toBeUndefined();
  });

  it('should get all the keys in the hash table', function() {
    const expected = ['classic', 'hello', 'die', 'ping', 'jurassic'];
    expect(hash.keys()).toEqual(expected);
  });

  it('should get all the values in the hash table', function() {
    const expected = ['pong', 'world', 'hard', 'park'];
    expect(hash.values()).toEqual(expected);
  });
});