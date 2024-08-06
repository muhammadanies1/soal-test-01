function isPalindrome(str) {
  // Menghapus spasi dan mengubah semua huruf menjadi huruf kecil untuk pemeriksaan case-insensitive
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
          return false;
      }
      left++;
      right--;
  }

  return true;
}

module.exports = isPalindrome;

// console.log(isPalindrome('A man a plan a canal Panama')); // true
// console.log(isPalindrome('hello')); // false