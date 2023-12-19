const dnaPairs = require('../dna-pairs/dna-pairs.js');

describe('dnaPairs', () => {
  test('return empty array', () => {
    expect(dnaPairs([])).toEqual([])
  })
  test('return DNA pairs', () => {
    expect(dnaPairs('G')).toEqual([['G', 'C']])
  })
  test('return longer DNA pairs', () => {
    expect(dnaPairs("ATAG")).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]])
  })
});

