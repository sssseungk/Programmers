function solution(n) {
    let sum = 0;
    let array = String(n).split("");
    return array.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}