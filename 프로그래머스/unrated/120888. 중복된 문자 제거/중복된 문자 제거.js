function solution(my_string) {
    let array2 = [];
    let array = my_string.split("");
    for(let i=0; i<array.length;i++){
        if(!array2.includes(array[i])){
            array2.push(array[i]);
        }
    }
    
    return array2.join("");
}