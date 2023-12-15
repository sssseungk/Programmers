function solution(my_string) {
  let sum = 0; 
  let numString = ''; 

  for (let i = 0; i < my_string.length; i++) {
    let char = my_string[i];
    if (!isNaN(char)) {    // 현재 요소가 숫자인 경우
      numString += char;
    }
    // 숫자가 아니거나 마지막 문자이면
    if (isNaN(char) || i === my_string.length - 1) {
      if (numString !== '') {
        sum += Number(numString);
        numString = '';
      }
    }
  }
  return sum;
}
