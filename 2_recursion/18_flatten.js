function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "object") {
            for (let j = arr[i].length - 1; j >= 0; j--) {
                arr.splice(i + 1, 0, arr[i][j]);
            }
            arr.splice(i, 1);
        } else if (i === arr.length - 1 && typeof (arr[i] !== "object")) {
            return arr
        }
    }
    return flatten(arr)
}
