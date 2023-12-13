function mergeArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    return mergeArray(mergeSort(arr.slice(0, arr.length / 2)), mergeSort(arr.slice(arr.length / 2)))
}

console.log(...mergeSort([1, 4, 8, 2, 7, 11, 5, 3]))