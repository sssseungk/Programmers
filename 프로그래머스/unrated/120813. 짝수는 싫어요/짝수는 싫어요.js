function solution(n) {
    let answer = [];
    // n이 짝수일 경우
    if(n % 2 !== 0){
        for(let i=1; i<=n; i+=2){
            answer.push(i);
        }
    }
    // n이 홀수일 경우
    else{
        for(let i=1; i<=n; i+=2){
            answer.push(i);
        }
    }
    return answer;
}