function isSubsequence(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[0]) {
            str1 = str1.slice(1);
        }
    }
    return (str1.length === 0) ? true : false
}