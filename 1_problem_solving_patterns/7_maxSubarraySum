function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null
    }

    let temp = 0;
    for (let i = 0; i < num; i++) {
        temp += arr[i]
    }

    let max = temp;

    for (let i = 1; i <= (arr.length - num); i++) {
        temp = temp - arr[i - 1] + arr[num + i - 1];
        if (temp > max) {
            max = temp;
        }
    }

    return max
}