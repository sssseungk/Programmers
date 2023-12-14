function solution(numbers) {
    numbers.sort((a, b) => b - a);   // 내림차순 [4, 2, 1, -3, -5]
    let first_max = numbers[0] * numbers[1]
    let last_max = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    return first_max > last_max ? first_max : last_max
}