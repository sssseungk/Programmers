function solution(my_string) {
    let alphabet = ['a', 'e', 'i', 'o', 'u']; 
    let array = my_string.split('');  
    // 입력받은 문자열의 요소를 소문자로 바꾼게 alphabet 배열에 존재하지 않는 요소들로 새로운 배열 생성
    let result = array.filter(char => !alphabet.includes(char)).join(""); 
    return result; 
}
