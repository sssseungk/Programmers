function solution(sides) {
    let count = 0;
    sides.sort((a, b) => a - b); 
    let sum = sides.reduce((acc, cur) => acc + cur);
    let array = [];
    
    // 1. i가 가장 긴 변일 경우
    for(let i=sides[1]+1; i<sum; i++){
        array.push(i);
        count++;
    }
    // 2. sides[1]이 가장 긴 변일 경우
    for(let j=1; j<=sides[1]; j++){
        if(sides[1] < sides[0] + j){
            array.push(j);
            count++;
        }
    }
    return array.length;
}