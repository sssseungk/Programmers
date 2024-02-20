function solution(a, b) {
    let answer = 0;
    
    // 최대공약수 구하기
    let gcd = 1;
    for ( let i = 2; i <= Math.min(a, b); i ++ ){
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    
    // 기약분수로 나타낸 분모
    let bottomNew = b / gcd;
    
    while (bottomNew % 2 === 0) bottomNew = bottomNew / 2; 
    while (bottomNew % 5 === 0) bottomNew = bottomNew / 5; 
    
    answer = bottomNew === 1 ? 1 : 2; 
    return answer;
}