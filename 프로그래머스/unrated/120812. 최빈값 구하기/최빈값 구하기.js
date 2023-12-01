function solution(array) {
  // 배열 값들의 빈도수를 기록할 객체 생성
  let freq = {};

  // 주어진 배열을 순회하면서 빈도수를 키:값 형태로 기록
  for (let num of array) {
    // 객체에 값이 이미 있으면 빈도수 증가시키기
    if (freq[num]) {
      freq[num]++;
    } else {
      // 객체에 값이 존재하지 않으면 빈도수 1로 지정하기
      freq[num] = 1;
    }
  }

  // 최빈값
  let answer = -1;
  // 최빈값의 빈도수
  let maxFreq = 0;

  // 객체를 순회하면서 최빈값 찾기
  for (let key in freq) {
    // 값의 빈도수가 최빈값 빈도수보다 크면
    if (freq[key] > maxFreq) {
      // 현재 키값을 최빈값으로 지정
      answer = parseInt(key);
      // 현재 키의 값을 최빈값의 빈도수로 지정
      maxFreq = freq[key];
    } else if (freq[key] === maxFreq) {
      // 최빈값이 여러 개인 경우
      answer = -1;
    }
  }

  return answer;
}

