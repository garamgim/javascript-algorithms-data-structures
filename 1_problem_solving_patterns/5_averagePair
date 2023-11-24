function averagePair(arr, num) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if ((arr[i] + arr[j]) / 2 > num) {
            j--;
        } else if ((arr[i] + arr[j]) / 2 < num) {
            i++;
        } else {
            return true
        }
    }

    return false
}