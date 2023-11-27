function capitalizeWords(input) {
    let ans = [];

    function helper(arr) {
        if (arr.length === 0) { return }
        ans.push(arr[0].toUpperCase());
        helper(arr.slice(1));
    }

    helper(input);
    return ans

}