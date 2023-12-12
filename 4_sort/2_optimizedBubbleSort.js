function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let noSwap = true;
        for (var j = 0; j < i; j++) {
            console.log(...arr)
            if (arr[j] > arr[j + 1]) {
                noSwap = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (noSwap) break;
    }
    return arr
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))