import {describe, expect, it} from '@jest/globals';
import {isValid} from '../../../../src/problems/hackerrank/String Manipulation/SherlockAndTheValidString';

describe('Sherlock and the Valid String', () => {
  it('should determine if it is valid. If so, return YES, otherwise return NO.',
      function() {
        const tests = [
          {
            s: 'aabbcd',
            expected: 'NO',
          },
          {
            s: 'aabbccddeefghi',
            expected: 'NO',
          },
          {
            s: 'abcdefghhgfedecba',
            expected: 'YES',
          },
          {
            s: 'aaaabbcc',
            expected: 'NO',
          },
          {
            s: 'aabbc',
            expected: 'YES',
          },
          {
            s: 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd',
            expected: 'YES',
          },
          {
            s: 'aaaaabc',
            expected: 'NO',
          },
        ];

        tests.forEach(test => expect(isValid(test.s)).toEqual(test.expected));
      });
});