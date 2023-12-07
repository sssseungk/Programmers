function solution(n) {
    var answer = 0;
    let i=1;
    while(factorial(i) <= n){
        answer = i;
        i++;
    }
    return answer;
}

// 팩토리얼 값 구하는 함수 
function factorial(number){
    let sum = 1;
    for(let i=1; i<=number; i++){
        sum = sum * i;
    }
    return sum;
}