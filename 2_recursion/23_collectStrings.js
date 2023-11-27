function collectStrings(input) {
    let ans = [];

    function helper(obj) {
        for (const key in obj) {
            if (typeof (obj[key]) === "string") {
                ans.push(obj[key]);
            } else if (typeof (obj[key]) === "object") {
                helper(obj[key]);
            }
        }
    }

    helper(input);
    return ans
}
