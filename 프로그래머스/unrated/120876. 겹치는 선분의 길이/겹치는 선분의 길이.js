function solution(lines) {
    // 각 선분의 시작점과 끝점을 모두 저장할 배열 생성
    let points = [];

    // 각 선분의 시작점과 끝점을 배열에 추가
    for(let i=0; i<3; i++) {
        points.push({val: lines[i][0], type: 'start'});
        points.push({val: lines[i][1], type: 'end'});
    }
    
    // points 배열을 val 기준으로 오름차순 정렬
    points.sort((a, b) => a.val - b.val);
    
    let overlapLength = 0;
    let count = 0;
    
    // 배열을 순회하며 겹치는 구간 계산
    // count로 현재 겹치고 있는 선분 수 계산하기
    for(let i=0; i<points.length; i++) {
        if(points[i].type === 'start') {
            count++;
        } else {
            count--;
        }   
        // 두 개 이상의 선분이 겹치는 경우
        if(count >= 2 && i < points.length - 1) {
            overlapLength += points[i+1].val - points[i].val;
        }
    }
    return overlapLength;
}

