function findLongestSubstring(str) {
    let max = 0;
    let cnt = {};

    let i = 0;
    let j = 0;

    while (j < str.length) {
        if (!(str[j] in cnt)) {
            cnt[str[j]] = 1;
            j++;
        } else {
            if (Object.keys(cnt).length > max) {
                max = Object.keys(cnt).length;
            }
            delete cnt[str[i]];
            i++;
        }
    }
    return Math.max(max, Object.keys(cnt).length)
}