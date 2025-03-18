function bubbleSort(arr) {
    let len = arr.length;
    // The outer loop runs `len` times. It represents the number of passes through the array.
    for (let i = 0; i < len; i++) {
        // The inner loop runs `len - i - 1` times. It represents the number of comparisons in each pass.
        for (let j = 0; j < len - i - 1; j++) {
            // If the current element is greater than the next element, swap them.
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    // After all passes, the array is sorted.
    return arr;
}

// Example usage
const array = [5, 3, 8, 4, 2];
console.log(bubbleSort(array)); // Output: [2, 3, 4, 5, 8]



