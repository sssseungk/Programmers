function solution(numbers, k) {
    var answer = 0;
    // k번째 공 던지는 사람의 배열의 인덱스 => 2 * (k - 1)
    // 배열의 인덱스는 0부터 시작이므로 -1 해줘야함.
    
    // % numbers.length 를 통해 배열의 길이를 초과할 경우 처음으로 돌아가게 됨
    // k번째 공 던진 사람의 위치 찾는 식
    let index = (2 * (k-1)) % numbers.length;
    answer = numbers[index];
    
    return answer;
}