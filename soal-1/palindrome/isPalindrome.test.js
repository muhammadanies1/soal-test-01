const isPalindrome = require('./isPalindrome');

test('should return true for palindromic string', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('should return false for non-palindromic string', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('should return true for single character string', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('should return true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
});

test('should return true for string with mixed case and spaces', () => {
    expect(isPalindrome('No lemon, no melon')).toBe(true);
});

test('should return false for string with special characters', () => {
    expect(isPalindrome('Hello, world!')).toBe(false);
});
