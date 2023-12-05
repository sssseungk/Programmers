function solution(rsp) {
    // 키 : 내는 패, 값 : 이기는 패
    let game = {
        '2': '0',
        '0': '5',
        '5': '2',
    };
    
    // 입력받은 문자열을 문자 하나를 요소로 하는 배열로 생성
    let array = rsp.split('');
    // 이기는 경우를 나타내는 문자열을 넣을 변수 생성
    let answer = "";
    // array 배열의 문자들을 돌면서 각 패를 이기는 값을 answer에 추가함
    for(let i=0; i<array.length; i++){
        answer += game[array[i]];
    }
    return answer;
}
