function power(num, pw) {
    if (pw === 0) { return 1 }
    return num = num * power(num, pw - 1);
}