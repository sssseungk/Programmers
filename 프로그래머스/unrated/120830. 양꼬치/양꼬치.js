function solution(n, k) {
    var answer = 0;
    let service = 0;
    
    // 10인분 이상 시켰을 때
    if(n >= 10){
        // 서비스 음료 2000원 * 서비스 음료 개수
        service = 2000 * Math.floor(n/10);
        answer = (12000 * n) + (2000 * k) - service;
    }
    else{
        answer = (12000 * n) + (2000 * k)
    }
    return answer;
}