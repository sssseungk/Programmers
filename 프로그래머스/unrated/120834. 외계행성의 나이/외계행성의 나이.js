function solution(age) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let newAge = '';

    // 입력받은 나이를 문자열로 변경한 후 한 문자가 배열의 한 요소가 되도록 배열을 만듦
    // index = ['1', '0', '0']
    let index = String(age).split('');

    // index 배열을 순회하면서 각 요소의 값을 alphabet 배열의 인덱스로 지정하여 알파벳으로 변경 
    for(let i=0; i<index.length; i++){
        newAge += alphabet[parseInt(index[i])];
    }

    return newAge;
}
