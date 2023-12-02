// readline 모듈 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력 받는 값을 저장할 변수
let input = [];
    
// 사용자가 한 줄 입력하고 엔터 누를 때마다
rl.on('line', function (line) {
    // 입력받은 한 줄을 공백 기준으로 분리해 배열로 만든다.  (ex. "10 20 30" => ["10", "20", "30"])
    input = line.split(' ');
}).on('close', function () {
    // 사용자가 입력을 마치고 프로그램을 종료할 때
    // input 배열에서 첫 번째 요소를 숫자로 변환한다.
    let inputNum = Number(input);
    for (let i = 1; i <= inputNum; i++) {
        // 각 줄마다 '*'문자를 하나씩 늘리면서 출력한다.
        console.log('*'.repeat(i))
    }
});