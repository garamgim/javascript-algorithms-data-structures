function sameFrequency(num1, num2) {
    let num1Frequency = {};
    let num2Frequency = {};

    function getNumber(num, obj) {
        while (num > 0) {
            obj[num % 10] = (obj[num % 10] || 0) + 1;
            num = parseInt(num / 10);
        }
    }

    getNumber(num1, num1Frequency);
    getNumber(num2, num2Frequency);

    for (let key in num1Frequency) {
        if (!(key in num2Frequency)) {
            return false
        } else {
            if (num1Frequency[key] !== num2Frequency[key]) {
                return false
            }
        }
    }

    return true
}
