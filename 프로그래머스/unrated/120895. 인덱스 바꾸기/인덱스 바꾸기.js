function solution(my_string, num1, num2) {
    
    let array = my_string.split('');
    let empty = array[num1];
    array[num1] = array[num2];
    array[num2] = empty;
    
    return array.join('');
}