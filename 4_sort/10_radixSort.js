function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (digitCount(arr[i]) > max) max = digitCount(arr[i]);
    }
    return max
}

function radixSort(arr) {
    let maxDigit = mostDigits(arr);
    for (let i = 0; i < maxDigit; i++) {
        let counter = [];
        for (let j = 0; j < 10; j++) {
            counter.push([]);
        }
        for (let k = 0; k < arr.length; k++) {
            counter[Math.floor((arr[k] / Math.pow(10, i) % 10))].push(arr[k]);
        }
        arr = [].concat(...counter);
        console.log(arr)
    }

    return arr
}