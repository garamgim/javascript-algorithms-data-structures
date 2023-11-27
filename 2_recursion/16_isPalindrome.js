function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) { return true }
    return str.at(0) === str.at(-1) && isPalindrome(str.slice(1, str.length - 1))
}