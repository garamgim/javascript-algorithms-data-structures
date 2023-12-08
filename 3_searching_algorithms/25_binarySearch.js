function binarySearch(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] === num) {
            return mid
        } else if (arr[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1
}


