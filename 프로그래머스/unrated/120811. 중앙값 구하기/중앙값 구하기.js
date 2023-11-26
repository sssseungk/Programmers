function solution(array) {
    var answer = 0;
    // 배열 오름차순 정렬
    array.sort(function(a, b) {
        return a - b;
    });
    let index = Math.floor(array.length/2);
    answer = array[index];
    return answer;
}