function solution(numbers) {
    let answer = '';
    let alphabet = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    for(let key in alphabet){
        while(numbers.includes(key)){
            numbers = numbers.replace(key, alphabet[key])
        }
    }
    return parseInt(numbers);
}