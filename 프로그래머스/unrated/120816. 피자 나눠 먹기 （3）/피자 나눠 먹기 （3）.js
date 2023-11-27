function solution(slice, n) {
    var answer = 0;
    if(slice > n){
        answer = 1;
    } else if(slice < n){
        if(n % slice === 0){
            answer = Math.floor(n / slice);
        }else{
            answer = Math.floor(n / slice) + 1;
        }
    }else if(slice === n){
        answer = 1;
    }
    return answer;
}