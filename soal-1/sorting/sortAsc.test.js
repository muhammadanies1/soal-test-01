const quickSortAscending = require('./sortAsc');

test('quickSortAscending should return sorted array for mixed values', () => {
    expect(quickSortAscending([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});

test('quickSortAscending should handle already sorted array', () => {
    expect(quickSortAscending([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('quickSortAscending should handle array sorted in reverse order', () => {
    expect(quickSortAscending([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('quickSortAscending should handle array with duplicate values', () => {
    expect(quickSortAscending([5, 3, 8, 3, 2])).toEqual([2, 3, 3, 5, 8]);
});

test('quickSortAscending should handle empty array', () => {
    expect(quickSortAscending([])).toEqual([]);
});

test('quickSortAscending should handle single element array', () => {
    expect(quickSortAscending([1])).toEqual([1]);
});