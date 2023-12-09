function solution(order) {
    let count = 0;
    let array = String(order).split("");
    
    for(let i=0; i<array.length; i++){
        if(array[i] == 3 || array[i] == 6 || array[i] == 9){
            count++;
        }       
    }
    return count;
}
