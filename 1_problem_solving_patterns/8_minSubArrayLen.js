function minSubArrayLen(arr, num) {

    let min = [];

    let i = 0;
    let j = 0;
    let sum = arr[i];

    while (j < arr.length) {
        if (sum < num) {
            j++;
            sum += arr[j];
        } else {
            min.push((j - i + 1));
            sum -= arr[i];
            i++;
        }
    }

    return min.length === 0 ? 0 : Math.min(...min);
}
