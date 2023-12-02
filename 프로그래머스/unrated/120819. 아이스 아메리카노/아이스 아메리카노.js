function solution(money) {
    var answer = [];
    // 최대 잔 수, 남는 돈
    let count = Math.floor(money / 5500);
    let restMoney = money - (count * 5500);
    // answer 배열에 추가
    answer.push(count, restMoney);
    
    return answer;
}