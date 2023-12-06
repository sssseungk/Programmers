function solution(numbers, k) {
    var answer = 0;
    // k번째 공 던지는 사람의 배열의 인덱스 => 2 * (k - 1)
    // 배열의 인덱스는 0부터 시작이므로 -1 해줘야함.
    
    // 배열 길이를 초과했을 땐 다시 맨 처음으로 돌아가서 계산해야함
    let index = (2 * (k-1)) % numbers.length;
    answer = numbers[index];
    
    return answer;
}