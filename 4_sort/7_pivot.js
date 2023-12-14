function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    let curr = startIdx;
    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (arr[i] < arr[startIdx]) {
            curr++;
            [arr[i], arr[curr]] = [arr[curr], arr[i]];
        }
    }
    [arr[startIdx], arr[curr]] = [arr[curr], arr[startIdx]]
    return curr
}