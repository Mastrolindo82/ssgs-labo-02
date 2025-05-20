const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
  it('inverte una stringa normale', () => {
    expect(reverseString('ciao')).toBe('oaic');
  });
  it('gestisce una stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });
  it('gestisce caratteri speciali', () => {
    expect(reverseString('a!b@c')).toBe('c@b!a');
  });
});

describe('isPalindrome', () => {
  it('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
  it('riconosce una stringa non palindroma', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });
  it('gestisce una stringa vuota come palindroma', () => {
    expect(isPalindrome('')).toBe(true);
  });
  it('distingue tra maiuscole e minuscole', () => {
    expect(isPalindrome('Anna')).toBe(false);
  });
  it('non considera gli spazi come ignorabili', () => {
    expect(isPalindrome('i topi non avevano nipoti')).toBe(false);
  });
});

describe('truncateString', () => {
  it('tronca una stringa più lunga della lunghezza massima', () => {
    expect(truncateString('abcdef', 4)).toBe('abcd');
  });
  it('restituisce la stringa originale se più corta della lunghezza massima', () => {
    expect(truncateString('abc', 5)).toBe('abc');
  });
  it('gestisce lunghezza massima zero', () => {
    expect(truncateString('abc', 0)).toBe('');
  });
  it('gestisce una stringa vuota', () => {
    expect(truncateString('', 3)).toBe('');
  });
});

describe('countCharacters', () => {
  it('conta i caratteri in una stringa semplice', () => {
    expect(countCharacters('banana')).toEqual({ b: 1, a: 3, n: 2 });
  });
  it('gestisce una stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });
  it('distingue tra maiuscole e minuscole', () => {
    expect(countCharacters('AaA')).toEqual({ A: 2, a: 1 });
  });
  it('conta caratteri speciali', () => {
    expect(countCharacters('a!a!')).toEqual({ a: 2, '!': 2 });
  });
});