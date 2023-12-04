function solution(emergency) {
    // {값 : 인덱스} 형태로 emergency 배열의 요소와 인덱스를 담은 새로운 배열 newArray 생성
    // newArray = [{value: 3, index: 0}, {value: 76, index: 1}, {value: 24, index: 2}]
    let newArray = emergency.map((value, index) => ({value, index}));

    // 응급도(요소의 값)를 기준으로 내림차순으로 정렬
    // newArray = [{value: 76, index: 1}, {value: 24, index: 2}, {value: 3, index: 0}]
    newArray.sort((a, b) => b.value - a.value);

    // 응급도에 따라 진료 순서 정한 배열 ranks 생성
    // ranks = [0, 0, 0]
    let ranks = new Array(emergency.length).fill(0);
    
    // newArray 순회하면서 ranks 배열에 진료 순서 넣기
    for(let i=0; i<newArray.length; i++){
        ranks[newArray[i].index] = i + 1;   // 순위는 1부터 시작하기 때문에 +1
    }

    return ranks;
}
