function solution(num, k) {
    let array = String(num).split(""); 
    let answer = 0;
    
    for(let i=0; i<array.length; i++){
        if(Number(array[i]) === k){
            return i+1;
        }
    }
    return -1;
}