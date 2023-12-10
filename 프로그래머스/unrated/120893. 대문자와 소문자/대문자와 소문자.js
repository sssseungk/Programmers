function solution(my_string) {
    // 대문자 <-> 소문자 변환한 문자열
    var answer = '';
    
    for(let i=0; i<my_string.length; i++){
        // 대문자이면
        if(my_string[i] === my_string[i].toUpperCase()){
            answer += my_string[i].toLowerCase();
        }else if(my_string[i] === my_string[i].toLowerCase()){
            answer +=  my_string[i].toUpperCase();
        }
    }
    return answer;
}