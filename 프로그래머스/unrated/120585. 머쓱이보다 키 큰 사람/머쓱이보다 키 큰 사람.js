function solution(array, height) {
    let answer = [];
    answer = array.filter(v => v > height);
    return answer.length;
}