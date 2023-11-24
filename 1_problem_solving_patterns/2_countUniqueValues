function countUniqueValues(arr) {
    if (arr.length < 2) {
        return arr.length
    }

    let i = 0;
    let j = i + 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1
}