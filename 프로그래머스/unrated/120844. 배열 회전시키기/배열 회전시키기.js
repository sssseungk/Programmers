function solution(numbers, direction) {
    if(direction === 'left'){
        // 배열 왼쪽으로 이동 : 첫 번째 요소 뒤에 넣기
        let first = numbers.shift();
        numbers.push(first);
    } else if(direction === 'right'){
        // 오른쪽으로 이동 : 마지막 요소 빼서 앞에 넣기
        let last = numbers.pop();
        numbers.unshift(last);
    }
    return numbers;
}