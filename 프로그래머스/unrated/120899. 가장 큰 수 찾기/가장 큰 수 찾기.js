function solution(array) {
    let max = 0;
    let index = 0;
    let answer = [];
    
    for(let i=0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
            index = i;
        }
    }
    answer.push(max, index)
    
    return answer;
}