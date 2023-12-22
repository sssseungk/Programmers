function solution(n) {
    let count = 0;       // 몇 번째 수인지를 나타내는 변수
    let transNum = 0;    // count번째 수가 3x 마을에서 사용되는 숫자로 변환된 값 저장하는 변수

    while (count !== n) {
        transNum += 1;
        // 변환된 수가 3의 배수이거나 3을 포함한다면
        if (transNum % 3 === 0 || String(transNum).includes("3")) {
            continue;
        }
        count += 1;
    }
    return transNum;
}
