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
