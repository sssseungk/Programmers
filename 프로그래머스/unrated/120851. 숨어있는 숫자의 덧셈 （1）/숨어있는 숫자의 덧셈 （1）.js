function solution(my_string) {
    var answer = 0;
    let array = my_string.split('').filter((v) => !isNaN(v)).map((v) => +v);
    for(let i=0; i<array.length; i++){
        answer = answer + array[i];
    }
    return answer;
}

// 1. 문자열에서 숫자 뽑아내기
// 2. 숫자들 더하기