function solution(array) {
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i].length === 1){
            if(array[i] === 7){
                count++;
            }
        }
        else{
            let newArray = String(array[i]).split("");  
            for(let i=0; i<newArray.length; i++){
                if(newArray[i] === '7'){
                    count ++;
                }
            }
        }
    }
    return count;
}