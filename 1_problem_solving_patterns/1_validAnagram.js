function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let anagramCheck1 = {};
    let anagramCheck2 = {};

    for (let char of str1) {
        anagramCheck1[char] = (anagramCheck1[char] || 0) + 1;
    }

    for (let char of str2) {
        anagramCheck2[char] = (anagramCheck2[char] || 0) + 1;
    }

    for (let key in anagramCheck1) {
        if (!(key in anagramCheck2)) {
            return false
        } else {
            if (anagramCheck1[key] !== anagramCheck2[key]) {
                return false
            }
        }
    }

    return true
}