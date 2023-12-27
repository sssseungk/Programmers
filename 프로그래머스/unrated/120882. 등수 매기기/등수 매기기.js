function solution(score) {
    // 키 : 평균값     값: 평균값 가진 학생들의 인덱스
    let object = {};
    // 배열 순회하면서 평균값 구하기
    for(let i = 0; i < score.length; i++){
        const average = (score[i][0] + score[i][1]) / 2;
        // 객체에 키값으로 평균값 없으면 추가하기
        if (!object.hasOwnProperty(average)) {
            object[average] = [];
        }
        // 객체에 키값 존재하면 해당 키에 대한 값으로 인덱스 넣기
        object[average].push(i);
    }

    // 객체의 키값(평균값)을 내림차순 정렬한 배열 생성
    let sortedAverages = Object.keys(object).sort((a, b) => b - a);

    let rank = 1;   // 등수 나타내는 변수
    let result = [];   
    for(let i = 0; i < sortedAverages.length; i++){
        // 현재 탐색하는 평균값
        const average = sortedAverages[i];
        // 객체에서 현재 탐색하는 평균값을 가진 학생들의 인덱스를 뽑아와 students에 저장 (배열형태)
        const students = object[average];
        for(let j = 0; j < students.length; j++) {
            result[students[j]] = rank;   // 같은 평균값 가진 학생들에게 동일한 등수 주기
        }
        rank += students.length;   // students 배열 길이만큼 ran 더해 등수 정하기
    }

    return result;
}
