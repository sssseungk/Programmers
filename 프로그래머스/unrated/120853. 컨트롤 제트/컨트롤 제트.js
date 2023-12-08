// s : 1 2 Z 3 => 문자열에서 숫자 골라내서 더하기. Z가 나오면 전에 더했던 숫자를 빼기. 

function solution(s) {
    var answer = 0;
    let array = s.split(" ");  // 공백 기준으로 문자열 나누기 :: [ '1', '2', 'Z', '3' ]
    for(let i=0; i<array.length; i++){
        if(array[i] === 'Z'){
            answer = answer - (array[i-1]*1);
        }else{
            answer += array[i]*1;
        }
    }
    return answer;
}