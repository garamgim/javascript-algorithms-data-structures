function capitalizeFirst(arr) {
    let answer = [];

    function helper(input) {
        if (input.length === 0) { return }
        answer.push(input[0][0].toUpperCase() + input[0].slice(1));
        helper(input.slice(1));
    }

    helper(arr);
    return answer
}

