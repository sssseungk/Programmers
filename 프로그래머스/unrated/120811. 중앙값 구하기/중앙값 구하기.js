function solution(array) {
    var answer = 0;

    // 배열 오름차순 정렬
    array.sort(function(a, b) {
        return a - b;
    });

    // 배열 중앙 인덱스 값 구하기 
    let index = Math.floor(array.length/2);
    // 배열의 중앙값을 answer에 저장
    answer = array[index];
    return answer;
}