function fishBash(n) {
  const results = [];

  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'fish';
    if (i % 5 === 0) output += (output ? ' ' : '') + 'bash';
    results.push(output || i);
  }

  return results; /// function mengembalikan nilai array agar lebih mudal dilakukan unit test
}

module.exports = fishBash; // Agar bisa di-import dalam file test

// console.log(fishBash(20));