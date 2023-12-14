function solution(polynomial) {
  const array = polynomial.split(" + ");   // ["3x", "7", "x"]

  let varSum = 0;  // 변수의 계수들의 합
  let numSum = 0;   // 상수들의 합

  array.forEach((v) => {
    if (v.includes("x")) {
        // 변수들의 x를 빈 문자열로 대체 (기본값은 1)
      const varNum = v.replace("x", "") || "1";  
      varSum += Number(varNum);  // 계수들의 합 구하기
    } else {
      numSum += Number(v);   // 상수들의 합
    }
  });

  let answer = [];

    // 변수의 계수들 합이 1이면 빈 문자열, 존재하면 값 넣기
  if (varSum) answer.push(`${varSum === 1 ? "" : varSum}x`);
  if (numSum) answer.push(numSum);
  return answer.join(" + ");
}
