function stringifyNumbers(obj) {
    let newObj = {};

    for (const key in obj) {
        if (typeof (obj[key]) === "number") {
            newObj[key] = obj[key].toString();
        } else if ((typeof (obj[key]) === "object") && !(Array.isArray(obj[key]))) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj
}

