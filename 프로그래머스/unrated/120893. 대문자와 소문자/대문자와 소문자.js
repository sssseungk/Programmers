function solution(my_string) {
    let answer = [];
    let array = my_string.split("");
    
    for(let i=0; i<array.length; i++){
        // 대문자일 경우
        if(array[i] === array[i].toUpperCase()){
            answer.push(array[i].toLowerCase());
        }else{
            answer.push(array[i].toUpperCase());
        }
    }
    return answer.join("");
}