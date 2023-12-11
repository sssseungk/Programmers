function solution(my_string) {
    let numbers = my_string.split(/\s*[+-]\s*/).map(Number);
    let operators = my_string.match(/[+-]/g);
    let sum = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            sum += numbers[i + 1];
        } else if (operators[i] === '-') {
            sum -= numbers[i + 1];
        }
    }

    return sum;
}
