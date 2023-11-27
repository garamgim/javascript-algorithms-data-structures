function nestedEvenSum(input) {
    let sum = 0;

    function helper(obj) {
        for (const key in obj) {
            if (obj[key] % 2 === 0) {
                sum += obj[key];
            }
            if (typeof (obj[key]) === "object") {
                helper(obj[key]);
            }
        }
    }
    helper(input);
    return sum
}