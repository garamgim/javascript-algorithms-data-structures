function naiveStringSearch(longStr, shortStr) {
    let cnt = 0;

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (longStr[i + j] !== shortStr[j]) break;
            if (j === shortStr.length - 1) cnt++;
        }
    }

    return cnt;
}

console.log(naiveStringSearch("aaakkyushialallllsyyyushi", "yushi"))