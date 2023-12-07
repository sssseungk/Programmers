function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++){
        // 약수의 개수를 세기 위한 변수를 for문 안에 선언해야함
        let count = 0; 
        for(let j=1; j<=i; j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count >= 3){ //약수의 개수를 모두 세운 후 합성수를 판별
           answer += 1;
        }
    }
    return answer;
}