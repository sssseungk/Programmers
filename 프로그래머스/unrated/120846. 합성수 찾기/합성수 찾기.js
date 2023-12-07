function solution(n) {
    let answer = 0;
    // n 이하의 합성수 개수 반환하기
    for(let i=1; i<=n; i++){
        let count = 0;
        for(let j=1; j<=i; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count >= 3){
           answer += 1;
        }
    }
    return answer;
}