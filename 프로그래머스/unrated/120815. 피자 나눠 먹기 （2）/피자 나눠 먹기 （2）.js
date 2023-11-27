function solution(n) {
    var answer = 0;
    // 최대 공약수 구하기
    const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
    let gcd = getGcd(6, n);
    let lcm = (6 * n) / gcd
    // 최대공약수로 최소공약수 구하기
    answer = lcm / 6;
    return answer;
}

// 6과 n의 최소공약수를 구해서, 6으로 나누면 피자 판 개수.