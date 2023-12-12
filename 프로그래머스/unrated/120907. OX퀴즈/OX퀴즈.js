function solution(quiz) {
    let array = quiz.map((v) => v.split(" ")); 
    let result = [];
    
    for(let i=0; i<array.length; i++){
        let sum = 0;
        if(array[i][1] === '+'){
            sum = Number(array[i][0]) + Number(array[i][2]);
            if(sum === Number(array[i][4])){
                result.push('O');
            }else{
                result.push('X');
            }
        }else if(array[i][1] === '-'){
            sum = Number(array[i][0]) - Number(array[i][2]);
            if(sum === Number(array[i][4])){
                result.push('O');
            }else{
                result.push('X');
            }
        }
    }
    return result;
}
