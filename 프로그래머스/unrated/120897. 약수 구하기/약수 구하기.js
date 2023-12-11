// 1. 약수 구해서 배열에 넣기
// 2. 오름차순 하기

function solution(n) {
    let answer = [];
    
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}