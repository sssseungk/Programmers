function solution(box, n) {
    let array = [];
    let answer = 1;
    
    for(let i=0; i<box.length; i++){
        array.push(Math.floor(box[i] / n));
    }
    for(let i=0; i<array.length; i++){
        answer = answer * array[i]
    }
    return answer;
}